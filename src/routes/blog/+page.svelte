<script lang="ts">
	/**
	 * Renders a list of blog post filenames.
	 * @param {string[]} posts - The list of blog post filenames.
	 */
	export let data: { posts: string[] };
</script>

<h1>Blog Posts</h1>
{#if data.posts.length === 0}
	<p>No blog posts found.</p>
{:else}
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<ul>
		{#each data.posts as post (post)}
			<li><a href={`/blog/${post}`}>{post}</a></li>
		{/each}
	</ul>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
{/if}
