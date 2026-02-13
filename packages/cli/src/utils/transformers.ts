import type { RadUIConfig } from "./config";

/**
 * Transform import paths in component source code.
 *
 * - `./lib/utils` -> user's configured utils alias (e.g., `@/lib/utils`)
 * - Cross-component imports (e.g., `./button`) stay relative since
 *   all components live in the same output directory.
 */
export function transformImports(source: string, config: RadUIConfig): string {
  const utilsAlias = config.aliases.utils;

  // Transform: from "../lib/utils" -> from "@/lib/utils" (or configured alias)
  // (components are in ui/ and utils is in lib/, sibling directories)
  let result = source.replace(
    /from\s+["']\.\.\/lib\/utils["']/g,
    `from "${utilsAlias}"`
  );

  // Also handle the old format in case bundled templates use it
  result = result.replace(
    /from\s+["']\.\/lib\/utils["']/g,
    `from "${utilsAlias}"`
  );

  return result;
}
