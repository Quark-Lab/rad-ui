import type { TailwindVersion } from "../utils/detect-project";

export interface ThemePreset {
  name: string;
  label: string;
  cssVars: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
}

export const themes: ThemePreset[] = [
  {
    name: "kahgel",
    label: "Kahgel — Warm Clay",
    cssVars: {
      light: {
        "--background": "40 20% 98%",
        "--foreground": "220 15% 15%",
        "--primary": "175 100% 31%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "40 10% 92%",
        "--secondary-foreground": "220 15% 15%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 100%",
        "--card": "40 20% 96%",
        "--card-foreground": "220 15% 15%",
        "--border": "40 10% 88%",
        "--muted": "40 10% 92%",
        "--muted-foreground": "220 10% 40%",
        "--ring": "175 100% 31%",
        "--radius": "0.5rem",
      },
      dark: {
        "--background": "222 47% 11%",
        "--foreground": "210 40% 98%",
        "--primary": "170 65% 50%",
        "--primary-foreground": "222 47% 11%",
        "--secondary": "217 33% 17%",
        "--secondary-foreground": "210 40% 98%",
        "--destructive": "0 63% 31%",
        "--destructive-foreground": "210 40% 98%",
        "--card": "222 47% 13%",
        "--card-foreground": "210 40% 98%",
        "--border": "217 33% 20%",
        "--muted": "217 33% 17%",
        "--muted-foreground": "210 20% 70%",
        "--ring": "170 65% 50%",
      },
    },
  },
  {
    name: "firouzeh",
    label: "Firouzeh — Persian Turquoise",
    cssVars: {
      light: {
        "--background": "180 20% 98%",
        "--foreground": "200 25% 10%",
        "--primary": "174 72% 40%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "180 15% 92%",
        "--secondary-foreground": "200 25% 10%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 100%",
        "--card": "180 15% 96%",
        "--card-foreground": "200 25% 10%",
        "--border": "180 12% 87%",
        "--muted": "180 12% 92%",
        "--muted-foreground": "200 10% 42%",
        "--ring": "174 72% 40%",
        "--radius": "0.5rem",
      },
      dark: {
        "--background": "200 40% 8%",
        "--foreground": "180 30% 96%",
        "--primary": "174 65% 52%",
        "--primary-foreground": "200 40% 8%",
        "--secondary": "200 30% 15%",
        "--secondary-foreground": "180 30% 96%",
        "--destructive": "0 63% 31%",
        "--destructive-foreground": "180 30% 96%",
        "--card": "200 38% 10%",
        "--card-foreground": "180 30% 96%",
        "--border": "200 28% 18%",
        "--muted": "200 28% 15%",
        "--muted-foreground": "180 15% 65%",
        "--ring": "174 65% 52%",
      },
    },
  },
  {
    name: "lajvard",
    label: "Lajvard — Lapis Lazuli",
    cssVars: {
      light: {
        "--background": "225 25% 98%",
        "--foreground": "230 25% 12%",
        "--primary": "225 75% 45%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "225 15% 92%",
        "--secondary-foreground": "230 25% 12%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 100%",
        "--card": "225 20% 96%",
        "--card-foreground": "230 25% 12%",
        "--border": "225 15% 87%",
        "--muted": "225 15% 92%",
        "--muted-foreground": "225 10% 42%",
        "--ring": "225 75% 45%",
        "--radius": "0.5rem",
      },
      dark: {
        "--background": "230 45% 8%",
        "--foreground": "220 30% 96%",
        "--primary": "220 70% 58%",
        "--primary-foreground": "230 45% 8%",
        "--secondary": "230 30% 15%",
        "--secondary-foreground": "220 30% 96%",
        "--destructive": "0 63% 31%",
        "--destructive-foreground": "220 30% 96%",
        "--card": "230 42% 10%",
        "--card-foreground": "220 30% 96%",
        "--border": "230 28% 18%",
        "--muted": "230 28% 15%",
        "--muted-foreground": "220 15% 65%",
        "--ring": "220 70% 58%",
      },
    },
  },
  {
    name: "puste",
    label: "Puste — Pistachio",
    cssVars: {
      light: {
        "--background": "80 20% 98%",
        "--foreground": "100 15% 12%",
        "--primary": "95 55% 38%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "85 12% 91%",
        "--secondary-foreground": "100 15% 12%",
        "--destructive": "0 84% 60%",
        "--destructive-foreground": "0 0% 100%",
        "--card": "80 18% 95%",
        "--card-foreground": "100 15% 12%",
        "--border": "85 12% 86%",
        "--muted": "85 12% 91%",
        "--muted-foreground": "95 8% 42%",
        "--ring": "95 55% 38%",
        "--radius": "0.5rem",
      },
      dark: {
        "--background": "110 30% 8%",
        "--foreground": "90 25% 95%",
        "--primary": "95 50% 52%",
        "--primary-foreground": "110 30% 8%",
        "--secondary": "105 25% 14%",
        "--secondary-foreground": "90 25% 95%",
        "--destructive": "0 63% 31%",
        "--destructive-foreground": "90 25% 95%",
        "--card": "110 28% 10%",
        "--card-foreground": "90 25% 95%",
        "--border": "105 22% 18%",
        "--muted": "105 22% 14%",
        "--muted-foreground": "95 15% 62%",
        "--ring": "95 50% 52%",
      },
    },
  },
  {
    name: "anar",
    label: "Anar — Pomegranate",
    cssVars: {
      light: {
        "--background": "0 20% 98%",
        "--foreground": "350 20% 12%",
        "--primary": "348 75% 42%",
        "--primary-foreground": "0 0% 100%",
        "--secondary": "350 12% 92%",
        "--secondary-foreground": "350 20% 12%",
        "--destructive": "25 90% 55%",
        "--destructive-foreground": "0 0% 100%",
        "--card": "355 18% 96%",
        "--card-foreground": "350 20% 12%",
        "--border": "350 12% 87%",
        "--muted": "350 12% 92%",
        "--muted-foreground": "350 8% 42%",
        "--ring": "348 75% 42%",
        "--radius": "0.5rem",
      },
      dark: {
        "--background": "350 40% 7%",
        "--foreground": "355 25% 96%",
        "--primary": "348 68% 55%",
        "--primary-foreground": "350 40% 7%",
        "--secondary": "350 28% 14%",
        "--secondary-foreground": "355 25% 96%",
        "--destructive": "25 80% 40%",
        "--destructive-foreground": "355 25% 96%",
        "--card": "350 38% 9%",
        "--card-foreground": "355 25% 96%",
        "--border": "350 25% 17%",
        "--muted": "350 25% 14%",
        "--muted-foreground": "350 15% 62%",
        "--ring": "348 68% 55%",
      },
    },
  },
];

export function getTheme(name: string): ThemePreset | undefined {
  return themes.find((t) => t.name === name);
}

// Color variable names that map to Tailwind --color-* tokens
const COLOR_VARS = [
  "background",
  "foreground",
  "primary",
  "primary-foreground",
  "secondary",
  "secondary-foreground",
  "destructive",
  "destructive-foreground",
  "card",
  "card-foreground",
  "border",
  "muted",
  "muted-foreground",
  "ring",
];

/**
 * Generate the CSS string for a theme preset.
 * Outputs the correct format for the detected Tailwind version.
 */
export function generateThemeCSS(
  theme: ThemePreset,
  tailwindVersion: TailwindVersion = "v3"
): string {
  if (tailwindVersion === "v4") {
    return generateV4CSS(theme);
  }
  return generateV3CSS(theme);
}

function generateV3CSS(theme: ThemePreset): string {
  const lightVars = Object.entries(theme.cssVars.light)
    .map(([key, value]) => `    ${key}: ${value};`)
    .join("\n");

  const darkVars = Object.entries(theme.cssVars.dark)
    .map(([key, value]) => `    ${key}: ${value};`)
    .join("\n");

  return `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
${lightVars}
  }

  .dark {
${darkVars}
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
`;
}

function generateV4CSS(theme: ThemePreset): string {
  // For v4: wrap HSL values in hsl(), put :root/.dark outside @layer,
  // use @theme inline for Tailwind token mapping

  const lightVars = Object.entries(theme.cssVars.light)
    .map(([key, value]) => {
      if (key === "--radius") return `  ${key}: ${value};`;
      return `  ${key}: hsl(${value});`;
    })
    .join("\n");

  const darkVars = Object.entries(theme.cssVars.dark)
    .map(([key, value]) => {
      if (key === "--radius") return `  ${key}: ${value};`;
      return `  ${key}: hsl(${value});`;
    })
    .join("\n");

  // Build @theme inline block
  const themeColorMappings = COLOR_VARS.map(
    (name) => `  --color-${name}: var(--${name});`
  ).join("\n");

  return `@import "tailwindcss";

:root {
${lightVars}
}

.dark {
${darkVars}
}

@theme inline {
${themeColorMappings}
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
}
`;
}
