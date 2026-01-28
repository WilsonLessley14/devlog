<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import IconTestWrapper from '../lib/design-system/primitives/IconTestWrapper.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Primitive/Icon',
		component: IconTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: { type: 'select' },
				options: ['xs', 'sm', 'md', 'lg', 'xl']
			},
			color: {
				control: { type: 'select' },
				options: ['current', 'primary', 'secondary', 'muted', 'success', 'warning', 'error']
			},
			label: {
				control: { type: 'text' }
			},
			showIcon: {
				control: { type: 'boolean' }
			}
		}
	});
</script>

<!-- Default -->
<Story name="Default" args={{ showIcon: true }} />

<!-- Sizes -->
<Story name="Extra Small" args={{ size: 'xs', showIcon: true }} />

<Story name="Small" args={{ size: 'sm', showIcon: true }} />

<Story name="Medium" args={{ size: 'md', showIcon: true }} />

<Story name="Large" args={{ size: 'lg', showIcon: true }} />

<Story name="Extra Large" args={{ size: 'xl', showIcon: true }} />

<!-- Colors -->
<Story name="Current Color" args={{ color: 'current', showIcon: true }} />

<Story name="Primary" args={{ color: 'primary', showIcon: true }} />

<Story name="Secondary" args={{ color: 'secondary', showIcon: true }} />

<Story name="Muted" args={{ color: 'muted', showIcon: true }} />

<Story name="Success" args={{ color: 'success', showIcon: true }} />

<Story name="Warning" args={{ color: 'warning', showIcon: true }} />

<Story name="Error" args={{ color: 'error', showIcon: true }} />

<!-- Accessibility -->
<Story name="Decorative (No Label)" args={{ showIcon: true }} />

<Story name="With Label (Accessible)" args={{ label: 'Favorite', showIcon: true }} />

<!-- Combinations -->
<Story name="Large Primary" args={{ size: 'lg', color: 'primary', showIcon: true }} />

<Story
	name="Small Success with Label"
	args={{ size: 'sm', color: 'success', label: 'Success indicator', showIcon: true }}
/>

<Story name="XL Error" args={{ size: 'xl', color: 'error', showIcon: true }} />
