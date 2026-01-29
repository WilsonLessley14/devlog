<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TagTestWrapper from '../lib/design-system/primitives/TagTestWrapper.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Primitive/Tag',
		component: TagTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'primary', 'success', 'warning', 'error', 'info']
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg']
			},
			text: {
				control: { type: 'text' }
			},
			removable: {
				control: { type: 'boolean' }
			},
			disabled: {
				control: { type: 'boolean' }
			}
		}
	});
</script>

<Story name="Default" args={{ text: 'Tag' }} />

<Story name="Primary" args={{ variant: 'primary', text: 'Primary' }} />

<Story name="Success" args={{ variant: 'success', text: 'Success' }} />

<Story name="Warning" args={{ variant: 'warning', text: 'Warning' }} />

<Story name="Error" args={{ variant: 'error', text: 'Error' }} />

<Story name="Info" args={{ variant: 'info', text: 'Info' }} />

<Story name="Small" args={{ size: 'sm', text: 'Small' }} />

<Story name="Medium" args={{ size: 'md', text: 'Medium' }} />

<Story name="Large" args={{ size: 'lg', text: 'Large' }} />

<Story name="Removable" args={{ removable: true, text: 'Removable' }} />

<Story name="Disabled" args={{ disabled: true, text: 'Disabled' }} />

<Story name="Removable Disabled" args={{ removable: true, disabled: true, text: 'Disabled' }} />

<Story name="Category Tag" args={{ text: 'TypeScript' }} />

<Story name="Status Active" args={{ variant: 'success', text: 'Active' }} />

<Story name="Status Pending" args={{ variant: 'warning', text: 'Pending' }} />

<Story name="Status Failed" args={{ variant: 'error', text: 'Failed' }} />

<Story name="Info Label" args={{ variant: 'info', text: 'New' }} />
