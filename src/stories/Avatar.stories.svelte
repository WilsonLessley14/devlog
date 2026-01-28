<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import AvatarTestWrapper from '../lib/design-system/primitives/AvatarTestWrapper.svelte';

	const { Story } = defineMeta({
		title: 'Primitive/Avatar',
		component: AvatarTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			size: {
				control: { type: 'select' },
				options: ['xs', 'sm', 'md', 'lg', 'xl']
			},
			shape: {
				control: { type: 'select' },
				options: ['circle', 'square']
			},
			src: {
				control: { type: 'text' }
			},
			alt: {
				control: { type: 'text' }
			},
			name: {
				control: { type: 'text' }
			}
		}
	});
</script>

<Story
	name="With Image"
	args={{
		src: 'https://placecats.com/200/200',
		alt: 'User avatar',
		name: 'Wilson Lessley'
	}}
/>

<Story
	name="Initials Fallback"
	args={{
		name: 'Wilson Lessley'
	}}
/>

<Story
	name="Single Name"
	args={{
		name: 'Wilson'
	}}
/>

<Story name="No Name or Image" args={{}} />

<Story
	name="Circle (Default)"
	args={{
		name: 'Wilson Lessley',
		shape: 'circle'
	}}
/>

<Story
	name="Square"
	args={{
		name: 'Wilson Lessley',
		shape: 'square'
	}}
/>

<Story
	name="Extra Small"
	args={{
		name: 'Wilson Lessley',
		size: 'xs'
	}}
/>

<Story
	name="Small"
	args={{
		name: 'Wilson Lessley',
		size: 'sm'
	}}
/>

<Story
	name="Medium (Default)"
	args={{
		name: 'Wilson Lessley',
		size: 'md'
	}}
/>

<Story
	name="Large"
	args={{
		name: 'Wilson Lessley',
		size: 'lg'
	}}
/>

<Story
	name="Extra Large"
	args={{
		name: 'Wilson Lessley',
		size: 'xl'
	}}
/>

<Story
	name="Image with Square Shape"
	args={{
		src: 'https://placecats.com/200/200',
		alt: 'Square avatar',
		name: 'Wilson Lessley',
		shape: 'square'
	}}
/>

<Story
	name="Broken Image (Error Fallback)"
	args={{
		src: 'https://invalid-url.example/nonexistent.jpg',
		name: 'Wilson Lessley'
	}}
/>
