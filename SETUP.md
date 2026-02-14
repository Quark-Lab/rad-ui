# Rad UI Setup Guide

## Project Structure

```
rad-ui/
├── apps/
│   ├── web/                          # Next.js docs site (quarklab.dev)
│   │   ├── registry/
│   │   │   ├── web/
│   │   │   │   ├── ui/              # 21 component source files (single source of truth)
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   ├── input.tsx
│   │   │   │   │   ├── ...
│   │   │   │   │   └── index.ts     # Barrel re-export
│   │   │   │   └── lib/
│   │   │   │       └── utils.ts     # cn() helper
│   │   │   └── mobile/              # Placeholder for future mobile components
│   │   ├── scripts/
│   │   │   └── build-registry.ts    # Generates public/r/*.json from source
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── components/*/    # Doc page for each component
│   │   │   │   ├── globals.css      # Theme CSS variables
│   │   │   │   └── layout.tsx
│   │   │   └── components/          # Shared layout components
│   │   ├── public/r/                # Generated registry JSON (gitignored)
│   │   ├── tailwind.config.ts
│   │   └── next.config.js
│   └── mobile/                      # Expo React Native app (coming soon)
├── packages/
│   ├── cli/                         # @quark-lab/rad-ui CLI
│   │   ├── src/
│   │   │   ├── index.ts             # Entry point (commander setup)
│   │   │   ├── commands/
│   │   │   │   ├── init.ts          # Project initialization
│   │   │   │   └── add.ts           # Add components
│   │   │   ├── registry/
│   │   │   │   ├── index.ts         # Component metadata + dependency graph
│   │   │   │   └── themes.ts        # 5 Persian color themes (light + dark)
│   │   │   └── utils/
│   │   │       ├── config.ts        # rad-ui.json read/write
│   │   │       ├── detect-project.ts # Project type + Tailwind version detection
│   │   │       ├── fetch-registry.ts # HTTP client for registry JSON
│   │   │       ├── transformers.ts   # Import path rewriting
│   │   │       └── logger.ts
│   │   ├── templates/web/           # Bundled fallback templates (synced from registry)
│   │   ├── scripts/
│   │   │   └── sync-templates.js    # Copies registry -> templates at build time
│   │   ├── tsup.config.ts
│   │   └── package.json             # Published as @quark-lab/rad-ui
│   └── config/                      # Shared ESLint and TypeScript configs
├── turbo.json
└── package.json
```

## Getting Started (Development)

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Servers

```bash
# Run all apps
npm run dev

# Or run individually
cd apps/web && npm run dev
```

### 3. Build

```bash
npm run build
```

This runs the full pipeline:

- `apps/web`: registry:build (generates JSON) -> next build (compiles site)
- `packages/cli`: sync-templates -> tsup (bundles CLI)

## Architecture

### Single Source of Truth

All component source code lives in `apps/web/registry/web/ui/`. This is the only place components are authored. Two consumers read from here:

1. **Doc site** (`apps/web/src/`) — imports components for live demos
2. **Build script** (`apps/web/scripts/build-registry.ts`) — generates JSON payloads

### Registry Build

The prebuild step reads each `.tsx` file and writes a JSON file to `public/r/`:

```json
{
  "name": "button",
  "type": "registry:ui",
  "dependencies": ["class-variance-authority"],
  "files": [{ "path": "ui/button.tsx", "content": "..." }]
}
```

When deployed, these are served as static files at `quarklab.dev/r/button.json`.

### CLI Flow

**`npx @quark-lab/rad-ui init`**

1. Detects project type (Next.js, Vite, etc.) and package manager
2. Detects Tailwind version (v3 or v4) and source directory
3. Prompts for theme, component path, utils path
4. Writes `rad-ui.json` config, themed CSS, and `lib/utils.ts`
5. For v3: creates/updates `tailwind.config.ts`
6. For v4: injects `@import "tailwindcss"` + `@theme inline` in CSS
7. Installs base dependencies (clsx, tailwind-merge, cva)

**`npx @quark-lab/rad-ui add button`**

1. Reads `rad-ui.json` for config
2. Resolves internal dependencies (e.g., `field` pulls in `label` + `separator`)
3. Fetches component via HTTP from `quarklab.dev/r/button.json`
4. Falls back to bundled templates if offline
5. Transforms imports (`../lib/utils` -> user's configured alias)
6. Writes files to user's components directory
7. Installs npm dependencies

### Tailwind v3 vs v4

The CLI auto-detects the Tailwind version and generates the appropriate output:

|                | Tailwind v3                           | Tailwind v4                |
| -------------- | ------------------------------------- | -------------------------- |
| Config         | `tailwind.config.ts` (JS)             | No config file             |
| CSS directives | `@tailwind base/components/utilities` | `@import "tailwindcss"`    |
| Variables      | Raw HSL: `40 20% 98%`                 | Wrapped: `hsl(40 20% 98%)` |
| Theme mapping  | JS `theme.extend.colors`              | CSS `@theme inline`        |
| Variable scope | Inside `@layer base`                  | Outside `@layer`           |

## Themes

Five Persian-inspired color themes, each with light and dark mode:

| Theme    | Description                                     |
| -------- | ----------------------------------------------- |
| Kahgel   | Warm Clay — earthy tones with teal accent       |
| Firouzeh | Persian Turquoise — cool cyan/turquoise palette |
| Lajvard  | Lapis Lazuli — deep blue tones                  |
| Puste    | Pistachio — fresh green palette                 |
| Anar     | Pomegranate — rich red/crimson tones            |

## Components (21)

**Form**: Button, Label, Toggle, Toggle Group, Input, Input OTP, Input Group, Field, Native Select, Textarea, Switch, Slider, Checkbox, Radio Group

**Layout**: Aspect Ratio, Separator

**Display**: Avatar, Badge, Kbd, Skeleton, Spinner

## Publishing the CLI

```bash
cd packages/cli
npm run build        # sync templates + tsup bundle
npm publish --access public --otp=YOUR_CODE
```

## Deploying the Doc Site

Deploy `apps/web` to Vercel or any hosting that supports Next.js. The build automatically generates the registry JSON files into `public/r/`.

After deployment, the CLI fetches components from `quarklab.dev/r/*.json`.
