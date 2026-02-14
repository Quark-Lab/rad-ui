import path from "node:path";
import fs from "fs-extra";
import * as p from "@clack/prompts";
import chalk from "chalk";
import {
  detectProjectType,
  detectPackageManager,
  detectTailwindVersion,
  detectSrcDir,
  getDefaultCssPath,
  getDefaultTailwindConfig,
} from "../utils/detect-project";
import { writeConfig, configExists, type RadUIConfig } from "../utils/config";
import { themes, generateThemeCSS } from "../registry/themes";
import { logger } from "../utils/logger";

export async function initCommand(opts: { yes?: boolean }) {
  const cwd = process.cwd();

  p.intro(chalk.bold("Welcome to Rad UI"));

  // Check if already initialized
  if (await configExists(cwd)) {
    const shouldContinue = await p.confirm({
      message: "Rad UI is already initialized in this project. Reinitialize?",
      initialValue: false,
    });

    if (p.isCancel(shouldContinue) || !shouldContinue) {
      p.cancel("Cancelled.");
      process.exit(0);
    }
  }

  // Detect project environment
  const projectType = await detectProjectType(cwd);
  const packageManager = await detectPackageManager(cwd);
  const detectedSrcDir = await detectSrcDir(cwd);
  const defaultCssPath = getDefaultCssPath(projectType, detectedSrcDir);
  const tailwindVersion = await detectTailwindVersion(cwd, defaultCssPath);

  if (projectType !== "unknown") {
    p.log.info(`Detected project: ${chalk.cyan(projectType)}`);
  }
  p.log.info(`Package manager: ${chalk.cyan(packageManager)}`);
  p.log.info(`Tailwind CSS: ${chalk.cyan(tailwindVersion)}`);
  // Display source directory info (show "." as "root" for clarity)
  const srcDirDisplay = detectedSrcDir === "." ? "project root" : detectedSrcDir + "/";
  p.log.info(`Source directory: ${chalk.cyan(srcDirDisplay)}`);

  // Compute smart defaults for aliases based on project structure.
  // For Next.js without src, @ resolves to root but files should go into app/.
  const isRootNextJs = projectType === "nextjs" && detectedSrcDir === ".";
  const aliasBase = isRootNextJs ? "@/app" : "@";

  const defaultComponents = `${aliasBase}/components/ui`;
  const defaultUtils = `${aliasBase}/lib/utils`;
  const defaultHooks = `${aliasBase}/hooks`;

  // Helper to show example paths based on srcDir
  const examplePrefix = isRootNextJs ? "app/" : detectedSrcDir === "." ? "" : detectedSrcDir + "/";

  // Prompts
  const responses = await p.group(
    {
      theme: () =>
        p.select({
          message: "Choose a color theme for your project:",
          options: themes.map((t) => ({
            value: t.name,
            label: t.label,
          })),
          initialValue: "kahgel",
        }),
      srcDir: () =>
        p.text({
          message: `Base directory that @ resolves to (use "." for project root):`,
          placeholder: detectedSrcDir,
          defaultValue: detectedSrcDir,
        }),
      componentsPath: () =>
        p.text({
          message: `Where to add UI components (e.g. ${examplePrefix}components/ui):`,
          placeholder: defaultComponents,
          defaultValue: defaultComponents,
        }),
      utilsPath: () =>
        p.text({
          message: `Where to create the cn() helper (e.g. ${examplePrefix}lib/utils.ts):`,
          placeholder: defaultUtils,
          defaultValue: defaultUtils,
        }),
      hooksPath: () =>
        p.text({
          message: `Where to add hooks (e.g. ${examplePrefix}hooks):`,
          placeholder: defaultHooks,
          defaultValue: defaultHooks,
        }),
      cssPath: () =>
        p.text({
          message: `Path to your global CSS file:`,
          placeholder: defaultCssPath,
          defaultValue: defaultCssPath,
        }),
      ...(tailwindVersion === "v3"
        ? {
            tailwindConfig: () =>
              p.text({
                message: `Path to your Tailwind config file:`,
                placeholder: getDefaultTailwindConfig(projectType),
                defaultValue: getDefaultTailwindConfig(projectType),
              }),
          }
        : {}),
    },
    {
      onCancel: () => {
        p.cancel("Cancelled.");
        process.exit(0);
      },
    }
  );

  const srcDir = (responses.srcDir as string) || detectedSrcDir;

  const s = p.spinner();

  // 1. Write config file
  s.start("Creating configuration...");

  const config: RadUIConfig = {
    $schema: "https://www.quarklab.dev/schema.json",
    registry: "https://www.quarklab.dev/r",
    tailwindVersion,
    srcDir,
    platform: "web",
    theme: responses.theme as string,
    tailwind: {
      ...(tailwindVersion === "v3" && responses.tailwindConfig
        ? { config: responses.tailwindConfig as string }
        : {}),
      css: responses.cssPath as string,
    },
    aliases: {
      components: responses.componentsPath as string,
      utils: responses.utilsPath as string,
      hooks: responses.hooksPath as string,
    },
  };

  await writeConfig(cwd, config);
  s.stop("Configuration created.");

  // 2. Write CSS with theme variables
  s.start("Setting up theme...");

  const selectedTheme = themes.find((t) => t.name === config.theme);
  if (selectedTheme) {
    const cssPath = path.resolve(cwd, config.tailwind.css);
    const cssDir = path.dirname(cssPath);
    await fs.ensureDir(cssDir);

    const cssContent = generateThemeCSS(selectedTheme, tailwindVersion);
    await fs.writeFile(cssPath, cssContent, "utf-8");
  }

  s.stop("Theme configured.");

  // 3. Copy lib/utils.ts
  s.start("Setting up utilities...");

  // Helper function to resolve alias to path (handles "." srcDir)
  const resolveAliasPath = (alias: string): string => {
    const prefix = srcDir === "." ? "" : srcDir + "/";
    return alias.replace(/^@\//, prefix).replace(/^~\//, prefix);
  };

  const utilsAlias = config.aliases.utils;
  const utilsRelPath = resolveAliasPath(utilsAlias) + ".ts";
  const utilsDestPath = path.resolve(cwd, utilsRelPath);
  const utilsDir = path.dirname(utilsDestPath);
  await fs.ensureDir(utilsDir);

  const utilsContent = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

  await fs.writeFile(utilsDestPath, utilsContent, "utf-8");

  s.stop("Utilities ready.");

  // 4. Configure Tailwind
  if (tailwindVersion === "v3" && config.tailwind.config) {
    s.start("Configuring Tailwind CSS...");

    const tailwindConfigPath = path.resolve(cwd, config.tailwind.config);
    const componentsRelPath = resolveAliasPath(config.aliases.components);

    if (await fs.pathExists(tailwindConfigPath)) {
      // Read existing config and try to add our content path
      let tailwindContent = await fs.readFile(tailwindConfigPath, "utf-8");
      const contentPath = `./${componentsRelPath}/**/*.{ts,tsx}`;

      if (!tailwindContent.includes(contentPath)) {
        tailwindContent = tailwindContent.replace(
          /(content\s*:\s*\[)/,
          `$1\n    "${contentPath}",`
        );
        await fs.writeFile(tailwindConfigPath, tailwindContent, "utf-8");
        p.log.info(`Added component path to ${config.tailwind.config}`);
      }
    } else {
      // Create a new tailwind config
      const isTS = config.tailwind.config.endsWith(".ts");
      const newConfig = isTS
        ? `import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./${srcDir}/**/*.{js,ts,jsx,tsx,mdx}",
    "./${componentsRelPath}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
`
        : `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./${srcDir}/**/*.{js,ts,jsx,tsx,mdx}",
    "./${componentsRelPath}/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        border: "hsl(var(--border))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [],
};
`;
      await fs.writeFile(tailwindConfigPath, newConfig, "utf-8");
    }

    s.stop("Tailwind CSS configured.");
  } else {
    p.log.info(
      `Tailwind v4 detected — theme variables added directly to ${chalk.cyan(config.tailwind.css)}`
    );
  }

  // 5. Install base dependencies
  s.start("Installing base dependencies...");

  const baseDeps = ["clsx", "tailwind-merge", "class-variance-authority"];

  const installCmd = getInstallCommand(packageManager, baseDeps);

  try {
    const { execa } = await import("execa");
    await execa(installCmd.command, installCmd.args, {
      cwd,
      stdio: "pipe",
    });
    s.stop("Dependencies installed.");
  } catch {
    s.stop("Could not auto-install dependencies.");
    p.log.warn(`Please manually install: ${chalk.cyan(baseDeps.join(" "))}`);
  }

  // Done
  logger.break();

  // Helper to show resolved paths in summary
  const showResolvedPath = (alias: string, addExtension?: string): string => {
    const resolved = resolveAliasPath(alias);
    return resolved + (addExtension || "");
  };

  p.note(
    [
      `${chalk.green("Rad UI has been initialized!")}`,
      "",
      `Add components with: ${chalk.cyan("npx @quarklab/rad-ui add <component>")}`,
      `Add all components:  ${chalk.cyan("npx @quarklab/rad-ui add --all")}`,
      "",
      `Theme: ${chalk.cyan(selectedTheme?.label || config.theme)}`,
      `Tailwind: ${chalk.cyan(tailwindVersion)}`,
      `Components: ${chalk.cyan(config.aliases.components)} → ${chalk.dim(showResolvedPath(config.aliases.components))}`,
      `Utils: ${chalk.cyan(config.aliases.utils)} → ${chalk.dim(showResolvedPath(config.aliases.utils, ".ts"))}`,
      `Hooks: ${chalk.cyan(config.aliases.hooks)} → ${chalk.dim(showResolvedPath(config.aliases.hooks))}`,
    ].join("\n"),
    "Next steps"
  );

  p.outro("Happy building!");
}

function getInstallCommand(
  pm: string,
  packages: string[]
): { command: string; args: string[] } {
  switch (pm) {
    case "pnpm":
      return { command: "pnpm", args: ["add", ...packages] };
    case "yarn":
      return { command: "yarn", args: ["add", ...packages] };
    case "bun":
      return { command: "bun", args: ["add", ...packages] };
    default:
      return { command: "npm", args: ["install", ...packages] };
  }
}
