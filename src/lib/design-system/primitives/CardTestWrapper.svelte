<script lang="ts">
	import Card from './Card.svelte';
	import Text from './Text.svelte';
	import type { CardTestWrapperProps } from './CardProps.ts';

	let {
		variant = 'content',
		class: className,
		text = 'Card content',
		titleText
	}: CardTestWrapperProps = $props();
</script>

<Card {variant} class={className}>
	{#snippet title()}
		{#if titleText && variant === 'content'}
			<Text as="h3" variant="heading" size="lg">{titleText}</Text>
		{/if}
	{/snippet}
	{text}
</Card>
