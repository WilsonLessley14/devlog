<script lang="ts">
	import { classNames } from '../utils';
	import type { IconProps, IconSize, IconColor } from './IconProps.ts';

	let { size = 'md', color = 'current', label, class: className, children }: IconProps = $props();

	const sizeClasses: Record<IconSize, string> = {
		xs: 'h-3 w-3',
		sm: 'h-4 w-4',
		md: 'h-5 w-5',
		lg: 'h-6 w-6',
		xl: 'h-8 w-8'
	};

	const colorClasses: Record<IconColor, string> = {
		current: 'text-current',
		primary: 'text-brand',
		secondary: 'text-text',
		muted: 'text-subtext',
		success: 'text-success',
		warning: 'text-warning',
		error: 'text-error'
	};

	const baseClasses = 'inline-flex items-center justify-center shrink-0';

	const computedClasses = $derived(
		classNames(baseClasses, sizeClasses[size], colorClasses[color], className)
	);

	// Accessibility: if label is provided, it's a meaningful icon; otherwise decorative
	const isDecorative = $derived(!label);
</script>

{#if isDecorative}
	<span class={computedClasses} aria-hidden="true">
		{#if children}
			{@render children()}
		{/if}
	</span>
{:else}
	<span class={computedClasses} role="img" aria-label={label}>
		{#if children}
			{@render children()}
		{/if}
	</span>
{/if}
