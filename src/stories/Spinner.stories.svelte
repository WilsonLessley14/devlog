<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SpinnerTestWrapper from '../lib/design-system/primitives/SpinnerTestWrapper.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Primitive/Spinner',
		component: SpinnerTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg']
			},
			color: {
				control: { type: 'select' },
				options: ['text', 'subtext', 'brand', 'success', 'error', 'warning', 'info']
			},
			label: {
				control: { type: 'text' }
			}
		}
	});
</script>

<Story name="Default" args={{ label: 'Loading' }} />

<Story name="Small" args={{ size: 'sm', label: 'Loading' }} />

<Story name="Medium" args={{ size: 'md', label: 'Loading' }} />

<Story name="Large" args={{ size: 'lg', label: 'Loading' }} />

<Story name="Brand Color" args={{ color: 'brand', label: 'Loading' }} />

<Story name="Success Color" args={{ color: 'success', label: 'Processing' }} />

<Story name="Error Color" args={{ color: 'error', label: 'Error occurred' }} />

<Story name="Warning Color" args={{ color: 'warning', label: 'Please wait' }} />

<Story name="Info Color" args={{ color: 'info', label: 'Fetching data' }} />

<Story name="Text Color" args={{ color: 'text', label: 'Loading content' }} />

<Story name="Custom Label" args={{ label: 'Loading contributions...' }} />
