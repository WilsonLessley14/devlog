<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ButtonTestWrapper from '../lib/design-system/primitives/ButtonTestWrapper.svelte';
	import { fn } from '@storybook/test';

	// Button component with variants, sizes, and states. Includes loading and disabled states.
	// Accessibility: Uses semantic button element, aria-label support, aria-busy for loading state.
	// Variants: primary (high emphasis), secondary (medium emphasis), ghost (low emphasis).

	const { Story } = defineMeta({
		title: 'Primitive/Button',
		component: ButtonTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['primary', 'secondary', 'ghost'],
				description: 'The visual style variant',
				table: {
					type: { summary: 'ButtonVariant' },
					defaultValue: { summary: 'primary' }
				}
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg'],
				description: 'The size of the button',
				table: {
					type: { summary: 'Size' },
					defaultValue: { summary: 'md' }
				}
			},
			type: {
				control: { type: 'select' },
				options: ['button', 'submit', 'reset'],
				description: 'The HTML button type',
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'button' }
				}
			},
			disabled: {
				control: 'boolean',
				description: 'Whether the button is disabled',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'false' }
				}
			},
			loading: {
				control: 'boolean',
				description: 'Whether the button is in loading state',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'false' }
				}
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

<!-- Variant Examples -->
<Story
	name="Primary"
	args={{
		text: 'Primary Button',
		variant: 'primary',
		ariaLabel: 'Primary action button'
	}}
/>

<Story
	name="Secondary"
	args={{
		text: 'Secondary Button',
		variant: 'secondary',
		ariaLabel: 'Secondary action button'
	}}
/>

<Story
	name="Ghost"
	args={{
		text: 'Ghost Button',
		variant: 'ghost',
		ariaLabel: 'Tertiary action button'
	}}
/>

<!-- Size Examples -->
<Story
	name="Small"
	args={{
		text: 'Small Button',
		size: 'sm',
		ariaLabel: 'Small button'
	}}
/>

<Story
	name="Medium"
	args={{
		text: 'Medium Button',
		size: 'md',
		ariaLabel: 'Medium button (default)'
	}}
/>

<Story
	name="Large"
	args={{
		text: 'Large Button',
		size: 'lg',
		ariaLabel: 'Large button'
	}}
/>

<!-- State Examples -->
<Story
	name="Loading"
	args={{
		text: 'Loading...',
		loading: true,
		ariaLabel: 'Button in loading state'
	}}
/>

<Story
	name="Disabled"
	args={{
		text: 'Disabled',
		disabled: true,
		ariaLabel: 'Disabled button'
	}}
/>

<!-- Button Types -->
<Story
	name="Submit Type"
	args={{
		text: 'Submit Form',
		type: 'submit',
		variant: 'primary',
		ariaLabel: 'Submit form button'
	}}
/>

<Story
	name="Reset Type"
	args={{
		text: 'Reset Form',
		type: 'reset',
		variant: 'secondary',
		ariaLabel: 'Reset form button'
	}}
/>

<!-- Combined Examples -->
<Story
	name="Large Primary"
	args={{
		text: 'Get Started',
		variant: 'primary',
		size: 'lg',
		ariaLabel: 'Get started with application'
	}}
/>

<Story
	name="Small Ghost"
	args={{
		text: 'Cancel',
		variant: 'ghost',
		size: 'sm',
		ariaLabel: 'Cancel action'
	}}
/>

<Story
	name="Loading Primary"
	args={{
		text: 'Submitting...',
		variant: 'primary',
		loading: true,
		ariaLabel: 'Submitting form'
	}}
/>

<Story
	name="Disabled Secondary"
	args={{
		text: 'Unavailable',
		variant: 'secondary',
		disabled: true,
		ariaLabel: 'Unavailable action'
	}}
/>
