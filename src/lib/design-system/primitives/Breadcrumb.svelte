<script lang="ts">
	import { page } from '$app/stores';
	import type { BreadcrumbItem, BreadcrumbProps } from './BreadcrumbProps';
	import { classNames } from '../utils';
	import Text from './Text.svelte';

	let {
		items,
		size = 'sm',
		separator = '/',
		showHome = true,
		homeLabel = 'Home',
		class: className
	}: BreadcrumbProps = $props();

	function formatLabel(segment: string): string {
		return segment
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	function generateItemsFromPath(pathname: string): BreadcrumbItem[] {
		const segments = pathname.split('/').filter(Boolean);
		const result: BreadcrumbItem[] = [];

		if (showHome) {
			result.push({ label: homeLabel, href: '/' });
		}

		let currentPath = '';
		for (const segment of segments) {
			currentPath += `/${segment}`;
			result.push({
				label: formatLabel(segment),
				href: currentPath
			});
		}

		return result;
	}

	const breadcrumbItems = $derived(items ?? generateItemsFromPath($page.url.pathname));

	const isHome = $derived($page.url.pathname === '/');

	const sizeClasses: Record<string, string> = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg'
	};

	// Map Size token to Text component's size prop
	const textSizeMap: Record<string, 'sm' | 'base' | 'lg'> = {
		sm: 'sm',
		md: 'base',
		lg: 'lg'
	};

	const textSize = $derived(textSizeMap[size]);

	const navClasses = $derived(
		classNames('flex items-center px-2 py-1', sizeClasses[size], className)
	);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
{#if !isHome && breadcrumbItems.length > 0}
	<nav aria-label="Breadcrumb" class={navClasses}>
		<ol class="flex items-center gap-1">
			{#each breadcrumbItems as item, index (item.href)}
				<li class="flex items-center">
					{#if index > 0}
						<span aria-hidden="true">
							<Text as="span" size={textSize} color="subtext" class="mx-2">
								{separator}
							</Text>
						</span>
					{/if}
					{#if index === breadcrumbItems.length - 1}
						<span aria-current="page">
							<Text as="span" size={textSize} color="text">
								{item.label}
							</Text>
						</span>
					{:else}
						<a href={item.href} class="text-text hover:text-brand duration-base transition-colors">
							<Text as="span" size={textSize} color="text" class="hover:text-brand">
								{item.label}
							</Text>
						</a>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
{/if}
<!-- eslint-enable svelte/no-navigation-without-resolve -->
