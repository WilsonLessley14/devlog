<script lang="ts">
	import type { Size } from '../tokens';
	import { classNames } from '../utils';
	import type { TagProps, TagVariant } from './TagProps.ts';

	let {
		label,
		variant = 'default',
		size = 'md',
		removable = false,
		onremove,
		onclick,
		disabled = false,
		class: className,
		children
	}: TagProps = $props();

	const baseClasses =
		'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-base';

	const variantClasses: Record<TagVariant, string> = {
		default: 'bg-surface text-text border border-border',
		primary: 'bg-brand/10 text-brand border border-brand/30',
		success: 'bg-success/10 text-success border border-success/30',
		warning: 'bg-warning/10 text-warning border border-warning/30',
		error: 'bg-error/10 text-error border border-error/30',
		info: 'bg-info/10 text-info border border-info/30'
	};

	const sizeClasses: Record<Size, string> = {
		sm: 'px-2 py-0.5 text-xs gap-1',
		md: 'px-2.5 py-0.5 text-sm gap-1.5',
		lg: 'px-3 py-1 text-base gap-2'
	};

	const interactiveClasses =
		'cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand';
	const disabledClasses = 'opacity-50 cursor-not-allowed';

	const isClickable = $derived(!!onclick && !disabled);

	const computedClasses = $derived(
		classNames(
			baseClasses,
			variantClasses[variant],
			sizeClasses[size],
			isClickable && interactiveClasses,
			disabled && disabledClasses,
			className
		)
	);

	const removeSizeClasses: Record<Size, string> = {
		sm: 'w-3 h-3',
		md: 'w-3.5 h-3.5',
		lg: 'w-4 h-4'
	};

	function handleRemove(event: MouseEvent) {
		event.stopPropagation();
		if (!disabled && onremove) {
			onremove();
		}
	}
</script>

{#if onclick}
	<button type="button" class={computedClasses} {disabled} aria-disabled={disabled} {onclick}>
		{#if children}
			{@render children()}
		{:else if label}
			{label}
		{/if}
		{#if removable}
			<span
				role="button"
				tabindex="0"
				aria-label="Remove {label}"
				class="inline-flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10"
				onclick={handleRemove}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') handleRemove(e as unknown as MouseEvent);
				}}
			>
				<svg
					class={removeSizeClasses[size]}
					viewBox="0 0 16 16"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
					/>
				</svg>
			</span>
		{/if}
	</button>
{:else}
	<span class={computedClasses} aria-disabled={disabled || undefined}>
		{#if children}
			{@render children()}
		{:else if label}
			{label}
		{/if}
		{#if removable}
			<button
				type="button"
				aria-label="Remove {label}"
				class="inline-flex items-center justify-center rounded-full hover:bg-black/10 dark:hover:bg-white/10"
				{disabled}
				onclick={handleRemove}
			>
				<svg
					class={removeSizeClasses[size]}
					viewBox="0 0 16 16"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
					/>
				</svg>
			</button>
		{/if}
	</span>
{/if}
