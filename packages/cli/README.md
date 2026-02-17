# Rad UI CLI

A CLI for adding Rad UI components to your project. Beautiful Persian-themed React components built on Radix UI and Tailwind CSS.

## Features

- **RTL-First**: Designed from the ground up for Right-to-Left languages (Persian, Arabic, Hebrew, etc.).
- **Persian Themes**: Includes 5 built-in Persian color palettes (Kahgel, Firouzeh, Lajvard, Puste, Anar).
- **Shadcn-compatible**: Follows the same architecture as shadcn/ui, giving you full ownership of the code.
- **Modern Stack**: Built with React, TypeScript, Tailwind CSS, and Radix UI.
- **Tailwind Support**: Automatically detects and configures for both Tailwind CSS v3 and v4.

## Installation

You can use the CLI directly via `npx` without installing it globally:

```bash
npx @quark-lab/rad-ui@latest init
```

## Usage

### `init`

Initialize a new project with Rad UI configuration. This command will:
- Check your project environment (Tailwind version, etc.)
- Configure `components.json`
- Set up CSS variables for your chosen theme
- Install necessary dependencies

```bash
npx @quark-lab/rad-ui@latest init
```

### `add`

Add components to your project. This will download the component source code and its dependencies into your project.

```bash
npx @quark-lab/rad-ui@latest add [component]
```

Example:

```bash
npx @quark-lab/rad-ui@latest add button
```

You can also see a list of available components by running the command without arguments:

```bash
npx @quark-lab/rad-ui@latest add
```

## Themes

Rad UI comes with 5 distinct Persian-inspired themes, each with light and dark mode support:

- **Kahgel** (Adobe/Earthen)
- **Firouzeh** (Turquoise)
- **Lajvard** (Lapis Lazuli)
- **Puste** (Pistachio)
- **Anar** (Pomegranate)

## Documentation

For full documentation and component examples, visit [quarklab.dev](https://quarklab.dev).

## License

MIT © [QuarkLab](https://quarklab.dev)
