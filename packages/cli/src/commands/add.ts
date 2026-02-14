import path from "node:path";
import fs from "fs-extra";
import * as p from "@clack/prompts";
import chalk from "chalk";
import {
  readConfig,
  configExists,
  resolveComponentsDir,
  resolveHooksDir,
  resolveUtilsDir,
  type RadUIConfig,
} from "../utils/config";
import {
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

/**
 * File type classification for smart file distribution.
 */
type FileType = "component" | "hook" | "util";

/**
 * Classify a file based on its path and name.
 * - Hooks: files starting with "use-" or "use" (e.g., use-mobile.ts, useDebounce.ts)
 * - Utils: .ts files that are not components (validation.ts, helpers.ts, schema.ts, etc.)
 * - Components: .tsx files
 */
function classifyFile(filePath: string): FileType {
  const fileName = path.basename(filePath);
  const ext = path.extname(filePath);

  // Hooks: use-*.ts or use*.ts pattern
  if (/^use[-_]?[a-zA-Z]/.test(fileName) && ext === ".ts") {
    return "hook";
  }

  // Components are .tsx files
  if (ext === ".tsx") {
    return "component";
  }

  // Everything else that's .ts is a util (validation.ts, schema.ts, helpers.ts, etc.)
  if (ext === ".ts") {
    return "util";
  }

  // Default to component for other extensions (e.g., .css, .json)
  return "component";
}

/**
 * Transform relative imports within a component file to point to the new locations.
 * 
 * For example, if input.tsx imports "./validation", and validation.ts is moved to lib/input/,
 * we need to update the import to point to the user's configured utils path.
 */
function transformRelativeImports(
  content: string,
  originalFilePath: string,
  componentFiles: Array<{
    originalPath: string;
    destPath: string;
    content: string;
    fileType: FileType;
  }>,
  config: RadUIConfig,
  componentName: string
): string {
  let result = content;

  // Find all relative imports (e.g., "./validation", "./helpers")
  const relativeImportRegex = /from\s+["']\.\/([^"']+)["']/g;
  let match;

  while ((match = relativeImportRegex.exec(content)) !== null) {
    const importedModule = match[1];
    
    // Find the corresponding file in our component files
    const importedFile = componentFiles.find((f) => {
      const baseName = path.basename(f.originalPath, path.extname(f.originalPath));
      // Handle both exact matches and path matches
      return baseName === importedModule || 
             f.originalPath.includes(`/${importedModule}.`) ||
             f.originalPath.endsWith(`/${importedModule}.ts`) ||
             f.originalPath.endsWith(`/${importedModule}.tsx`);
    });

    if (importedFile && importedFile.fileType !== "component") {
      // This import points to a file that was moved
      let newImportPath: string;
      
      if (importedFile.fileType === "hook") {
        // Hooks go to @/hooks/hookName
        const hookFileName = path.basename(importedFile.destPath, ".ts");
        newImportPath = `${config.aliases.hooks}/${hookFileName}`;
      } else {
        // Utils go to @/lib/componentName/fileName
        const utilFileName = path.basename(importedFile.destPath, ".ts");
        // Get the base utils alias without the "utils" file part
        const utilsBase = config.aliases.utils.replace(/\/utils$/, "");
        newImportPath = `${utilsBase}/${componentName}/${utilFileName}`;
      }

      // Replace the import
      result = result.replace(
        new RegExp(`from\\s+["']\\.\\/${importedModule}["']`, "g"),
        `from "${newImportPath}"`
      );
    }
  }

  return result;
}

/**
 * Get component content from the HTTP registry.
 */
async function getComponentContent(
  name: string,
  config: RadUIConfig
): Promise<RegistryItem | null> {
  if (!config.registry) {
    throw new Error(
      "No registry URL configured. Run `rad-ui init` first."
    );
  }

  try {
    return await fetchComponent(config.registry, name);
  } catch {
    throw new Error(
      `Failed to fetch component "${name}" from ${config.registry}. Is the registry available?`
    );
  }
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
      `Configuration not found. Run ${chalk.cyan("npx @quark-lab/rad-ui init")} first.`
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

  // Determine output directories
  const componentsDir = opts.path
    ? path.resolve(cwd, opts.path)
    : resolveComponentsDir(cwd, config);
  const hooksDir = resolveHooksDir(cwd, config);
  const utilsDir = resolveUtilsDir(cwd, config);

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
  await fs.ensureDir(hooksDir);
  await fs.ensureDir(utilsDir);

  let copiedCount = 0;
  let hooksCount = 0;
  let utilsCount = 0;
  const allDeps: string[] = [];

  // Track where files were placed for import path updates
  const filePlacements: Map<string, { destPath: string; fileType: FileType }> =
    new Map();

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

    // First pass: classify and place files
    const componentFiles: Array<{
      originalPath: string;
      destPath: string;
      content: string;
      fileType: FileType;
    }> = [];

    for (const file of item.files) {
      // Strip ui/ prefix from path
      const relPath = file.path.replace(/^ui\//, "");
      const fileName = path.basename(relPath);
      const fileType = classifyFile(relPath);

      // Determine destination based on file type
      let destPath: string;
      if (fileType === "component") {
        // Flatten components: use only filename, not subfolder structure
        destPath = path.resolve(componentsDir, fileName);
      } else if (fileType === "hook") {
        destPath = path.resolve(hooksDir, fileName);
        hooksCount++;
      } else {
        // Utils go into a component-named subfolder to avoid collisions
        destPath = path.resolve(utilsDir, name, fileName);
        utilsCount++;
      }

      componentFiles.push({
        originalPath: relPath,
        destPath,
        content: file.content,
        fileType,
      });

      filePlacements.set(relPath, { destPath, fileType });
    }

    // Second pass: transform imports and write files
    for (const fileInfo of componentFiles) {
      let content = fileInfo.content;

      // Transform standard imports (lib/utils -> user's alias)
      content = transformImports(content, config);

      // Transform relative imports within the component to point to new locations
      // e.g., "./validation" -> user's configured utils path
      if (fileInfo.fileType === "component") {
        content = transformRelativeImports(
          content,
          fileInfo.originalPath,
          componentFiles,
          config,
          name
        );
      }

      await fs.ensureDir(path.dirname(fileInfo.destPath));
      await fs.writeFile(fileInfo.destPath, content, "utf-8");
      copiedCount++;
    }
  }

  const summary: string[] = [`Added ${copiedCount} file(s)`];
  if (hooksCount > 0) summary.push(`${hooksCount} hook(s)`);
  if (utilsCount > 0) summary.push(`${utilsCount} util(s)`);
  s.stop(summary.join(", ") + ".");

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
