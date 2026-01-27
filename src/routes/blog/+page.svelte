<script lang="ts">
	import { Text, Card } from '$lib/design-system';

	/**
	 * Renders a list of blog post filenames.
	 * @param {string[]} posts - The list of blog post filenames.
	 */
	let { data }: { data: { posts: string[] } } = $props();
</script>

<div class="space-y-6">
	<Text as="h1" variant="heading" size="3xl">Blog Posts</Text>

	{#if data.posts.length === 0}
		<Text variant="body" color="subtext">No blog posts found.</Text>
	{:else}
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		<div class="space-y-4">
			{#each data.posts as post (post)}
				<Card>
					<a href={`/blog/${post}`} class="text-brand hover:underline">
						<Text as="span" variant="body" color="brand">{post}</Text>
					</a>
				</Card>
			{/each}
		</div>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	{/if}
</div>
