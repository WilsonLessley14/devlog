# The Cave

A personal portfolio and blog website built with SvelteKit, featuring a blog platform, GitHub contribution tracker, photo gallery, and interactive games.

## Features

- **Blog Platform** - Markdown-based blog posts with dynamic routing and server-side rendering
- **GitHub Contributions** - Real-time contribution statistics fetched from GitHub's GraphQL API, grouped by repository and date
- **Games Platform** - Interactive games with dynamic component loading:
  - Click Counter
  - Word Frequency Game (powered by DataMuse API)
- **Cat Gallery** - Responsive photo gallery with lazy loading and hover effects
- **Theme System** - Light/dark mode toggle with custom color schemes

## Technology Stack

### Core Framework

- **Svelte 5.0** - Modern reactive component framework
- **SvelteKit 2.16** - Full-stack framework with file-based routing
- **TypeScript 5.0** - Type-safe development
- **Vite 6.2** - Lightning-fast build tooling

### Styling

- **Tailwind CSS 4.0** - Utility-first CSS framework
- Custom CSS variables for theming

### Content Processing

- **MDsvex** - Markdown preprocessing with Svelte component support
- **Marked** - Runtime markdown parsing for blog posts

### Testing & Quality

- **Vitest 3.0** - Unit testing with dual workspaces (client/server)
- **@testing-library/svelte** - Component testing utilities
- **Storybook 8.6** - Component development environment
- **ESLint** + **Prettier** - Code linting and formatting

## Getting Started

### Prerequisites

This project uses [devenv](https://devenv.sh/) for reproducible development environments:

- **Nix** - Package manager (install from [nixos.org](https://nixos.org/download.html))
- **direnv** - Automatic environment loading (install via Nix or your package manager)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd devlog

# Allow direnv to load the development environment
direnv allow

# Dependencies will be automatically installed via devenv
# If not, run: npm install
```

The development environment includes:

- Node.js 22
- npm with automatic dependency installation
- TypeScript support
- just command runner
- Pre-commit hooks for prettier and eslint

### Environment Variables

Create a `.env` file in the root directory:

```env
# Required for GitHub contributions feature
GITHUB_FINE_GRAIN_ACCESS_TOKEN=your_github_token_here
```

### Development

Start the development server using just:

```bash
# Start dev server
just dev

# Or open in browser automatically
just dev-open
```

The app will be available at `http://localhost:5173`

### Building

Create a production build:

```bash
just build
```

Preview the production build:

```bash
just preview
```

## Project Structure

```
/src
  /routes/              # SvelteKit pages (file-based routing)
    /+layout.svelte     # Root layout with navigation
    /+page.svelte       # Home page
    /blog/              # Blog list and individual posts
    /contributions/     # GitHub contribution tracker
    /cats/              # Photo gallery
    /games/             # Games platform
  /lib/
    /blogposts/         # Markdown blog post files
    /assets/            # Static images
    /common/games/      # Game components
    /utils/             # Utility functions (GitHub API, HTTP service)
  /stories/             # Storybook component stories
  /app.css              # Global styles and theme variables
```

## Development Commands

This project uses [just](https://github.com/casey/just) as a command runner. Run `just` to see all available commands.

### Common Commands

```bash
# Development
just dev              # Start development server
just dev-open         # Start dev server and open in browser
just build            # Build for production
just preview          # Preview production build

# Testing
just test             # Run all tests
just test-watch       # Run tests in watch mode

# Code Quality
just lint             # Lint code
just format           # Format code
just check            # Type check with svelte-check

# Storybook
just storybook        # Start Storybook dev server
just storybook-build  # Build Storybook

# Dependencies
just install          # Install dependencies
just outdated         # Check for outdated packages
just update           # Update dependencies
just clean-install    # Clean reinstall

# Utility
just info             # Show project info
just clean            # Clean build artifacts
just fresh            # Clean install + start dev
```

You can also use npm scripts directly if preferred:

```bash
npm run dev
npm test
npm run lint
```

## Adding Content

### Blog Posts

Add new blog posts to `/src/lib/blogposts/` as `.md` files. The filename will become the URL slug.

Example structure:

```markdown
# Your Blog Post Title

Your content here...
```

### Games

Add new game components to `/src/lib/common/games/` as Svelte components. They will be automatically discovered and listed on the games page.

### Cat Photos

Add images to `/src/lib/assets/` - they will be automatically included in the cat gallery.

## Contributing

This is a personal portfolio project, but suggestions and improvements are welcome.

## License

MIT
