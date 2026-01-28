<script lang="ts">
	import type { Size } from '../tokens';
	import type { LinkProps, LinkVariant } from './LinkProps';
	import { classNames } from '../utils';

	let {
		href,
		variant = 'default',
		size = 'md',
		external = false,
		underline = 'hover',
		ariaLabel,
		children,
		class: className
	}: LinkProps = $props();

	const baseClasses =
		'inline-flex items-center transition-colors duration-base rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand';

	const variantClasses: Record<LinkVariant, string> = {
		default: '!text-link hover:!text-hover-link',
		subtle: '!text-text hover:!text-link',
		muted: '!text-subtext hover:!text-text'
	};

	const sizeClasses: Record<Size, string> = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg'
	};

	const underlineClasses: Record<'always' | 'hover' | 'none', string> = {
		always: '!underline',
		hover: 'no-underline hover:!underline',
		none: '!no-underline hover:!no-underline'
	};

	const computedClasses = $derived(
		classNames(
			baseClasses,
			variantClasses[variant],
			sizeClasses[size],
			underlineClasses[underline],
			className
		)
	);

	const externalProps = $derived(external ? { target: '_blank', rel: 'noopener noreferrer' } : {});
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a {href} class={computedClasses} aria-label={ariaLabel} {...externalProps}>
	{#if children}
		{@render children()}
	{/if}
	{#if external}
		<span class="ml-1" aria-hidden="true">↗</span>
	{/if}
</a>
<!-- eslint-enable svelte/no-navigation-without-resolve -->
