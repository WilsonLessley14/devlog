<script lang="ts">
	import type { CardVariant } from '../tokens';
	import { classNames } from '../utils';
	import type { CardProps } from './CardProps.ts';

	let { variant = 'content', class: className, children, title }: CardProps = $props();

	const baseClasses = 'border-border border';

	const variantClasses: Record<CardVariant, string> = {
		content: 'bg-surface rounded-lg p-6',
		code: 'bg-surface rounded-md p-4'
	};

	const computedClasses = $derived(classNames(baseClasses, variantClasses[variant], className));
</script>

{#if variant === 'content'}
	<div class={computedClasses}>
		{#if title}
			<div class="mb-3">
				{@render title()}
			</div>
		{/if}
		{#if children}
			{@render children()}
		{/if}
	</div>
{:else}
	<div class={computedClasses}>
		{#if children}
			<code class="text-subtext font-mono text-sm">
				{@render children()}
			</code>
		{/if}
	</div>
{/if}
