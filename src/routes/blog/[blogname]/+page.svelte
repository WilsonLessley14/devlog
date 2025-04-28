<script lang="ts">
	/**
	 * Renders HTML content of a blog post.
	 * @param {{ slug: string; html: string }} data
	 */
	export let data: { slug: string; html: string };
</script>

<h1>{data.slug}</h1>
<article>
	{@html data.html}
</article>
