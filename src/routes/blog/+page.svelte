<script lang="ts">
	import { Text, Card, Link } from '$lib/design-system';

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
		<div class="space-y-4">
			{#each data.posts as post (post)}
				<Card>
					<Link href={`/blog/${post}`}>{post}</Link>
				</Card>
			{/each}
		</div>
	{/if}
</div>
