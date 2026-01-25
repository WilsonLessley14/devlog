<script lang="ts">
	import Button from './Button.svelte';
	import type { ButtonTestWrapperProps } from './ButtonProps.ts';

	let {
		text = 'Click me',
		variant,
		size,
		disabled,
		loading,
		type,
		ariaLabel,
		onclick
	}: ButtonTestWrapperProps = $props();
</script>

<Button {variant} {size} {disabled} {loading} {type} {ariaLabel} {onclick}>
	{text}
</Button>
