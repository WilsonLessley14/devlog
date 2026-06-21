# The Cave - Codebase Documentation

## Project Overview

Personal portfolio and blog built with SvelteKit 2.16, Svelte 5.0, TypeScript, and Tailwind CSS 4.0.

## Architecture

- **Framework**: SvelteKit with file-based routing
- **Design System**: [@wl/frontend-system](https://github.com/WilsonLessley14/frontend-system) — consumed as an installed package, pinned via devenv (a Nix flake input). Provides components + the two-axis token system. **Not edited here; customize through tokens.**
- **Styling**: Tailwind CSS 4.0; the design system ships the `@theme` bridge and tokens
- **Testing**: Vitest with dual workspaces (client/server)
- **Build**: Vite 6.2
- **Package Manager**: npm with Nix/devenv for reproducible environments
- **Command Runner**: just (justfile) for all development commands

## Key Directories

- `/src/routes/` - SvelteKit pages (file-based routing)
  - `/+layout.svelte` - Root layout: nav + mode/theme toggles + breadcrumb
  - `/+page.svelte` - Home page
  - `/blog/` - Blog list and individual posts
  - `/contributions/` - GitHub contribution tracker
  - `/cats/` - Photo gallery
  - `/games/` - Games platform
  - `/design-system/` - Live showcase of the design system as used in this site
- `/src/lib/blogposts/` - Markdown blog posts (filename becomes URL slug)
- `/src/lib/common/games/` - Game components (auto-discovered)
- `/src/lib/assets/` - Static images for cat gallery
- `/src/lib/utils/` - Utility functions (GitHub API, HTTP service)
- `/src/lib/AppBreadcrumb.svelte` - Route-derived breadcrumb built on design-system primitives
- `/src/app.css` - Tailwind import + design-system styles + site global element styling

## Design System

Components and tokens come from the `@wl/frontend-system` package — see its repo and
`DESIGN_SYSTEM.md` for the architecture. This repo only consumes it.

- **Import**: `import { Button, Card, Input, Text, Stack, ... } from '@wl/frontend-system';`
- **Styles**: `app.css` does `@import 'tailwindcss';` then `@import '@wl/frontend-system/styles.css';`
- **Theming**: set `data-mode` (`soft`/`hard`) and `data-theme` (`light`/`dark`/`pink`) on `<html>`.
  Don't edit components — add/adjust tokens. Themes (incl. `pink`) ship from the design system.
- **Pinning**: `devenv.yaml` declares the `frontend-system` flake input; `devenv.lock` pins it;
  the build is exposed as `$FRONTEND_SYSTEM_TGZ`. Update with `devenv update` + reinstall the tarball.

## Development Workflow

- **Command Runner**: Use `just` for all commands (preferred over npm directly)
  - `just dev` - Start development server
  - `just test` / `just test-watch` - Run tests (vitest)
  - `just lint` - Lint with eslint and prettier
  - `just format` - Format with prettier
  - `just check` - Type check with svelte-check
  - `just build` - Build for production
- **Pre-commit hooks**: Automatically run prettier and eslint
- **Environment Setup**: Uses Nix/devenv for reproducible environments (direnv integration)

## Code Conventions

- **TypeScript**: All code is type-safe with TypeScript 5.0
- **Svelte 5**: Use modern Svelte 5 features and reactivity patterns (runes)
- **Styling**: Tailwind utility classes + design-system semantic tokens (`bg-background`,
  `text-foreground`, `text-primary`, `border-border`, …). Don't reintroduce bespoke color vars.
- **Testing**: Vitest for unit tests, @testing-library/svelte for component tests
- **Formatting**: Prettier; **Linting**: ESLint with Svelte plugin

## Important Notes

- **GitHub Token**: Required in `.env` as `GITHUB_FINE_GRAIN_ACCESS_TOKEN` for the contributions feature
- **Theming**: `light`/`dark`/`pink` color themes × `soft`/`hard` character modes, driven by the
  design system's tokens; toggled in the nav. Themes are defined in the design system.
- **Blog Posts**: `.md` files in `/src/lib/blogposts/`; filename becomes the URL slug; parsed with marked at runtime
- **Games**: Auto-discovered Svelte components in `/src/lib/common/games/`; current: Click Counter, Word Frequency Game (DataMuse API)
- **MDsvex**: Processes `.md`/`.svx` with Svelte component support
- **Cat Gallery**: Images in `/src/lib/assets/` auto-included with lazy loading

## Technology Stack Details

### Core Framework

- Svelte 5.0, SvelteKit 2.16, TypeScript 5.0, Vite 6.2

### Content Processing

- MDsvex - Markdown preprocessing with Svelte component support
- Marked - Runtime markdown parsing for blog posts

### Testing & Quality

- Vitest 3.0 - Unit testing with dual workspaces
- @testing-library/svelte - Component testing utilities
- ESLint + Prettier - Code linting and formatting

### Development Tools

- Nix/devenv - Reproducible development environments (also pins the design system)
- Just - Command runner for development tasks
- direnv - Automatic environment loading

## Common Tasks

### Adding Content

- **New Blog Post**: Create `.md` file in `/src/lib/blogposts/`
- **New Game**: Create Svelte component in `/src/lib/common/games/`
- **Cat Photos**: Add images to `/src/lib/assets/`
- **New Theme**: Build it in the design system's `/theme-builder` and commit it there, bump the pin, then add the name to the nav theme cycle in `+layout.svelte`

### Development

- **Start Dev Server**: `just dev`
- **Run Tests**: `just test` or `just test-watch`
- **Type Check**: `just check`
- **Format / Lint**: `just format` / `just lint`

## Features

### Blog Platform

- Markdown-based posts, dynamic routing, SSR, runtime parsing with marked

### GitHub Contributions

- Real-time contribution statistics from GitHub's GraphQL API, grouped by repo and date (requires token)

### Games Platform

- Interactive games with dynamic component loading; auto-discovers new games in `/src/lib/common/games/`

### Cat Gallery

- Responsive photo gallery with lazy loading; auto-includes images from `/src/lib/assets/`

## Project Info

- **License**: MIT
- **Environment**: Nix + devenv (Node 22); design system pinned via devenv
- Add unit tests for new utilities and games where it makes sense.
