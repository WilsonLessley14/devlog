<script lang="ts">
	import { classNames } from '../utils';
	import type { AvatarProps, AvatarSize, AvatarShape } from './AvatarProps.ts';

	let { src, alt, name, size = 'md', shape = 'circle', class: className }: AvatarProps = $props();

	let imageError = $state(false);
	let imageLoaded = $state(false);

	// Reset image state when src changes (prevents stale error/loaded from previous src)
	$effect(() => {
		void src; // track src reactively
		imageError = false;
		imageLoaded = false;
	});

	/** Derive initials from the name prop (e.g. "Wilson Lessley" -> "WL") */
	const initials = $derived.by(() => {
		if (!name) return '';
		return name
			.split(' ')
			.filter(Boolean)
			.map((part) => part[0])
			.join('')
			.toUpperCase()
			.slice(0, 2);
	});

	/** Whether to show the image (has src and no error) */
	const showImage = $derived(!!src && !imageError);

	/** Whether to show the initials fallback */
	const showInitials = $derived(!showImage && !!initials);

	/** Accessible label derived from name or alt */
	const ariaLabel = $derived(name || alt || 'Avatar');

	const sizeClasses: Record<AvatarSize, string> = {
		xs: 'w-6 h-6 text-[10px]',
		sm: 'w-8 h-8 text-xs',
		md: 'w-10 h-10 text-sm',
		lg: 'w-12 h-12 text-base',
		xl: 'w-16 h-16 text-lg'
	};

	const shapeClasses: Record<AvatarShape, string> = {
		circle: 'rounded-full',
		square: 'rounded-lg'
	};

	const containerClasses = $derived(
		classNames(
			'relative inline-flex items-center justify-center overflow-hidden bg-surface border border-border font-medium select-none shrink-0',
			sizeClasses[size],
			shapeClasses[shape],
			className
		)
	);

	function handleError() {
		imageError = true;
	}

	function handleLoad() {
		imageLoaded = true;
	}
</script>

<span class={containerClasses} role="img" aria-label={ariaLabel}>
	{#if showImage}
		{#if !imageLoaded}
			<span class="bg-border absolute inset-0 animate-pulse"></span>
		{/if}
		<img
			{src}
			alt={alt || name || ''}
			class="h-full w-full object-cover"
			onerror={handleError}
			onload={handleLoad}
		/>
	{:else if showInitials}
		<span class="text-subtext leading-none">{initials}</span>
	{:else}
		<svg
			class="text-subtext h-1/2 w-1/2"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
				clip-rule="evenodd"
			/>
		</svg>
	{/if}
</span>
