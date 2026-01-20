# Design System

A comprehensive design system for the application built with Svelte 5, TypeScript, and Tailwind CSS 4.0.

## Architecture

The design system is organized into four main layers:

- **`/tokens`** - Design tokens (types, colors, spacing, typography)
- **`/primitives`** - Base UI components (Button, Input, Text)
- **`/composites`** - Composed components built from primitives
- **`/patterns`** - Reusable UI patterns and layouts
- **`/utils`** - Shared utilities (classNames helper, etc.)

## TestWrapper Pattern

### Purpose

TestWrapper components exist solely for Storybook documentation and testing. They bridge the gap between Storybook's limitations and Svelte 5's modern features.

### Why TestWrappers Are Needed

Storybook's args system has limitations with Svelte 5's new reactivity features:

1. **Snippets (`Snippet` type)**
   - Components like Button use `children?: Snippet` for content rendering
   - Storybook args cannot pass Snippets (not serializable)
   - TestWrapper accepts simple props like `text: string` instead
   - This makes components controllable via Storybook's Controls panel

2. **Bindable Values (`$bindable()`)**
   - Components like Input use `value = $bindable('')` for two-way binding
   - Storybook args are one-way only
   - Without state management, typing in inputs doesn't update properly
   - TestWrapper creates local `$state()` to handle binding correctly

### When to Use TestWrappers

- **Storybook stories ONLY** - Use `*TestWrapper.svelte` components in `.stories.svelte` files
- **Never in production** - Real application code should import the actual primitive components

### Example

**In Application Code (CORRECT):**

```svelte
<script>
  import { Button } from '$lib/design-system';
  let count = $state(0);
</script>

<Button onclick={() => count++}>
  Clicked {count} times
</Button>
```

**In Storybook Stories (CORRECT):**

```svelte
<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import ButtonTestWrapper from '../lib/design-system/primitives/ButtonTestWrapper.svelte';

  const { Story } = defineMeta({
    component: ButtonTestWrapper,
    // ...
  });
</script>

<Story name="Primary" args={{ text: 'Click me', variant: 'primary' }} />
```

### Creating a TestWrapper

When creating a primitive component that uses Snippets or `$bindable()`:

1. **Create the primitive component** with proper Svelte 5 patterns
2. **Create a matching TestWrapper** that:
   - Accepts simple, serializable props (strings, numbers, booleans)
   - Manages state internally (for bindable values)
   - Renders the primitive component with proper bindings

**Example TestWrapper:**

```svelte
<script lang="ts">
  import MyComponent from './MyComponent.svelte';

  interface Props {
    text?: string;
    value?: string;
    // ... other simple props
  }

  let { text = 'Default', value = $state(''), ...rest }: Props = $props();
</script>

<MyComponent bind:value {...rest}>
  {text}
</MyComponent>
```

## Component Development

### Adding a New Primitive Component

1. Create the component in `/primitives/ComponentName.svelte`
2. Define types in `/primitives/ComponentNameProps.ts` (if complex)
3. Create TestWrapper in `/primitives/ComponentNameTestWrapper.svelte`
4. Create Storybook stories in `/src/stories/ComponentName.stories.svelte`
5. Add unit tests following the testing conventions
6. Export from `/index.ts`

### Styling Conventions

- Use Tailwind utility classes exclusively
- Use CSS variables from `src/app.css` for theme values
- Support light/dark mode via `[data-theme]` attributes
- Keep computed classes in `$derived()` for reactivity

### Accessibility

- All interactive components must have proper ARIA labels
- Support keyboard navigation
- Provide clear focus states
- Include helper text and error messages for form inputs

## Testing

Create unit tests for all primitive components using Vitest and @testing-library/svelte. Tests should verify:

- Rendering with default props
- All variants, sizes, and states
- Accessibility attributes
- Event handlers
- Two-way binding (for form components)

## Storybook Documentation

Each component should have comprehensive Storybook stories including:

- All variants and sizes
- Interactive states (hover, focus, disabled, loading, error)
- Accessibility notes
- Usage guidelines
- Code examples
- Controls for all props
