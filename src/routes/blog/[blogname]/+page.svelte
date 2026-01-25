<script lang="ts">
	/**
	 * Renders HTML content of a blog post.
	 * @param {{ slug: string; html: string }} data
	 */
	export let data: { slug: string; html: string };
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<nav><a href="/blog">← All Posts</a></nav>
<h1>{data.slug}</h1>
<article>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html data.html}
</article>
