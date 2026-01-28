<script lang="ts">
	import Spinner from './Spinner.svelte';
	import type { SpinnerTestWrapperProps } from './SpinnerProps.ts';

	let { size, color, label, class: className }: SpinnerTestWrapperProps = $props();
</script>

<Spinner {size} {color} {label} class={className} />
