<script lang="ts">
	import type { Size } from '../tokens';
	import { classNames } from '../utils';
	import type { BadgeProps, BadgeVariant } from './BadgeProps.ts';

	let { variant = 'default', size = 'md', class: className, children }: BadgeProps = $props();

	const baseClasses =
		'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-base';

	const variantClasses: Record<BadgeVariant, string> = {
		default: 'bg-surface text-text border border-border',
		success: 'bg-success/10 text-success border border-success/30',
		warning: 'bg-warning/10 text-warning border border-warning/30',
		error: 'bg-error/10 text-error border border-error/30'
	};

	const sizeClasses: Record<Size, string> = {
		sm: 'px-2 py-0.5 text-xs',
		md: 'px-2.5 py-0.5 text-sm',
		lg: 'px-3 py-1 text-base'
	};

	const computedClasses = $derived(
		classNames(baseClasses, variantClasses[variant], sizeClasses[size], className)
	);
</script>

<span class={computedClasses}>
	{#if children}
		{@render children()}
	{/if}
</span>
