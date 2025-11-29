# Justfile for The Cave project
# Run 'just' or 'just --list' to see all available commands

# Default recipe - show available commands
default:
    @just --list

# Development
# ===========

# Start development server
dev:
    npm run dev

# Start development server and open in browser
dev-open:
    npm run dev -- --open

# Build for production
build:
    npm run build

# Preview production build
preview:
    npm run preview

# Testing
# =======

# Run all tests
test:
    npm run test

# Run tests in watch mode
test-watch:
    npm run test:unit

# Code Quality
# ============

# Check code with svelte-check
check:
    npm run check

# Watch mode for svelte-check
check-watch:
    npm run check:watch

# Lint code with eslint and prettier
lint:
    npm run lint

# Format code with prettier
format:
    npm run format

# Storybook
# =========

# Start Storybook dev server
storybook:
    npm run storybook

# Build Storybook static site
storybook-build:
    npm run build-storybook

# Dependencies
# ============

# Install dependencies
install:
    npm install

# Check for outdated dependencies
outdated:
    npm outdated

# Update all dependencies (interactive)
update:
    npm update

# Clean and reinstall dependencies
clean-install:
    rm -rf node_modules package-lock.json
    npm install

# Git
# ===

# Show git status
status:
    git status

# Create a new git commit (requires message)
commit message:
    git add .
    git commit -m "{{message}}"

# Push to remote
push:
    git push

# Pull from remote
pull:
    git pull

# Utility
# =======

# Clean build artifacts
clean:
    rm -rf build .svelte-kit

# Full clean (including node_modules)
clean-all: clean
    rm -rf node_modules

# Show project info
info:
    @echo "Project: The Cave"
    @echo "Node: $(node --version)"
    @echo "npm: $(npm --version)"
    @echo ""
    @echo "Available routes:"
    @echo "  / - Home"
    @echo "  /blog - Blog posts"
    @echo "  /contributions - GitHub contributions"
    @echo "  /cats - Cat gallery"
    @echo "  /games - Interactive games"

# Development workflow - clean, install, and start dev server
fresh: clean-install dev
