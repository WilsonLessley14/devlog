<script lang="ts">
	import type { ImageProps, AspectRatio, ObjectFit, ImageRounded } from './ImageProps';
	import { classNames } from '../utils';

	let {
		src,
		alt,
		aspectRatio = 'auto',
		fit = 'cover',
		rounded = 'none',
		loading = 'lazy',
		hoverScale = false,
		shadow = false,
		class: className
	}: ImageProps = $props();

	const aspectRatioClasses: Record<AspectRatio, string> = {
		square: 'aspect-square',
		video: 'aspect-video',
		portrait: 'aspect-[3/4]',
		wide: 'aspect-[2/1]',
		auto: ''
	};

	const fitClasses: Record<ObjectFit, string> = {
		cover: 'object-cover',
		contain: 'object-contain',
		fill: 'object-fill',
		none: 'object-none'
	};

	const roundedClasses: Record<ImageRounded, string> = {
		none: 'rounded-none',
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		full: 'rounded-full'
	};

	// Wrapper classes for container (handles shadow, overflow for hover scale, aspect ratio)
	const wrapperClasses = $derived(
		classNames(
			'block overflow-hidden',
			aspectRatioClasses[aspectRatio],
			roundedClasses[rounded],
			shadow ? 'shadow-md' : '',
			className
		)
	);

	// Image classes (handles fit and hover effect)
	const imgClasses = $derived(
		classNames(
			'block w-full h-full',
			fitClasses[fit],
			hoverScale ? 'transition-transform duration-200 hover:scale-105' : ''
		)
	);
</script>

<div class={wrapperClasses}>
	<img {src} {alt} {loading} class={imgClasses} />
</div>
