/**
 * Registry build script.
 *
 * Reads component definitions from registry.json (single source of truth)
 * and generates JSON files at public/r/[name].json for the CLI to fetch via HTTP.
 *
 * Also generates public/r/index.json — a manifest of all available components.
 *
 * Usage: npx tsx scripts/build-registry.ts
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WEB_ROOT = path.resolve(__dirname, "..");
const REGISTRY_JSON = path.resolve(WEB_ROOT, "registry.json");
const OUTPUT_DIR = path.resolve(WEB_ROOT, "public", "r");

// ---------------------------------------------------------------------------
// Types matching registry.json schema
// ---------------------------------------------------------------------------

interface RegistryFile {
  path: string;
  type: string;
}

interface RegistryItemDef {
  name: string;
  type: string;
  description: string;
  platform: string;
  dependencies: string[];
  registryDependencies: string[];
  files: RegistryFile[];
}

interface RegistryJson {
  name: string;
  homepage: string;
  registryDir: string;
  items: RegistryItemDef[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Parse a dependency string like "zod@^3.0.0" into name and version.
 * If no version, returns just the name.
 */
function parseDep(dep: string): { name: string; version?: string } {
  // Handle scoped packages: @scope/name@version
  const atIndex = dep.lastIndexOf("@");
  if (atIndex > 0) {
    return {
      name: dep.slice(0, atIndex),
      version: dep.slice(atIndex + 1),
    };
  }
  return { name: dep };
}

/**
 * Derive the ui/ prefix path from the registryDir and the full file path.
 * e.g. registryDir="registry/web", path="registry/web/ui/button.tsx" -> "ui/button.tsx"
 */
function getRelativePath(registryDir: string, filePath: string): string {
  return filePath.replace(`${registryDir}/`, "");
}

// ---------------------------------------------------------------------------
// Build
// ---------------------------------------------------------------------------

function buildRegistry() {
  console.log("Building registry...");

  // Read registry.json
  if (!fs.existsSync(REGISTRY_JSON)) {
    console.error(`Error: registry.json not found at ${REGISTRY_JSON}`);
    process.exit(1);
  }

  const registry: RegistryJson = JSON.parse(
    fs.readFileSync(REGISTRY_JSON, "utf-8")
  );

  console.log(`  Source: ${REGISTRY_JSON}`);
  console.log(`  Output: ${OUTPUT_DIR}`);

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Read lib/utils.ts (shared across all components)
  const utilsPath = path.resolve(WEB_ROOT, registry.registryDir, "lib", "utils.ts");
  const utilsContent = fs.existsSync(utilsPath)
    ? fs.readFileSync(utilsPath, "utf-8")
    : null;

  let built = 0;

  for (const item of registry.items) {
    // Read file contents
    const files = item.files
      .map((file) => {
        const filePath = path.resolve(WEB_ROOT, file.path);
        if (!fs.existsSync(filePath)) {
          console.warn(`  Warning: ${file.path} not found, skipping`);
          return null;
        }
        const content = fs.readFileSync(filePath, "utf-8");
        return {
          path: getRelativePath(registry.registryDir, file.path),
          type: file.type,
          content,
        };
      })
      .filter(Boolean);

    // Extract dependency names (without versions) for the registry output
    const depNames = item.dependencies.map((d) => parseDep(d).name);

    const registryItem = {
      name: item.name,
      type: item.type,
      description: item.description,
      platform: item.platform,
      dependencies: depNames,
      registryDependencies: item.registryDependencies,
      files,
      utils: utilsContent
        ? { path: "lib/utils.ts", content: utilsContent }
        : undefined,
    };

    const outputPath = path.resolve(OUTPUT_DIR, `${item.name}.json`);
    fs.writeFileSync(
      outputPath,
      JSON.stringify(registryItem, null, 2),
      "utf-8"
    );
    built++;
  }

  // Generate index.json manifest
  const index = registry.items.map((item) => ({
    name: item.name,
    description: item.description,
    platform: item.platform,
    dependencies: item.dependencies.map((d) => parseDep(d).name),
    registryDependencies: item.registryDependencies,
  }));

  const indexPath = path.resolve(OUTPUT_DIR, "index.json");
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), "utf-8");

  console.log(`  Built ${built} registry items + index.json`);
}

buildRegistry();
