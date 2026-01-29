<script lang="ts">
	import Tag from './Tag.svelte';
	import type { TagTestWrapperProps } from './TagProps.ts';

	let {
		text = 'Tag',
		label,
		variant,
		size,
		removable,
		onremove,
		onclick,
		disabled,
		class: className
	}: TagTestWrapperProps = $props();
</script>

<Tag
	label={label ?? text}
	{variant}
	{size}
	{removable}
	{onremove}
	{onclick}
	{disabled}
	class={className}
/>
