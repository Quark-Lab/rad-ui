# Rad UI

An RTL-first, shadcn-inspired component library with Persian-themed color palettes. Users install components as source code via a CLI — they own the code and can customize freely.

## Install

```bash
npx @quarklab/rad-ui init
npx @quarklab/rad-ui add button
```

## Features

- **21 components** — Button, Input, Checkbox, Field, Toggle, Slider, and more
- **RTL-first** — Built with `tailwindcss-rtl` for right-to-left layouts
- **5 Persian themes** — Kahgel, Firouzeh, Lajvard, Puste, Anar (light + dark)
- **Tailwind v3 + v4** — Auto-detects your Tailwind version and generates the correct config
- **Source code ownership** — Components are copied into your project, not imported from a package
- **Dependency resolution** — Adding a component automatically pulls in its dependencies

## Documentation

Live docs and component demos: [quarklab.dev](https://www.quarklab.dev)

## Monorepo Structure

```
rad-ui/
├── apps/
│   ├── web/                    # Next.js docs site (quarklab.dev)
│   │   ├── registry/web/ui/    # Component source (single source of truth)
│   │   ├── registry/web/lib/   # Shared utils (cn helper)
│   │   ├── scripts/            # Registry build script
│   │   └── src/app/            # Doc pages for each component
│   └── mobile/                 # Expo React Native app (coming soon)
├── packages/
│   ├── cli/                    # @quarklab/rad-ui CLI (published to npm)
│   └── config/                 # Shared ESLint and TypeScript configs
├── turbo.json
└── package.json
```

## Development

```bash
# Install dependencies
npm install

# Run all apps in development
npm run dev

# Build (includes registry JSON generation)
npm run build
```

## How It Works

1. **Source of truth** — All 21 components live in `apps/web/registry/web/ui/`
2. **Doc site** — `apps/web/src/` imports from the registry to render live demos
3. **Registry build** — A prebuild script generates JSON files at `public/r/*.json`
4. **CLI** — `npx @quarklab/rad-ui add button` fetches from `quarklab.dev/r/button.json`, falls back to bundled templates if offline
5. **User's project** — Components are copied as `.tsx` files with imports transformed to match the user's aliases

## Tech Stack

- **Monorepo**: npm workspaces + Turborepo
- **Web**: Next.js 14+, TypeScript, Tailwind CSS
- **Components**: Radix UI primitives, class-variance-authority, tailwind-merge
- **CLI**: Commander, @clack/prompts, tsup
- **Mobile**: Expo, React Native, NativeWind (coming soon)
