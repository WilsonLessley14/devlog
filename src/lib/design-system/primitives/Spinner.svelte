<script lang="ts">
	import type { Size, ColorToken } from '../tokens';
	import { classNames } from '../utils';
	import type { SpinnerProps } from './SpinnerProps.ts';

	let {
		size = 'md',
		color = 'brand',
		label = 'Loading',
		class: className
	}: SpinnerProps = $props();

	const sizeClasses: Record<Size, string> = {
		sm: 'h-4 w-4 border-2',
		md: 'h-8 w-8 border-3',
		lg: 'h-12 w-12 border-4'
	};

	const colorClasses: Record<ColorToken, string> = {
		text: 'border-text',
		subtext: 'border-subtext',
		brand: 'border-brand',
		success: 'border-success',
		error: 'border-error',
		warning: 'border-warning',
		info: 'border-info',
		bg: 'border-bg',
		surface: 'border-surface'
	};

	const baseClasses = 'inline-block rounded-full border-solid animate-spin';
	const transparentBorderClasses = 'border-t-transparent border-r-transparent';

	const computedClasses = $derived(
		classNames(
			baseClasses,
			sizeClasses[size],
			colorClasses[color],
			transparentBorderClasses,
			className
		)
	);
</script>

<span class={computedClasses} role="status" aria-label={label}>
	<span class="sr-only">{label}</span>
</span>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
