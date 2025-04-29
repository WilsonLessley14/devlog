<script lang="ts">
	// Use import.meta.glob to import all images from src/lib/assets
	const imageModules = import.meta.glob(
		'/src/lib/assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{ eager: true }
	);
	// Convert to array of { src, name }
	const images = Object.entries(imageModules).map(([path, module]) => ({
		src: (module as any).default,
		name: path.split('/').pop()
	}));
</script>

<svelte:head>
	<title>Cat Gallery</title>
</svelte:head>

<h1>Cat Gallery</h1>

{#if images.length === 0}
	<p>No cats found.</p>
{:else}
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
		{#each images as image}
			<div class="aspect-w-1 aspect-h-1 overflow-hidden rounded shadow">
				<img
					src={image.src}
					alt={image.name}
					class="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
					loading="lazy"
				/>
			</div>
		{/each}
	</div>
{/if}

<style>
	.aspect-w-1 {
		aspect-ratio: 1 / 1;
	}
</style>
