# Contributing Guide

Welcome to Rad UI! We welcome your contributions to this RTL-first, Persian-inspired component library.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- For mobile development: Expo CLI (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/quark-lab/rad-ui.git
cd rad-ui

# Install dependencies
npm install
```

### Running the Project

```bash
# Run all apps in development mode
npm run dev

# Or run individually:
cd apps/web && npm run dev      # Next.js app on http://localhost:3000
cd apps/mobile && npm run dev    # Expo app
```

## Project Structure

```
rad-ui/
├── apps/
│   ├── web/          # Next.js landing page and documentation
│   └── mobile/       # Expo React Native app
├── packages/
│   ├── ui/           # Shared UI component library
│   └── config/       # Shared ESLint and TypeScript configs
```

## How to Contribute

### 1. Creating Issues or Pull Requests

- **Bug Reports**: If you find a bug, please create an issue
- **Feature Requests**: To suggest a new feature, create an issue
- **Pull Requests**: To submit code, create a PR

### 2. Pull Request Process

1. **Fork** the repository
2. **Clone** your fork
3. Create a new **branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
4. Make your changes and **commit** them:
   ```bash
   git add .
   git commit -m "feat: add new component"
   ```
5. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Create a **Pull Request** on GitHub

### 3. Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes (commas, semicolons, etc.)
- `refactor:` for code refactoring
- `test:` for adding or changing tests
- `chore:` for build or tooling changes

Examples:

```
feat: add Button component with RTL support
fix: correct text alignment in Card component
docs: update README with installation steps
```

## Coding Guidelines

### RTL-First Design

**Important**: This library is RTL-first. All components must be designed for right-to-left from the start.

- Use `tailwindcss-rtl` for RTL classes
- Test components in RTL mode
- Use `dir="rtl"` in layouts
- Pay attention to element order in RTL

### TypeScript

- All files should be TypeScript
- Use full type safety
- Avoid `any` as much as possible

### Styling

- Use Tailwind CSS
- Use CSS variables for colors (Persian palette)
- Use the `cn()` utility from `@rad-ui/ui` for merging classes

Example:

```tsx
import { cn } from "@rad-ui/ui";

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg",
        "bg-primary text-primary-foreground",
        className
      )}
      {...props}
    />
  );
}
```

### Components

- Components should be placed in `packages/ui/src`
- Each component must:
  - Have TypeScript types
  - Support RTL
  - Be responsive
  - Support dark mode
  - Be accessible (ARIA attributes)

### Fonts

- Use `Vazirmatn` for Persian text
- Use `Inter` for English text
- Fonts are loaded in `layout.tsx`

### Colors

Use the defined Persian color palette:

**Light Mode (Kahgel - Warm Clay):**

- Primary: `#00909e` (Firoozeh)
- Background: `#fdfcf8` (Warm Clay)

**Dark Mode (Shab - Midnight):**

- Primary: `#2dd4bf` (Glowing Firoozeh)
- Background: `#0f172a` (Midnight)

Use CSS variables:

```css
background-color: hsl(var(--primary));
color: hsl(var(--foreground));
```

## Testing

Before submitting a PR, make sure:

- [ ] Code runs without errors
- [ ] Component works in RTL mode
- [ ] Component works in dark mode
- [ ] Component is responsive
- [ ] No TypeScript errors
- [ ] No ESLint errors

```bash
# Run linting
npm run lint

# Check TypeScript
cd apps/web && npx tsc --noEmit
```

## Documentation

- New components must have documentation
- Usage examples in Storybook or documentation
- Explain props and usage

## Questions

If you have questions:

- Create an Issue
- Start a Discussion

## License

By contributing to this project, you agree that your code will be released under the same license as the project.

---

**Thank you for contributing!**
