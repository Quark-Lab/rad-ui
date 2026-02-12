import path from "node:path";
import fs from "fs-extra";

export interface RadUIConfig {
  $schema?: string;
  registry: string;
  tailwindVersion: "v3" | "v4";
  srcDir: string;
  platform: "web" | "mobile" | "both";
  theme: string;
  tailwind: {
    config?: string;
    css: string;
  };
  aliases: {
    components: string;
    utils: string;
  };
}

const CONFIG_FILE = "rad-ui.json";

export function getConfigPath(cwd: string): string {
  return path.resolve(cwd, CONFIG_FILE);
}

export async function configExists(cwd: string): Promise<boolean> {
  return fs.pathExists(getConfigPath(cwd));
}

export async function readConfig(cwd: string): Promise<RadUIConfig> {
  const configPath = getConfigPath(cwd);
  const exists = await fs.pathExists(configPath);
  if (!exists) {
    throw new Error(`Configuration file not found. Run \`rad-ui init\` first.`);
  }
  return fs.readJson(configPath);
}

export async function writeConfig(
  cwd: string,
  config: RadUIConfig
): Promise<void> {
  const configPath = getConfigPath(cwd);
  await fs.writeJson(configPath, config, { spaces: 2 });
}

/**
 * Resolve an alias path to a real filesystem path.
 * Uses the configured srcDir to map @ or ~ prefixes.
 *
 * Examples (with srcDir = "src"):
 *   "@/components/ui" -> "src/components/ui"
 *   "@/lib/utils"     -> "src/lib/utils"
 *
 * Examples (with srcDir = "app"):
 *   "@/components/ui" -> "app/components/ui"
 */
function resolveAlias(alias: string, srcDir: string): string {
  return alias.replace(/^@\//, srcDir + "/").replace(/^~\//, srcDir + "/");
}

/**
 * Resolve the components directory from the config aliases.
 */
export function resolveComponentsDir(cwd: string, config: RadUIConfig): string {
  const relPath = resolveAlias(config.aliases.components, config.srcDir);
  return path.resolve(cwd, relPath);
}

/**
 * Resolve the utils file path from the config aliases.
 */
export function resolveUtilsPath(cwd: string, config: RadUIConfig): string {
  const relPath = resolveAlias(config.aliases.utils, config.srcDir);
  return path.resolve(cwd, relPath + ".ts");
}
