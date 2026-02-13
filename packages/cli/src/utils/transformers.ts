import type { RadUIConfig } from "./config";

/**
 * Transform import paths in component source code.
 *
 * - `../lib/utils` or `../../lib/utils` -> user's configured utils alias (e.g., `@/lib/utils`)
 * - Cross-component imports (e.g., `./button`) stay relative since
 *   all components live in the same output directory.
 */
export function transformImports(source: string, config: RadUIConfig): string {
  const utilsAlias = config.aliases.utils;

  // Transform: from "../lib/utils" or "../../lib/utils" -> configured alias
  // Flat components use "../lib/utils", folder-based use "../../lib/utils"
  let result = source.replace(
    /from\s+["'](?:\.\.\/)+lib\/utils["']/g,
    `from "${utilsAlias}"`
  );

  // Also handle the old format in case bundled templates use it
  result = result.replace(
    /from\s+["']\.\/lib\/utils["']/g,
    `from "${utilsAlias}"`
  );

  return result;
}
