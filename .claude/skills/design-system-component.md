# Design System Component Creation Skill

Use this skill when creating new design system components for the devlog project.

## Overview

This skill guides Code Agents through the complete workflow for creating a new design system primitive component, including implementation, testing, documentation, and visual verification.

## Required Deliverables

Every new design system component MUST include:

1. **Component file** - `/src/lib/design-system/primitives/{ComponentName}.svelte`
2. **Props interface** - `/src/lib/design-system/primitives/{ComponentName}Props.ts`
3. **Export** - Add to `/src/lib/design-system/primitives/index.ts` and `/src/lib/design-system/index.ts`
4. **Unit tests** - `/src/lib/design-system/primitives/{ComponentName}.svelte.spec.ts`
5. **Storybook stories** - `/src/stories/{ComponentName}.stories.svelte`
6. **Showcase section** - Add section to `/src/routes/design-system/+page.svelte`

## Implementation Steps

### 1. Explore Existing Patterns

Before implementing, read these files to understand conventions:

- `/src/lib/design-system/primitives/Button.svelte` - Component structure
- `/src/lib/design-system/primitives/ButtonProps.ts` - Props interface pattern
- `/src/lib/design-system/tokens/types.ts` - Shared types
- `/src/stories/Button.stories.svelte` - Storybook pattern
- `/src/routes/design-system/+page.svelte` - Showcase page structure

### 2. Create Component

```
/src/lib/design-system/primitives/{ComponentName}.svelte
```

Requirements:

- Use Svelte 5 syntax with `$props()` rune
- Use TypeScript for type safety
- Use Tailwind classes for styling
- Support light/dark mode theming
- Accept `class` prop for custom styling
- Use semantic HTML elements
- Include proper ARIA attributes for accessibility

### 3. Create Props Interface

```
/src/lib/design-system/primitives/{ComponentName}Props.ts
```

Requirements:

- Export `{ComponentName}Props` interface
- Document props with JSDoc comments
- Include optional `class` prop for customization

### 4. Export Component

Add exports to:

- `/src/lib/design-system/primitives/index.ts`
- `/src/lib/design-system/index.ts`

### 5. Create Unit Tests

```
/src/lib/design-system/primitives/{ComponentName}.svelte.spec.ts
```

Requirements:

- Use Vitest with `@testing-library/svelte`
- Test all variants render correctly
- Test props are applied correctly
- Test slots work (if applicable)
- Test accessibility attributes
- Follow existing test patterns (use `it()` not `test()`)

### 6. Create Storybook Stories

```
/src/stories/{ComponentName}.stories.svelte
```

Requirements:

- Follow existing story patterns
- Show all variants
- Show all sizes (if applicable)
- Show all states (default, disabled, error, etc.)
- Include interactive examples where appropriate

### 7. Add to Showcase Page

Edit `/src/routes/design-system/+page.svelte`:

Requirements:

- Add new section after existing components, before Usage Guidelines
- Show all variants with visual examples
- Show different sizes/states
- Include code examples using `<Card variant="code">`
- Follow the structure of existing sections (Button, Text, Input, Card)

### 8. Validation Checklist

Run these commands and fix any issues:

```bash
just check    # TypeScript type checking
just lint     # ESLint + Prettier
just test     # Unit tests
```

### 9. Visual Verification with Browser MCP

REQUIRED for all UI components:

```bash
just dev      # Start dev server
```

Then use Browser MCP to:

1. Navigate to `http://localhost:5173/design-system`
2. Take screenshot of the new component section
3. Toggle to dark mode and take another screenshot
4. Verify:
   - Component renders correctly
   - All variants display properly
   - Light/dark mode theming works
   - Responsive behavior (if applicable)

## Code Agent Prompt Template

When spawning a Code Agent for design system work, use this template:

```
You are the Code Agent. Create a new design system component: {ComponentName}

## Component Requirements
{Describe the component, its variants, props, and behavior}

## Files to Create
1. /src/lib/design-system/primitives/{ComponentName}.svelte
2. /src/lib/design-system/primitives/{ComponentName}Props.ts
3. /src/lib/design-system/primitives/{ComponentName}.svelte.spec.ts
4. /src/stories/{ComponentName}.stories.svelte

## Files to Modify
1. /src/lib/design-system/primitives/index.ts (add export)
2. /src/lib/design-system/index.ts (add export)
3. /src/routes/design-system/+page.svelte (add showcase section)

## Steps
1. Read existing components (Button, Text, Input, Card) to understand patterns
2. Create the component with all variants
3. Create props interface
4. Export from design system
5. Write unit tests (use .svelte.spec.ts naming)
6. Create Storybook stories
7. Add section to showcase page with examples and code snippets
8. Run `just check`, `just lint`, `just test` and fix issues
9. Use Browser MCP to verify visually in light and dark mode

CRITICAL: Actually implement all files. Don't just provide plans.
```

## Quality Standards

- All components must work in light and dark mode
- All components must be accessible (WCAG 2.1 AA)
- All components must have TypeScript types
- All components must have unit tests
- All components must have Storybook stories
- All components must be documented in the showcase page
