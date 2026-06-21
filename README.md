# The Cave

A personal portfolio and blog website built with SvelteKit, featuring a blog platform, GitHub contribution tracker, photo gallery, and interactive games.

## Features

- **Blog Platform** - Markdown-based blog posts with dynamic routing and server-side rendering
- **GitHub Contributions** - Real-time contribution statistics fetched from GitHub's GraphQL API, grouped by repository and date
- **Games Platform** - Interactive games with dynamic component loading:
  - Click Counter
  - Word Frequency Game (powered by DataMuse API)
- **Cat Gallery** - Responsive photo gallery with lazy loading and hover effects
- **Theming** - `light` / `dark` / `pink` color themes × `soft` / `hard` character modes, all driven by design tokens (toggle in the nav)

## Technology Stack

### Core Framework

- **Svelte 5.0** - Modern reactive component framework
- **SvelteKit 2.16** - Full-stack framework with file-based routing
- **TypeScript 5.0** - Type-safe development
- **Vite 6.2** - Lightning-fast build tooling

### Design System

- **[@wl/frontend-system](https://github.com/WilsonLessley14/frontend-system)** - the shared design system, consumed as an installed package and pinned via devenv (a Nix flake input). Provides the components (Button, Card, Input, Text, Breadcrumb, layout primitives) and the two-axis token system (soft/hard × light/dark). The blog customizes purely through tokens — components are not edited here.
- **Tailwind CSS 4.0** - utility layer; the design system ships the `@theme` bridge and tokens.

### Content Processing

- **MDsvex** - Markdown preprocessing with Svelte component support
- **Marked** - Runtime markdown parsing for blog posts

### Testing & Quality

- **Vitest 3.0** - Unit testing with dual workspaces (client/server)
- **@testing-library/svelte** - Component testing utilities
- **ESLint** + **Prettier** - Code linting and formatting

## Getting Started

### Prerequisites

This project uses [devenv](https://devenv.sh/) for reproducible development environments:

- **Nix** - Package manager (install from [nixos.org](https://nixos.org/download.html))
- **direnv** - Automatic environment loading (install via Nix or your package manager)

### Installation

```bash
git clone git@github.com:WilsonLessley14/devlog.git
cd devlog

# Load the dev environment (Node 22 + the pinned design-system tarball)
direnv allow            # or: devenv shell

# Install dependencies, including the pinned design system
npm install
npm install "$FRONTEND_SYSTEM_TGZ"   # design-system tarball exposed by devenv
```

`$FRONTEND_SYSTEM_TGZ` is the design-system build pinned by `devenv.lock` (the `frontend-system` flake input in `devenv.yaml`). Bump it with `devenv update` then reinstall the tarball.

### Environment Variables

```env
# Required for the GitHub contributions feature
GITHUB_FINE_GRAIN_ACCESS_TOKEN=your_github_token_here
```

### Development

```bash
just dev          # start dev server (http://localhost:5173)
just build        # production build
just preview      # preview the production build
```

## Project Structure

```
/src
  /routes/              # SvelteKit pages (file-based routing)
    /+layout.svelte     # Root layout: nav + mode/theme toggles + breadcrumb
    /+page.svelte       # Home page
    /blog/              # Blog list and individual posts
    /contributions/     # GitHub contribution tracker
    /cats/              # Photo gallery
    /games/             # Games platform
    /design-system/     # Live showcase of the design system in this site
  /lib/
    /blogposts/         # Markdown blog post files (filename → URL slug)
    /assets/            # Static images
    /common/games/      # Game components (auto-discovered)
    /themes/            # Site-specific color themes (e.g. pink) on the token contract
    /utils/             # Utility functions (GitHub API, HTTP service)
    AppBreadcrumb.svelte # Route-derived breadcrumb built on the design system
  /app.css              # Tailwind + design-system styles + site globals
```

Components and tokens come from `@wl/frontend-system`; this repo holds content, routes, and site-specific glue.

## Development Commands

This project uses [just](https://github.com/casey/just) as a command runner. Run `just` to see all commands.

```bash
# Development
just dev / just build / just preview

# Testing
just test             # run all tests (vitest)
just test-watch       # watch mode

# Code Quality
just lint / just format / just check

# Dependencies
just install / just outdated / just update
```

npm scripts work directly too (`npm run dev`, `npm test`, `npm run lint`).

## Adding Content

- **Blog post** - add a `.md` file to `/src/lib/blogposts/` (filename → URL slug)
- **Game** - add a Svelte component to `/src/lib/common/games/` (auto-discovered)
- **Cat photo** - add an image to `/src/lib/assets/`
- **Theme** - add a `[data-theme='name']` block in `/src/lib/themes/`, import it in `app.css`, and add it to the nav theme cycle

## License

MIT
