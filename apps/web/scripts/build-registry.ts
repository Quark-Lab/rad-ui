/**
 * Custom registry build script.
 *
 * Reads component source files from registry/web/ui/ and generates
 * JSON files at public/r/[name].json for the CLI to fetch via HTTP.
 *
 * Also generates public/r/index.json — a manifest of all available components.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WEB_ROOT = path.resolve(__dirname, "..");
const REGISTRY_UI = path.resolve(WEB_ROOT, "registry", "web", "ui");
const REGISTRY_LIB = path.resolve(WEB_ROOT, "registry", "web", "lib");
const OUTPUT_DIR = path.resolve(WEB_ROOT, "public", "r");

// Component definitions with metadata
interface ComponentDef {
  name: string;
  description: string;
  platform: "web" | "mobile" | "shared";
  files: string[];
  dependencies: string[];
  registryDependencies: string[];
}

const components: ComponentDef[] = [
  {
    name: "aspect-ratio",
    description: "Displays content within a desired ratio",
    platform: "web",
    files: ["aspect-ratio.tsx"],
    dependencies: ["@radix-ui/react-aspect-ratio"],
    registryDependencies: [],
  },
  {
    name: "avatar",
    description: "An image element with a fallback for representing the user",
    platform: "web",
    files: ["avatar.tsx"],
    dependencies: ["@radix-ui/react-avatar"],
    registryDependencies: [],
  },
  {
    name: "badge",
    description: "Displays a badge or a component that looks like a badge",
    platform: "web",
    files: ["badge.tsx"],
    dependencies: ["class-variance-authority"],
    registryDependencies: [],
  },
  {
    name: "button",
    description: "Displays a button or a component that looks like a button",
    platform: "web",
    files: ["button.tsx"],
    dependencies: ["class-variance-authority"],
    registryDependencies: [],
  },
  {
    name: "checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked",
    platform: "web",
    files: ["checkbox.tsx"],
    dependencies: ["@radix-ui/react-checkbox", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "field",
    description:
      "A complete form field with label, description, error message, and more",
    platform: "web",
    files: ["field.tsx"],
    dependencies: ["class-variance-authority"],
    registryDependencies: ["label", "separator"],
  },
  {
    name: "input",
    description: "A text input field with multiple variants",
    platform: "web",
    files: ["input.tsx"],
    dependencies: ["class-variance-authority", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "input-group",
    description: "Group inputs with addons, buttons, and text",
    platform: "web",
    files: ["input-group.tsx"],
    dependencies: ["class-variance-authority"],
    registryDependencies: ["button", "input", "textarea"],
  },
  {
    name: "input-otp",
    description: "One-time password input component",
    platform: "web",
    files: ["input-otp.tsx"],
    dependencies: ["input-otp", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "kbd",
    description: "Display keyboard shortcuts and key combinations",
    platform: "web",
    files: ["kbd.tsx"],
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "label",
    description: "Renders an accessible label associated with controls",
    platform: "web",
    files: ["label.tsx"],
    dependencies: ["@radix-ui/react-label", "class-variance-authority"],
    registryDependencies: [],
  },
  {
    name: "native-select",
    description: "A native HTML select element with custom styling",
    platform: "web",
    files: ["native-select.tsx"],
    dependencies: ["class-variance-authority", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "radio-group",
    description:
      "A set of checkable buttons where only one can be checked at a time",
    platform: "web",
    files: ["radio-group.tsx"],
    dependencies: ["@radix-ui/react-radio-group", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "separator",
    description: "Visually or semantically separates content",
    platform: "web",
    files: ["separator.tsx"],
    dependencies: ["@radix-ui/react-separator"],
    registryDependencies: [],
  },
  {
    name: "skeleton",
    description: "A placeholder to show while content is loading",
    platform: "web",
    files: ["skeleton.tsx"],
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "slider",
    description:
      "An input where the user selects a value from within a given range",
    platform: "web",
    files: ["slider.tsx"],
    dependencies: ["@radix-ui/react-slider"],
    registryDependencies: [],
  },
  {
    name: "spinner",
    description: "A loading spinner indicator with multiple variants",
    platform: "web",
    files: ["spinner.tsx"],
    dependencies: ["class-variance-authority", "lucide-react"],
    registryDependencies: [],
  },
  {
    name: "switch",
    description: "A control that allows the user to toggle between on and off",
    platform: "web",
    files: ["switch.tsx"],
    dependencies: ["@radix-ui/react-switch"],
    registryDependencies: [],
  },
  {
    name: "textarea",
    description: "A multi-line text input",
    platform: "web",
    files: ["textarea.tsx"],
    dependencies: [],
    registryDependencies: [],
  },
  {
    name: "toggle",
    description: "A two-state button that can be either on or off",
    platform: "web",
    files: ["toggle.tsx"],
    dependencies: ["@radix-ui/react-toggle", "class-variance-authority"],
    registryDependencies: [],
  },
  {
    name: "toggle-group",
    description: "A set of two-state buttons that can be toggled on or off",
    platform: "web",
    files: ["toggle-group.tsx"],
    dependencies: ["@radix-ui/react-toggle-group", "class-variance-authority"],
    registryDependencies: ["toggle"],
  },
];

function buildRegistry() {
  console.log("Building registry...");

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let built = 0;

  for (const comp of components) {
    const files = comp.files
      .map((file) => {
        const filePath = path.resolve(REGISTRY_UI, file);
        if (!fs.existsSync(filePath)) {
          console.warn(`  Warning: ${file} not found, skipping`);
          return null;
        }
        const content = fs.readFileSync(filePath, "utf-8");
        return {
          path: `ui/${file}`,
          type: "registry:ui",
          content,
        };
      })
      .filter(Boolean);

    // Also include lib/utils.ts as a dependency file
    const utilsPath = path.resolve(REGISTRY_LIB, "utils.ts");
    const utilsContent = fs.existsSync(utilsPath)
      ? fs.readFileSync(utilsPath, "utf-8")
      : null;

    const registryItem = {
      name: comp.name,
      type: "registry:ui",
      description: comp.description,
      platform: comp.platform,
      dependencies: comp.dependencies,
      registryDependencies: comp.registryDependencies,
      files,
      utils: utilsContent
        ? { path: "lib/utils.ts", content: utilsContent }
        : undefined,
    };

    const outputPath = path.resolve(OUTPUT_DIR, `${comp.name}.json`);
    fs.writeFileSync(
      outputPath,
      JSON.stringify(registryItem, null, 2),
      "utf-8"
    );
    built++;
  }

  // Generate index.json manifest
  const index = components.map((c) => ({
    name: c.name,
    description: c.description,
    platform: c.platform,
    dependencies: c.dependencies,
    registryDependencies: c.registryDependencies,
  }));

  const indexPath = path.resolve(OUTPUT_DIR, "index.json");
  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), "utf-8");

  console.log(`  Built ${built} registry items + index.json`);
  console.log(`  Output: ${OUTPUT_DIR}`);
}

buildRegistry();
