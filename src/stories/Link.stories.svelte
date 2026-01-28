<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import LinkTestWrapper from '../lib/design-system/primitives/LinkTestWrapper.svelte';

	const { Story } = defineMeta({
		title: 'Primitive/Link',
		component: LinkTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'subtle', 'muted']
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg']
			},
			underline: {
				control: { type: 'select' },
				options: ['always', 'hover', 'none']
			},
			external: {
				control: { type: 'boolean' }
			}
		},
		args: {
			href: '/example'
		}
	});
</script>

<Story
	name="Default"
	args={{ text: 'Default Link', href: '/example', ariaLabel: 'Default Link' }}
/>

<Story
	name="Subtle"
	args={{ text: 'Subtle Link', variant: 'subtle', href: '/example', ariaLabel: 'Subtle Link' }}
/>

<Story
	name="Muted"
	args={{ text: 'Muted Link', variant: 'muted', href: '/example', ariaLabel: 'Muted Link' }}
/>

<Story
	name="Small"
	args={{ text: 'Small Link', size: 'sm', href: '/example', ariaLabel: 'Small Link' }}
/>

<Story
	name="Medium"
	args={{ text: 'Medium Link', size: 'md', href: '/example', ariaLabel: 'Medium Link' }}
/>

<Story
	name="Large"
	args={{ text: 'Large Link', size: 'lg', href: '/example', ariaLabel: 'Large Link' }}
/>

<Story
	name="Always Underlined"
	args={{
		text: 'Always Underlined',
		underline: 'always',
		href: '/example',
		ariaLabel: 'Always Underlined Link'
	}}
/>

<Story
	name="No Underline"
	args={{
		text: 'No Underline',
		underline: 'none',
		href: '/example',
		ariaLabel: 'No Underline Link'
	}}
/>

<Story
	name="External"
	args={{
		text: 'External Link',
		external: true,
		href: 'https://example.com',
		ariaLabel: 'External Link'
	}}
/>
