export interface ComponentDef {
  name: string;
  description: string;
  platform: "web" | "mobile" | "shared";
  files: string[];
  npmDependencies: Record<string, string>;
  internalDependencies: string[];
}

export const components: ComponentDef[] = [
  {
    name: "aspect-ratio",
    description: "Displays content within a desired ratio",
    platform: "web",
    files: ["aspect-ratio.tsx"],
    npmDependencies: {
      "@radix-ui/react-aspect-ratio": "^1.1.8",
    },
    internalDependencies: [],
  },
  {
    name: "avatar",
    description: "An image element with a fallback for representing the user",
    platform: "web",
    files: ["avatar.tsx"],
    npmDependencies: {
      "@radix-ui/react-avatar": "^1.1.11",
    },
    internalDependencies: [],
  },
  {
    name: "badge",
    description: "Displays a badge or a component that looks like a badge",
    platform: "web",
    files: ["badge.tsx"],
    npmDependencies: {
      "class-variance-authority": "^0.7.1",
    },
    internalDependencies: [],
  },
  {
    name: "button",
    description: "Displays a button or a component that looks like a button",
    platform: "web",
    files: ["button.tsx"],
    npmDependencies: {
      "class-variance-authority": "^0.7.1",
    },
    internalDependencies: [],
  },
  {
    name: "checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked",
    platform: "web",
    files: ["checkbox.tsx"],
    npmDependencies: {
      "@radix-ui/react-checkbox": "^1.1.0",
      "lucide-react": "^0.309.0",
    },
    internalDependencies: [],
  },
  {
    name: "field",
    description:
      "A complete form field with label, description, error message, and more",
    platform: "web",
    files: ["field.tsx"],
    npmDependencies: {
      "class-variance-authority": "^0.7.1",
    },
    internalDependencies: ["label", "separator"],
  },
  {
    name: "input",
    description: "A text input field with multiple variants",
    platform: "web",
    files: ["input.tsx"],
    npmDependencies: {
      "class-variance-authority": "^0.7.1",
      "lucide-react": "^0.309.0",
    },
    internalDependencies: [],
  },
  {
    name: "input-group",
    description: "Group inputs with addons, buttons, and text",
    platform: "web",
    files: ["input-group.tsx"],
    npmDependencies: {
      "class-variance-authority": "^0.7.1",
    },
    internalDependencies: ["button", "input", "textarea"],
  },
  {
    name: "input-otp",
    description: "One-time password input component",
    platform: "web",
    files: ["input-otp.tsx"],
    npmDependencies: {
      "input-otp": "^1.4.2",
      "lucide-react": "^0.309.0",
    },
    internalDependencies: [],
  },
  {
    name: "kbd",
    description: "Display keyboard shortcuts and key combinations",
    platform: "web",
    files: ["kbd.tsx"],
    npmDependencies: {},
    internalDependencies: [],
  },
  {
    name: "label",
    description: "Renders an accessible label associated with controls",
    platform: "web",
    files: ["label.tsx"],
    npmDependencies: {
      "@radix-ui/react-label": "^2.1.8",
      "class-variance-authority": "^0.7.1",
    },
    internalDependencies: [],
  },
  {
    name: "native-select",
    description: "A native HTML select element with custom styling",
    platform: "web",
    files: ["native-select.tsx"],
    npmDependencies: {
      "class-variance-authority": "^0.7.1",
      "lucide-react": "^0.309.0",
    },
    internalDependencies: [],
  },
  {
    name: "radio-group",
    description:
      "A set of checkable buttons where only one can be checked at a time",
    platform: "web",
    files: ["radio-group.tsx"],
    npmDependencies: {
      "@radix-ui/react-radio-group": "^1.2.0",
      "lucide-react": "^0.309.0",
    },
    internalDependencies: [],
  },
  {
    name: "separator",
    description: "Visually or semantically separates content",
    platform: "web",
    files: ["separator.tsx"],
    npmDependencies: {
      "@radix-ui/react-separator": "^1.1.8",
    },
    internalDependencies: [],
  },
  {
    name: "skeleton",
    description: "A placeholder to show while content is loading",
    platform: "web",
    files: ["skeleton.tsx"],
    npmDependencies: {},
    internalDependencies: [],
  },
  {
    name: "slider",
    description:
      "An input where the user selects a value from within a given range",
    platform: "web",
    files: ["slider.tsx"],
    npmDependencies: {
      "@radix-ui/react-slider": "^1.2.0",
    },
    internalDependencies: [],
  },
  {
    name: "spinner",
    description: "A loading spinner indicator with multiple variants",
    platform: "web",
    files: ["spinner.tsx"],
    npmDependencies: {
      "class-variance-authority": "^0.7.1",
      "lucide-react": "^0.309.0",
    },
    internalDependencies: [],
  },
  {
    name: "switch",
    description: "A control that allows the user to toggle between on and off",
    platform: "web",
    files: ["switch.tsx"],
    npmDependencies: {
      "@radix-ui/react-switch": "^1.1.0",
    },
    internalDependencies: [],
  },
  {
    name: "textarea",
    description: "A multi-line text input",
    platform: "web",
    files: ["textarea.tsx"],
    npmDependencies: {},
    internalDependencies: [],
  },
  {
    name: "toggle",
    description: "A two-state button that can be either on or off",
    platform: "web",
    files: ["toggle.tsx"],
    npmDependencies: {
      "@radix-ui/react-toggle": "^1.1.0",
      "class-variance-authority": "^0.7.1",
    },
    internalDependencies: [],
  },
  {
    name: "toggle-group",
    description: "A set of two-state buttons that can be toggled on or off",
    platform: "web",
    files: ["toggle-group.tsx"],
    npmDependencies: {
      "@radix-ui/react-toggle-group": "^1.1.0",
      "class-variance-authority": "^0.7.1",
    },
    internalDependencies: ["toggle"],
  },
];

/**
 * Get a component by name.
 */
export function getComponent(name: string): ComponentDef | undefined {
  return components.find((c) => c.name === name);
}

/**
 * Get all components for a given platform.
 */
export function getComponentsByPlatform(
  platform: "web" | "mobile" | "both"
): ComponentDef[] {
  if (platform === "both") return components;
  return components.filter(
    (c) => c.platform === platform || c.platform === "shared"
  );
}

/**
 * Resolve all dependencies for a list of component names (recursive).
 * Returns a flat, deduplicated list of component names including the input.
 */
export function resolveDependencies(names: string[]): string[] {
  const resolved = new Set<string>();

  function resolve(name: string) {
    if (resolved.has(name)) return;
    resolved.add(name);

    const comp = getComponent(name);
    if (!comp) return;

    for (const dep of comp.internalDependencies) {
      resolve(dep);
    }
  }

  for (const name of names) {
    resolve(name);
  }

  return Array.from(resolved);
}

/**
 * Collect all npm dependencies for a list of component names.
 */
export function collectNpmDependencies(
  names: string[]
): Record<string, string> {
  const deps: Record<string, string> = {
    // Base dependencies needed by all components (via lib/utils.ts)
    clsx: "^2.1.0",
    "tailwind-merge": "^2.2.1",
  };

  for (const name of names) {
    const comp = getComponent(name);
    if (!comp) continue;
    Object.assign(deps, comp.npmDependencies);
  }

  return deps;
}
