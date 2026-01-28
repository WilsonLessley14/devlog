<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import BadgeTestWrapper from '../lib/design-system/primitives/BadgeTestWrapper.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Primitive/Badge',
		component: BadgeTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'success', 'warning', 'error']
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg']
			},
			text: {
				control: { type: 'text' }
			}
		}
	});
</script>

<Story name="Default" args={{ text: 'Badge' }} />

<Story name="Success" args={{ variant: 'success', text: 'Success' }} />

<Story name="Warning" args={{ variant: 'warning', text: 'Warning' }} />

<Story name="Error" args={{ variant: 'error', text: 'Error' }} />

<Story name="Small" args={{ size: 'sm', text: 'Small' }} />

<Story name="Medium" args={{ size: 'md', text: 'Medium' }} />

<Story name="Large" args={{ size: 'lg', text: 'Large' }} />

<Story name="Blog Tag" args={{ text: 'TypeScript' }} />

<Story name="Skill Label" args={{ variant: 'success', text: 'JavaScript' }} />

<Story name="Status Active" args={{ variant: 'success', text: 'Active' }} />

<Story name="Status Pending" args={{ variant: 'warning', text: 'Pending' }} />

<Story name="Status Failed" args={{ variant: 'error', text: 'Failed' }} />
