<script lang="ts">
	import { Text, Card } from '@wl/frontend-system';

	/**
	 * Renders HTML content of a blog post.
	 * @param {{ slug: string; html: string }} data
	 */
	let { data }: { data: { slug: string; html: string } } = $props();
</script>

<div class="space-y-6">
	<!-- eslint-disable svelte/no-navigation-without-resolve -->
	<nav>
		<a href="/blog" class="hover:underline">
			<Text as="span" variant="body" tone="accent">← All Posts</Text>
		</a>
	</nav>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->

	<Text as="h1" variant="heading" size="3xl">{data.slug}</Text>

	<Card.Root>
		<Card.Content>
			<article class="prose prose-neutral dark:prose-invert max-w-none">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html data.html}
			</article>
		</Card.Content>
	</Card.Root>
</div>
