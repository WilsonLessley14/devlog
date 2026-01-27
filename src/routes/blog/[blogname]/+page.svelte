<script lang="ts">
	import { Text, Card, Link } from '$lib/design-system';

	/**
	 * Renders HTML content of a blog post.
	 * @param {{ slug: string; html: string }} data
	 */
	let { data }: { data: { slug: string; html: string } } = $props();
</script>

<div class="space-y-6">
	<nav>
		<Link href="/blog">← All Posts</Link>
	</nav>

	<Text as="h1" variant="heading" size="3xl">{data.slug}</Text>

	<Card>
		<article class="prose prose-neutral dark:prose-invert max-w-none">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.html}
		</article>
	</Card>
</div>
