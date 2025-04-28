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
	<ul>
		{#each data.posts as post}
			<li>{post}</li>
		{/each}
	</ul>
{/if}
