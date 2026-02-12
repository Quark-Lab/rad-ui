/**
 * Sync component templates from apps/web/registry/web/ to packages/cli/templates/web/
 *
 * This runs as a prebuild step to ensure the CLI has bundled templates
 * as a fallback for offline use. The primary source is the HTTP registry.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CLI_ROOT = path.resolve(__dirname, "..");
const REGISTRY_WEB = path.resolve(
  CLI_ROOT,
  "..",
  "..",
  "apps",
  "web",
  "registry",
  "web"
);
const TEMPLATES_WEB = path.resolve(CLI_ROOT, "templates", "web");

// Component files to sync
const COMPONENT_FILES = [
  "aspect-ratio.tsx",
  "avatar.tsx",
  "badge.tsx",
  "button.tsx",
  "checkbox.tsx",
  "field.tsx",
  "input.tsx",
  "input-group.tsx",
  "input-otp.tsx",
  "kbd.tsx",
  "label.tsx",
  "native-select.tsx",
  "radio-group.tsx",
  "separator.tsx",
  "skeleton.tsx",
  "slider.tsx",
  "spinner.tsx",
  "switch.tsx",
  "textarea.tsx",
  "toggle.tsx",
  "toggle-group.tsx",
];

function syncFiles() {
  console.log("Syncing component templates...");
  console.log(`  Source: ${REGISTRY_WEB}`);
  console.log(`  Dest:   ${TEMPLATES_WEB}`);

  // Ensure destination directories exist
  fs.mkdirSync(path.resolve(TEMPLATES_WEB, "lib"), { recursive: true });

  let synced = 0;

  // Sync component files from ui/ directory
  for (const file of COMPONENT_FILES) {
    const src = path.resolve(REGISTRY_WEB, "ui", file);
    const dest = path.resolve(TEMPLATES_WEB, file);

    if (!fs.existsSync(src)) {
      console.warn(`  Warning: Source not found: ${file}`);
      continue;
    }

    fs.copyFileSync(src, dest);
    synced++;
  }

  // Sync lib/utils.ts
  const utilsSrc = path.resolve(REGISTRY_WEB, "lib", "utils.ts");
  const utilsDest = path.resolve(TEMPLATES_WEB, "lib", "utils.ts");

  if (fs.existsSync(utilsSrc)) {
    fs.copyFileSync(utilsSrc, utilsDest);
    synced++;
  } else {
    console.warn("  Warning: lib/utils.ts not found");
  }

  console.log(`  Synced ${synced} files.`);
}

syncFiles();
