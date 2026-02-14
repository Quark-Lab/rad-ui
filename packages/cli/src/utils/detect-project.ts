import path from "node:path";
import fs from "fs-extra";

export type ProjectType = "nextjs" | "vite" | "cra" | "expo" | "unknown";
export type PackageManager = "npm" | "yarn" | "pnpm" | "bun";
export type TailwindVersion = "v3" | "v4";

export async function detectProjectType(cwd: string): Promise<ProjectType> {
  const pkgPath = path.resolve(cwd, "package.json");
  if (!(await fs.pathExists(pkgPath))) {
    return "unknown";
  }

  const pkg = await fs.readJson(pkgPath);
  const allDeps = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  };

  if (allDeps["next"]) return "nextjs";
  if (allDeps["expo"]) return "expo";
  if (allDeps["vite"]) return "vite";
  if (allDeps["react-scripts"]) return "cra";

  return "unknown";
}

export async function detectPackageManager(
  cwd: string
): Promise<PackageManager> {
  if (await fs.pathExists(path.resolve(cwd, "bun.lockb"))) return "bun";
  if (await fs.pathExists(path.resolve(cwd, "pnpm-lock.yaml"))) return "pnpm";
  if (await fs.pathExists(path.resolve(cwd, "yarn.lock"))) return "yarn";
  return "npm";
}

/**
 * Detect Tailwind CSS version by checking:
 * 1. package.json dependency version
 * 2. CSS file content (@import "tailwindcss" = v4, @tailwind base = v3)
 * 3. Existence of tailwind.config file (present = v3)
 */
export async function detectTailwindVersion(
  cwd: string,
  cssPath?: string
): Promise<TailwindVersion> {
  // 1. Check package.json for tailwindcss version
  const pkgPath = path.resolve(cwd, "package.json");
  if (await fs.pathExists(pkgPath)) {
    try {
      const pkg = await fs.readJson(pkgPath);
      const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };
      const twVersion = allDeps["tailwindcss"];

      if (twVersion) {
        // Strip ^ ~ >= etc. and check the major version
        const cleanVersion = twVersion.replace(/^[\^~>=<]+/, "");
        if (cleanVersion.startsWith("4")) return "v4";
        if (cleanVersion.startsWith("3")) return "v3";
      }
    } catch {
      // ignore parse errors
    }
  }

  // 2. Check CSS file content for v4 indicators
  if (cssPath) {
    const fullCssPath = path.resolve(cwd, cssPath);
    if (await fs.pathExists(fullCssPath)) {
      try {
        const cssContent = await fs.readFile(fullCssPath, "utf-8");
        if (
          cssContent.includes('@import "tailwindcss"') ||
          cssContent.includes("@import 'tailwindcss'")
        ) {
          return "v4";
        }
        if (cssContent.includes("@tailwind base")) {
          return "v3";
        }
      } catch {
        // ignore read errors
      }
    }
  }

  // 3. Check for tailwind.config file (v3 indicator)
  const configFiles = [
    "tailwind.config.ts",
    "tailwind.config.js",
    "tailwind.config.cjs",
    "tailwind.config.mjs",
  ];

  for (const file of configFiles) {
    if (await fs.pathExists(path.resolve(cwd, file))) {
      return "v3";
    }
  }

  // Default to v4 for new projects (modern default)
  return "v4";
}

/**
 * Detect the source directory by checking tsconfig/jsconfig paths or common patterns.
 *
 * Returns:
 * - "src" if the alias points to ./src/*
 * - "app" if the alias points to ./app/*
 * - "." if the alias points to ./* (root-level project structure)
 */
export async function detectSrcDir(cwd: string): Promise<string> {
  // Check tsconfig.json and jsconfig.json for paths alias
  const configFiles = ["tsconfig.json", "jsconfig.json"];

  for (const file of configFiles) {
    const configPath = path.resolve(cwd, file);
    if (await fs.pathExists(configPath)) {
      try {
        const raw = await fs.readFile(configPath, "utf-8");
        // Parse JSON — try direct parse first, then strip comments if needed.
        // The comment-stripping regexes preserve double-quoted strings so that
        // paths like "**/*.ts" are not corrupted by the // pattern.
        let config;
        try {
          config = JSON.parse(raw);
        } catch {
          const cleaned = raw
            .replace(
              /("(?:[^"\\]|\\.)*")|\/\/.*$/gm,
              (_, str) => str || ""
            )
            .replace(
              /("(?:[^"\\]|\\.)*")|\/\*[\s\S]*?\*\//g,
              (_, str) => str || ""
            )
            // Remove trailing commas before } or ]
            .replace(/,\s*([\]}])/g, "$1");
          config = JSON.parse(cleaned);
        }

        const paths = config?.compilerOptions?.paths;
        if (paths) {
          // Look for @/* or ~/* alias
          const aliasKey = Object.keys(paths).find(
            (k) => k === "@/*" || k === "~/*"
          );
          if (aliasKey) {
            const aliasTargets = paths[aliasKey];
            if (Array.isArray(aliasTargets) && aliasTargets.length > 0) {
              // e.g., ["./src/*"] -> "src"
              // e.g., ["./*"] -> "" (root)
              const target = aliasTargets[0]
                .replace(/^\.\//, "")
                .replace(/\/?\*$/, "");

              // If target is empty string, it means root (./)
              return target === "" ? "." : target;
            }
          }
        }
      } catch {
        // ignore parse errors
      }
    }
  }

  // Check common directory patterns
  if (await fs.pathExists(path.resolve(cwd, "src"))) return "src";
  if (await fs.pathExists(path.resolve(cwd, "app"))) return "app";

  return "src";
}

export function getDefaultCssPath(
  projectType: ProjectType,
  srcDir?: string
): string {
  // If srcDir is "." (root), adjust paths accordingly
  const prefix = srcDir === "." ? "" : srcDir ? `${srcDir}/` : "src/";

  switch (projectType) {
    case "nextjs":
      return `${prefix}app/globals.css`;
    case "vite":
      return `${prefix}index.css`;
    case "cra":
      return `${prefix}index.css`;
    case "expo":
      return "global.css";
    default:
      return `${prefix}globals.css`;
  }
}

export function getDefaultTailwindConfig(projectType: ProjectType): string {
  switch (projectType) {
    case "expo":
      return "tailwind.config.js";
    default:
      return "tailwind.config.ts";
  }
}
