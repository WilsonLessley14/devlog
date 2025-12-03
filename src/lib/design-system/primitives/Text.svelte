<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { TextElement, TextVariant, TextAlign, ColorToken } from '../tokens';
	import { classNames } from '../utils';

	interface Props {
		as?: TextElement;
		variant?: TextVariant;
		size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
		weight?: 'normal' | 'medium' | 'semibold' | 'bold';
		align?: TextAlign;
		color?: ColorToken;
		italic?: boolean;
		truncate?: boolean;
		children?: Snippet;
		class?: string;
	}

	let {
		as,
		variant = 'body',
		size,
		weight,
		align = 'left',
		color = 'text',
		italic = false,
		truncate = false,
		children,
		class: className
	}: Props = $props();

	// Variant-based defaults
	const variantDefaults: Record<
		TextVariant,
		{ size: string; weight: string; element: TextElement }
	> = {
		heading: { size: 'text-2xl', weight: 'font-bold', element: 'h2' },
		body: { size: 'text-base', weight: 'font-normal', element: 'p' },
		caption: { size: 'text-sm', weight: 'font-normal', element: 'span' },
		label: { size: 'text-sm', weight: 'font-medium', element: 'label' }
	};

	const defaults = variantDefaults[variant];

	// Compute effective values - use variant's default element if 'as' is not specified
	const effectiveElement = $derived(as ?? defaults.element);
	const effectiveSize = $derived(size ? `text-${size}` : defaults.size);
	const effectiveWeight = $derived(weight ? `font-${weight}` : defaults.weight);

	const baseClasses = 'transition-colors duration-base';

	const alignClasses: Record<TextAlign, string> = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right'
	};

	const colorClass = $derived(`text-${color}`);
	const italicClass = $derived(italic ? 'italic' : '');
	const truncateClass = $derived(truncate ? 'truncate' : '');

	const computedClasses = $derived(
		classNames(
			baseClasses,
			effectiveSize,
			effectiveWeight,
			alignClasses[align],
			colorClass,
			italicClass,
			truncateClass,
			className
		)
	);
</script>

<svelte:element this={effectiveElement} class={computedClasses}>
	{#if children}
		{@render children()}
	{/if}
</svelte:element>
