# frontend-starter

A minimal starter template: **Rsbuild + React 19 + React Router + shadcn/ui + Tailwind CSS v4**, with dark mode wired up.

## Stack

- [Rsbuild](https://rsbuild.rs) (Rspack-based bundler) + React Compiler
- [React 19](https://react.dev) & [React Router 7](https://reactrouter.com)
- [shadcn/ui](https://ui.shadcn.com) (style: `radix-nova`) on [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript, ESLint, Prettier

## Quick start

```bash
npm install
npm run dev      # dev server at http://localhost:3000
```

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server (opens the browser) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Lint with ESLint |
| `npm run format` | Format with Prettier |

## Project structure

```
src/
  components/
    ui/                 # shadcn components (card, button, dropdown-menu, ...)
    theme-provider.tsx  # light/dark/system theme context
    mode-toggle.tsx     # dark mode dropdown toggle
  lib/utils.ts          # cn() helper
  styles/globals.css    # Tailwind + theme tokens (CSS variables)
  App.tsx               # demo page
  index.tsx             # entry — mounts React Router + imports globals.css
```

## How shadcn is wired (important for Rsbuild)

This was set up manually because the shadcn CLI doesn't recognize Rsbuild as a framework. A few things to know:

- **The `@` alias points at `src/`.** `tsconfig.json` maps `"@/*": ["./src/*"]`, and Rsbuild reads those `paths`. This is what makes shadcn write components into `src/components/ui` and lets you `import { Button } from "@/components/ui/button"`.
- **`src/styles/globals.css` is imported in `src/index.tsx`.** It holds the Tailwind import and all theme tokens (`--primary`, `--card`, etc.). Without that import, components render unstyled.
- **Adding components:** `npx shadcn@latest add <name>` works and writes to `src/components/ui/`. If a new component imports `radix-ui` and the build fails on a missing module, run `npm install radix-ui`.
- **`npx shadcn apply --preset` / `init` do NOT work here** — they fail framework detection on Rsbuild. To change theme, copy the CSS variables from the [shadcn theme builder](https://ui.shadcn.com/create) into the `:root` / `.dark` blocks of `src/styles/globals.css`.

## Dark mode

`ThemeProvider` (in `src/App.tsx`) manages `light` / `dark` / `system` and toggles the `.dark` class on `<html>`; preference persists to `localStorage`. Use the `ModeToggle` component, or call `useTheme()` from `@/components/theme-provider`.

## Theming

All colors are CSS variables in `src/styles/globals.css` under `:root` (light) and `.dark` (dark). Generate a palette at the [shadcn theme builder](https://ui.shadcn.com/create) and paste the variables in.
