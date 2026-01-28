<script lang="ts">
	import Tooltip from './Tooltip.svelte';
	import type { TooltipTestWrapperProps } from './TooltipProps.ts';

	let {
		text = 'Tooltip text',
		position,
		showDelay,
		hideDelay,
		class: className,
		triggerText = 'Hover me'
	}: TooltipTestWrapperProps = $props();
</script>

<Tooltip {text} {position} {showDelay} {hideDelay} class={className}>
	<button type="button">{triggerText}</button>
</Tooltip>
