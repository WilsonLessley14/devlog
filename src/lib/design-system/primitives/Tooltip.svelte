<script lang="ts">
	import { onDestroy } from 'svelte';
	import { classNames } from '../utils';
	import type { TooltipProps, TooltipPosition } from './TooltipProps.ts';

	let {
		text,
		position = 'top',
		showDelay = 200,
		hideDelay = 0,
		class: className,
		children
	}: TooltipProps = $props();

	let visible = $state(false);
	let showTimeout: ReturnType<typeof setTimeout> | undefined;
	let hideTimeout: ReturnType<typeof setTimeout> | undefined;

	const tooltipId = `tooltip-${Math.random().toString(36).slice(2, 9)}`;

	function show() {
		clearTimeout(hideTimeout);
		showTimeout = setTimeout(() => {
			visible = true;
		}, showDelay);
	}

	function hide() {
		clearTimeout(showTimeout);
		hideTimeout = setTimeout(() => {
			visible = false;
		}, hideDelay);
	}

	onDestroy(() => {
		clearTimeout(showTimeout);
		clearTimeout(hideTimeout);
	});

	const positionClasses: Record<TooltipPosition, string> = {
		top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
		bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
		left: 'right-full top-1/2 -translate-y-1/2 mr-2',
		right: 'left-full top-1/2 -translate-y-1/2 ml-2'
	};

	const arrowClasses: Record<TooltipPosition, string> = {
		top: 'top-full left-1/2 -translate-x-1/2 border-t-gray-900 dark:border-t-gray-100 border-x-transparent border-b-transparent',
		bottom:
			'bottom-full left-1/2 -translate-x-1/2 border-b-gray-900 dark:border-b-gray-100 border-x-transparent border-t-transparent',
		left: 'left-full top-1/2 -translate-y-1/2 border-l-gray-900 dark:border-l-gray-100 border-y-transparent border-r-transparent',
		right:
			'right-full top-1/2 -translate-y-1/2 border-r-gray-900 dark:border-r-gray-100 border-y-transparent border-l-transparent'
	};

	const baseTooltipClasses =
		'absolute z-50 whitespace-nowrap rounded px-2 py-1 text-xs font-medium bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 pointer-events-none';

	const animationClasses = $derived(visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95');

	const computedTooltipClasses = $derived(
		classNames(
			baseTooltipClasses,
			positionClasses[position],
			'transition-all duration-150 motion-reduce:transition-none',
			animationClasses,
			className
		)
	);

	const computedArrowClasses = $derived(classNames('absolute border-4', arrowClasses[position]));
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="relative inline-flex"
	onmouseenter={show}
	onmouseleave={hide}
	onfocusin={show}
	onfocusout={hide}
>
	{#if children}
		<div aria-describedby={visible ? tooltipId : undefined}>
			{@render children()}
		</div>
	{/if}

	<div id={tooltipId} role="tooltip" class={computedTooltipClasses} aria-hidden={!visible}>
		{text}
		<span class={computedArrowClasses}></span>
	</div>
</div>
