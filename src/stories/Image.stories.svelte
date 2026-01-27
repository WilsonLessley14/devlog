<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ImageTestWrapper from '../lib/design-system/primitives/ImageTestWrapper.svelte';

	const { Story } = defineMeta({
		title: 'Primitive/Image',
		component: ImageTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			aspectRatio: {
				control: { type: 'select' },
				options: ['auto', 'square', 'video', 'portrait', 'wide']
			},
			fit: {
				control: { type: 'select' },
				options: ['cover', 'contain', 'fill', 'none']
			},
			rounded: {
				control: { type: 'select' },
				options: ['none', 'sm', 'md', 'lg', 'full']
			},
			loading: {
				control: { type: 'select' },
				options: ['lazy', 'eager']
			},
			hoverScale: {
				control: { type: 'boolean' }
			},
			shadow: {
				control: { type: 'boolean' }
			}
		},
		args: {
			src: 'https://placecats.com/300/300',
			alt: 'Sample image'
		}
	});
</script>

<Story
	name="Default"
	args={{
		src: 'https://placecats.com/300/300',
		alt: 'Default image'
	}}
/>

<Story
	name="Square"
	args={{
		src: 'https://placecats.com/300/300',
		alt: 'Square image',
		aspectRatio: 'square'
	}}
/>

<Story
	name="Video (16:9)"
	args={{
		src: 'https://placecats.com/400/225',
		alt: 'Video aspect ratio image',
		aspectRatio: 'video'
	}}
/>

<Story
	name="Portrait"
	args={{
		src: 'https://placecats.com/300/400',
		alt: 'Portrait image',
		aspectRatio: 'portrait'
	}}
/>

<Story
	name="Wide"
	args={{
		src: 'https://placecats.com/400/200',
		alt: 'Wide image',
		aspectRatio: 'wide'
	}}
/>

<Story
	name="Rounded Medium"
	args={{
		src: 'https://placecats.com/300/300',
		alt: 'Rounded image',
		rounded: 'md',
		aspectRatio: 'square'
	}}
/>

<Story
	name="Rounded Full (Circle)"
	args={{
		src: 'https://placecats.com/300/300',
		alt: 'Circle image',
		rounded: 'full',
		aspectRatio: 'square'
	}}
/>

<Story
	name="With Hover Scale"
	args={{
		src: 'https://placecats.com/300/300',
		alt: 'Hover scale image',
		hoverScale: true,
		aspectRatio: 'square'
	}}
/>

<Story
	name="With Shadow"
	args={{
		src: 'https://placecats.com/300/300',
		alt: 'Shadow image',
		shadow: true,
		rounded: 'md',
		aspectRatio: 'square'
	}}
/>

<Story
	name="Object Contain"
	args={{
		src: 'https://placecats.com/400/200',
		alt: 'Contain fit image',
		fit: 'contain',
		aspectRatio: 'square'
	}}
/>

<Story
	name="Gallery Card"
	args={{
		src: 'https://placecats.com/300/300',
		alt: 'Gallery card style image',
		aspectRatio: 'square',
		rounded: 'lg',
		shadow: true,
		hoverScale: true
	}}
/>
