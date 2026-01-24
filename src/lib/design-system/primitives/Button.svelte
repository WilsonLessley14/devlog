<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ButtonVariant, Size } from '../tokens';
	import { classNames } from '../utils';
	import type { ButtonProps } from './ButtonProps.ts';

	let {
		variant = 'primary',
		size = 'md',
		disabled = false,
		loading = false,
		type = 'button',
		ariaLabel,
		onclick,
		children
	}: ButtonProps = $props();

	const baseClasses =
		'inline-flex items-center justify-center font-medium transition-all duration-base rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const variantClasses: Record<ButtonVariant, string> = {
		primary:
			'bg-brand text-white hover:opacity-90 focus:ring-brand active:scale-95 border border-transparent',
		secondary:
			'bg-surface text-text border border-border hover:bg-surfaceHover hover:border-borderHover focus:ring-brand active:scale-95',
		ghost:
			'bg-transparent text-text hover:bg-surface focus:ring-brand active:scale-95 border border-transparent'
	};

	const sizeClasses: Record<Size, string> = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};

	const computedClasses = $derived(
		classNames(baseClasses, variantClasses[variant], sizeClasses[size])
	);
</script>

<button
	class={computedClasses}
	{type}
	disabled={disabled || loading}
	aria-label={ariaLabel}
	aria-busy={loading}
	{onclick}
>
	{#if loading}
		<span class="mr-2" aria-hidden="true">⏳</span>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</button>
