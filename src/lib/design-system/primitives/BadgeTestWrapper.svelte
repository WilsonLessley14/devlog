<script lang="ts">
	import Badge from './Badge.svelte';
	import type { BadgeTestWrapperProps } from './BadgeProps.ts';

	let { variant, size, class: className, text = 'Badge' }: BadgeTestWrapperProps = $props();
</script>

<Badge {variant} {size} class={className}>
	{text}
</Badge>
