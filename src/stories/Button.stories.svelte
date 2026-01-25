<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ButtonTestWrapper from '../lib/design-system/primitives/ButtonTestWrapper.svelte';
	import { fn } from '@storybook/test';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Primitive/Button',
		component: ButtonTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['primary', 'secondary', 'ghost']
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg']
			}
		},
		args: {
			onclick: fn()
		}
	});
</script>

<Story
	name="Primary"
	args={{ text: 'Primary Button', variant: 'primary', ariaLabel: 'Primary Button' }}
/>

<Story
	name="Secondary"
	args={{ text: 'Secondary Button', variant: 'secondary', ariaLabel: 'Secondary Button' }}
/>

<Story name="Ghost" args={{ text: 'Ghost Button', variant: 'ghost', ariaLabel: 'Ghost Button' }} />

<Story name="Large" args={{ text: 'Large Button', size: 'lg', ariaLabel: 'Large Button' }} />

<Story name="Medium" args={{ text: 'Medium Button', size: 'md', ariaLabel: 'Medium Button' }} />

<Story name="Small" args={{ text: 'Small Button', size: 'sm', ariaLabel: 'Small Button' }} />

<Story name="Loading" args={{ text: 'Loading...', loading: true, ariaLabel: 'Loading Button' }} />

<Story name="Disabled" args={{ text: 'Disabled', disabled: true, ariaLabel: 'Disabled Button' }} />
