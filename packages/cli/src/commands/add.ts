import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "fs-extra";
import * as p from "@clack/prompts";
import chalk from "chalk";
import {
  readConfig,
  configExists,
  resolveComponentsDir,
  type RadUIConfig,
} from "../utils/config";
import {
  components as registryComponents,
  getComponent,
  getComponentsByPlatform,
  resolveDependencies,
  collectNpmDependencies,
} from "../registry/index";
import { transformImports } from "../utils/transformers";
import { detectPackageManager } from "../utils/detect-project";
import { logger } from "../utils/logger";
import {
  fetchComponent,
  fetchRegistryIndex,
  type RegistryItem,
} from "../utils/fetch-registry";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Resolve the path to bundled templates (fallback).
 */
function getTemplatesDir(): string {
  return path.resolve(__dirname, "..", "templates");
}

/**
 * Read a component from bundled templates (fallback for offline use).
 */
async function readBundledTemplate(
  name: string,
  platform: string
): Promise<RegistryItem | null> {
  const comp = getComponent(name);
  if (!comp) return null;

  const platformDir = platform === "mobile" ? "mobile" : "web";
  const templatesDir = getTemplatesDir();
  const sourceDir = path.resolve(templatesDir, platformDir);

  const files = [];
  for (const file of comp.files) {
    const filePath = path.resolve(sourceDir, file);
    if (await fs.pathExists(filePath)) {
      const content = await fs.readFile(filePath, "utf-8");
      files.push({ path: `ui/${file}`, type: "registry:ui", content });
    }
  }

  // Read utils
  const utilsPath = path.resolve(sourceDir, "lib", "utils.ts");
  const utilsContent = (await fs.pathExists(utilsPath))
    ? await fs.readFile(utilsPath, "utf-8")
    : undefined;

  return {
    name: comp.name,
    type: "registry:ui",
    description: comp.description,
    platform: comp.platform,
    dependencies: Object.keys(comp.npmDependencies),
    registryDependencies: comp.internalDependencies,
    files,
    utils: utilsContent
      ? { path: "lib/utils.ts", content: utilsContent }
      : undefined,
  };
}

/**
 * Get component content — try HTTP first, fall back to bundled templates.
 */
async function getComponentContent(
  name: string,
  config: RadUIConfig
): Promise<RegistryItem | null> {
  // Try HTTP registry first
  if (config.registry) {
    try {
      return await fetchComponent(config.registry, name);
    } catch {
      // Fall through to bundled
    }
  }

  // Fallback to bundled templates
  return readBundledTemplate(name, config.platform);
}

export async function addCommand(
  componentNames: string[],
  opts: { all?: boolean; overwrite?: boolean; path?: string }
) {
  const cwd = process.cwd();

  p.intro(chalk.bold("Add Rad UI Components"));

  // Check config exists
  if (!(await configExists(cwd))) {
    p.log.error(
      `Configuration not found. Run ${chalk.cyan("npx @quarklab/rad-ui init")} first.`
    );
    process.exit(1);
  }

  const config = await readConfig(cwd);

  // Get available components — try remote index first, fall back to bundled registry
  let availableNames: string[];
  let platformComponents = getComponentsByPlatform(config.platform);

  try {
    if (config.registry) {
      const remoteIndex = await fetchRegistryIndex(config.registry);
      const filtered =
        config.platform === "both"
          ? remoteIndex
          : remoteIndex.filter(
              (c) => c.platform === config.platform || c.platform === "shared"
            );
      availableNames = filtered.map((c) => c.name);
    } else {
      availableNames = platformComponents.map((c) => c.name);
    }
  } catch {
    availableNames = platformComponents.map((c) => c.name);
  }

  let selectedNames: string[];

  if (opts.all) {
    selectedNames = availableNames;
    p.log.info(`Adding all ${selectedNames.length} components...`);
  } else if (componentNames.length > 0) {
    // Validate provided names
    const invalid = componentNames.filter((n) => !availableNames.includes(n));
    if (invalid.length > 0) {
      p.log.error(
        `Unknown component(s): ${invalid.map((n) => chalk.red(n)).join(", ")}`
      );
      p.log.info(
        `Available: ${availableNames.map((n) => chalk.cyan(n)).join(", ")}`
      );
      process.exit(1);
    }
    selectedNames = componentNames;
  } else {
    // Interactive multi-select
    const selected = await p.multiselect({
      message: "Which components would you like to add?",
      options: platformComponents.map((c) => ({
        value: c.name,
        label: c.name,
        hint: c.description,
      })),
      required: true,
    });

    if (p.isCancel(selected)) {
      p.cancel("Cancelled.");
      process.exit(0);
    }

    selectedNames = selected as string[];
  }

  // Resolve all dependencies
  const allNames = resolveDependencies(selectedNames);

  // Show which additional deps will be added
  const extraDeps = allNames.filter((n) => !selectedNames.includes(n));
  if (extraDeps.length > 0) {
    p.log.info(
      `Also adding dependencies: ${extraDeps.map((n) => chalk.cyan(n)).join(", ")}`
    );
  }

  // Determine component output directory
  const componentsDir = opts.path
    ? path.resolve(cwd, opts.path)
    : resolveComponentsDir(cwd, config);

  // Check for existing components
  if (!opts.overwrite) {
    const existing: string[] = [];
    for (const name of allNames) {
      const comp = getComponent(name);
      if (!comp) continue;
      for (const file of comp.files) {
        const destPath = path.resolve(componentsDir, file);
        if (await fs.pathExists(destPath)) {
          existing.push(name);
          break;
        }
      }
    }

    if (existing.length > 0) {
      const shouldOverwrite = await p.confirm({
        message: `The following components already exist: ${existing.map((n) => chalk.yellow(n)).join(", ")}. Overwrite?`,
        initialValue: false,
      });

      if (p.isCancel(shouldOverwrite) || !shouldOverwrite) {
        const filteredNames = allNames.filter((n) => !existing.includes(n));
        if (filteredNames.length === 0) {
          p.cancel("No components to add.");
          process.exit(0);
        }
        allNames.length = 0;
        allNames.push(...filteredNames);
      }
    }
  }

  const s = p.spinner();

  // Fetch and copy component files
  s.start("Adding components...");

  await fs.ensureDir(componentsDir);

  let copiedCount = 0;
  const allDeps: string[] = [];

  for (const name of allNames) {
    const item = await getComponentContent(name, config);

    if (!item || item.files.length === 0) {
      p.log.warn(`Component "${name}" not found.`);
      continue;
    }

    // Collect dependencies
    if (item.dependencies) {
      allDeps.push(...item.dependencies);
    }

    for (const file of item.files) {
      let content = file.content;

      // Transform import paths
      content = transformImports(content, config);

      // Write to user's project (strip ui/ prefix from path)
      const fileName = path.basename(file.path);
      const destPath = path.resolve(componentsDir, fileName);
      await fs.ensureDir(path.dirname(destPath));
      await fs.writeFile(destPath, content, "utf-8");
      copiedCount++;
    }
  }

  s.stop(`Added ${copiedCount} component file(s).`);

  // Install npm dependencies
  // Merge HTTP-fetched deps with bundled registry deps
  const npmDeps = collectNpmDependencies(allNames);
  const depsFromRegistry = [...new Set(allDeps)];

  // Combine: use the more detailed version from bundled registry if available
  const depsToInstall = Object.entries(npmDeps).map(
    ([name, version]) => `${name}@${version}`
  );

  // Add any deps from HTTP that weren't in bundled registry
  for (const dep of depsFromRegistry) {
    if (!npmDeps[dep]) {
      depsToInstall.push(dep);
    }
  }

  if (depsToInstall.length > 0) {
    s.start("Installing dependencies...");

    const pm = await detectPackageManager(cwd);
    const installCmd = getInstallCommand(pm, depsToInstall);

    try {
      const { execa } = await import("execa");
      await execa(installCmd.command, installCmd.args, {
        cwd,
        stdio: "pipe",
      });
      s.stop("Dependencies installed.");
    } catch {
      s.stop("Could not auto-install dependencies.");
      p.log.warn(
        `Please manually install:\n${chalk.cyan(depsToInstall.join(" "))}`
      );
    }
  }

  // Summary
  logger.break();
  p.note(
    [
      `Components added to ${chalk.cyan(componentsDir.replace(cwd + "/", ""))}:`,
      "",
      ...allNames.map((n) => `  ${chalk.green("+")} ${n}`),
      "",
      "Import example:",
      chalk.gray(
        `  import { Button } from "${config.aliases.components}/button";`
      ),
    ].join("\n"),
    "Done"
  );

  p.outro("Components are ready to use!");
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
