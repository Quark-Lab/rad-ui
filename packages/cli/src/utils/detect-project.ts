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
 * Detect the source directory by checking tsconfig paths or common patterns.
 */
export async function detectSrcDir(cwd: string): Promise<string> {
  // Check tsconfig.json for paths alias
  const tsconfigPath = path.resolve(cwd, "tsconfig.json");
  if (await fs.pathExists(tsconfigPath)) {
    try {
      const raw = await fs.readFile(tsconfigPath, "utf-8");
      // Simple parse — handle comments by stripping them
      const cleaned = raw
        .replace(/\/\/.*$/gm, "")
        .replace(/\/\*[\s\S]*?\*\//g, "");
      const tsconfig = JSON.parse(cleaned);

      const paths = tsconfig?.compilerOptions?.paths;
      if (paths) {
        // Look for @/* or ~/* alias
        const aliasKey = Object.keys(paths).find(
          (k) => k === "@/*" || k === "~/*"
        );
        if (aliasKey) {
          const aliasTargets = paths[aliasKey];
          if (Array.isArray(aliasTargets) && aliasTargets.length > 0) {
            // e.g., ["./src/*"] -> "src"
            const target = aliasTargets[0]
              .replace(/^\.\//, "")
              .replace(/\/\*$/, "");
            if (target) return target;
          }
        }
      }
    } catch {
      // ignore parse errors
    }
  }

  // Check common directory patterns
  if (await fs.pathExists(path.resolve(cwd, "src"))) return "src";
  if (await fs.pathExists(path.resolve(cwd, "app"))) return "app";

  return "src";
}

export function getDefaultCssPath(projectType: ProjectType): string {
  switch (projectType) {
    case "nextjs":
      return "src/app/globals.css";
    case "vite":
      return "src/index.css";
    case "cra":
      return "src/index.css";
    case "expo":
      return "global.css";
    default:
      return "src/globals.css";
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
