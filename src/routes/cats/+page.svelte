<script lang="ts">
	import { Image } from '$lib/design-system';

	// Use import.meta.glob to import all images from src/lib/assets
	const imageModules = import.meta.glob(
		'/src/lib/assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{ eager: true }
	);
	// Convert to array of { src, name }
	/* eslint-disable @typescript-eslint/no-explicit-any */
	const images = Object.entries(imageModules).map(([path, module]) => ({
		src: (module as any).default,
		name: path.split('/').pop() ?? 'Cat image'
	}));
	/* eslint-enable @typescript-eslint/no-explicit-any */
</script>

<svelte:head>
	<title>Cat Gallery</title>
</svelte:head>

<h1>Cat Gallery</h1>

{#if images.length === 0}
	<p>No cats found.</p>
{:else}
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
		{#each images as image (image.name)}
			<Image src={image.src} alt={image.name} aspectRatio="square" rounded="md" shadow hoverScale />
		{/each}
	</div>
{/if}
