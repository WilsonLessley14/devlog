# The Cave - Codebase Documentation

## Project Overview

Personal portfolio and blog built with SvelteKit 2.16, Svelte 5.0, TypeScript, and Tailwind CSS 4.0.

## Architecture

- **Framework**: SvelteKit with file-based routing
- **Styling**: Tailwind CSS 4.0 with custom theme variables (light/dark mode)
- **Testing**: Vitest with dual workspaces (client/server)
- **Dev Tools**: Storybook for component development
- **Build**: Vite 6.2
- **Package Manager**: npm with Nix/devenv for reproducible environments
- **Command Runner**: just (justfile) for all development commands

## Key Directories

- `/src/routes/` - SvelteKit pages (file-based routing)
  - `/+layout.svelte` - Root layout with navigation
  - `/+page.svelte` - Home page
  - `/blog/` - Blog list and individual posts
  - `/contributions/` - GitHub contribution tracker
  - `/cats/` - Photo gallery
  - `/games/` - Games platform
- `/src/lib/blogposts/` - Markdown blog posts (filename becomes URL slug)
- `/src/lib/common/games/` - Game components (auto-discovered)
- `/src/lib/assets/` - Static images for cat gallery
- `/src/lib/utils/` - Utility functions (GitHub API, HTTP service)
- `/src/stories/` - Storybook component stories
- `/src/app.css` - Global styles and theme variables

## Development Workflow

- **Command Runner**: Use `just` for all commands (preferred over npm directly)
  - `just dev` - Start development server
  - `just test` - Run all tests
  - `just test-watch` - Run tests in watch mode
  - `just lint` - Lint code with eslint and prettier
  - `just format` - Format code with prettier
  - `just check` - Type check with svelte-check
  - `just storybook` - Start Storybook dev server
  - `just build` - Build for production
- **Pre-commit hooks**: Automatically run prettier and eslint
- **Environment Setup**: Uses Nix/devenv for reproducible environments (direnv integration)

## Issue Tracking (Beads)

- **Issue Tracker**: Uses Beads (`bd`) for git-native issue tracking
- **Issue Prefix**: `devlog-` (e.g., devlog-1, devlog-2)
- **Storage**: Issues stored in `.beads/` directory (git-tracked)
- **Claude Integration**: Beads hooks automatically inject workflow context into Claude sessions
- **Common Commands**:
  - `bd list` - List all issues
  - `bd show <id>` - Show issue details
  - `bd new "<title>"` - Create new issue
  - `bd close <id>` - Close an issue
  - `bd search <query>` - Search issues
  - `bd tree` - Show issue dependency tree
  - `bd prime` - Get workflow context for Claude
  - `bd status` - Show current workflow status
- **Workflow**: Beads integrates with git hooks and Claude Code for seamless issue management
- **Documentation**: See `.beads/README.md` for detailed Beads usage

## Code Conventions

- **TypeScript**: All code is type-safe with TypeScript 5.0
- **Svelte 5**: Use modern Svelte 5 features and reactivity patterns
- **Styling**: Tailwind utility classes for all styling
- **Testing**: Vitest for unit tests, @testing-library/svelte for component tests
- **Formatting**: Prettier with specific configuration
- **Linting**: ESLint with Svelte plugin

## Important Notes

- **GitHub Token**: Required in `.env` as `GITHUB_FINE_GRAIN_ACCESS_TOKEN` for contributions feature
- **Theme System**: Uses CSS variables defined in `/src/app.css` for light/dark mode
- **Blog Posts**:
  - Created as `.md` files in `/src/lib/blogposts/`
  - Filename becomes URL slug
  - Processed with marked at runtime
- **Games**:
  - Auto-discovered Svelte components in `/src/lib/common/games/`
  - Dynamic component loading
  - Current games: Click Counter, Word Frequency Game (DataMuse API)
- **MDsvex**: Processes markdown with Svelte component support
- **Cat Gallery**: Images in `/src/lib/assets/` automatically included with lazy loading

## Technology Stack Details

### Core Framework

- Svelte 5.0 - Modern reactive component framework
- SvelteKit 2.16 - Full-stack framework with file-based routing
- TypeScript 5.0 - Type-safe development
- Vite 6.2 - Lightning-fast build tooling

### Content Processing

- MDsvex - Markdown preprocessing with Svelte component support
- Marked - Runtime markdown parsing for blog posts

### Testing & Quality

- Vitest 3.0 - Unit testing with dual workspaces
- @testing-library/svelte - Component testing utilities
- Storybook 8.6 - Component development environment
- ESLint + Prettier - Code linting and formatting

### Development Tools

- Beads (bd) 0.27.0 - Git-native issue tracker with Claude Code integration
- Nix/devenv - Reproducible development environments
- Just - Command runner for development tasks
- direnv - Automatic environment loading

## Common Tasks

### Adding Content

- **New Blog Post**: Create `.md` file in `/src/lib/blogposts/`
- **New Game**: Create Svelte component in `/src/lib/common/games/`
- **Cat Photos**: Add images to `/src/lib/assets/`

### Development

- **Start Dev Server**: `just dev` or `just dev-open` (opens browser)
- **Run Tests**: `just test` or `just test-watch`
- **Type Check**: `just check` or `just check-watch`
- **Component Development**: `just storybook`

### Code Quality

- **Format Code**: `just format`
- **Lint Code**: `just lint`
- **Full Check**: Run `just check`, `just lint`, and `just test`

### Dependencies

- **Check Outdated**: `just outdated`
- **Update Deps**: `just update`
- **Clean Install**: `just clean-install` (removes node_modules and reinstalls)

### Build & Deploy

- **Production Build**: `just build`
- **Preview Build**: `just preview`
- **Storybook Build**: `just storybook-build`

### Issue Management

- **List Issues**: `bd list` or `bd list --open`
- **Create Issue**: `bd new "Issue title"`
- **View Issue**: `bd show devlog-1`
- **Close Issue**: `bd close devlog-1`
- **Search Issues**: `bd search "keyword"`
- **Get Workflow Context**: `bd prime` (for Claude Code)
- **View Issue Tree**: `bd tree` (shows dependencies)

## Features

### Blog Platform

- Markdown-based blog posts
- Dynamic routing
- Server-side rendering
- Runtime markdown parsing with marked

### GitHub Contributions

- Real-time contribution statistics
- Fetched from GitHub's GraphQL API
- Grouped by repository and date
- Requires GitHub token in `.env`

### Games Platform

- Interactive games with dynamic component loading
- Click Counter game
- Word Frequency Game (powered by DataMuse API)
- Automatically discovers new games in `/src/lib/common/games/`

### Cat Gallery

- Responsive photo gallery
- Lazy loading images
- Hover effects
- Auto-includes images from `/src/lib/assets/`

### Theme System

- Light/dark mode toggle
- Custom color schemes
- CSS variables for theming

## Project Info

- **License**: MIT
- **Environment**: Nix + devenv for reproducible development
- **Node Version**: 22 (managed by devenv)
- create unit tests for any new component created within the design-system
