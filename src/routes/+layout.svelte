<script lang="ts">
	import '../app.css';
	import AppBreadcrumb from '$lib/AppBreadcrumb.svelte';
	import { themeNames } from '@wl/frontend-system';

	let links = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contributions', label: 'Contributions' },
		{ href: '/cats', label: 'Cats' },
		{ href: '/design-system', label: 'Design System' }
	];

	let { children } = $props();

	// Theme set comes from the design system, so any theme it ships (light, dark, pink,
	// Aleksa, …) shows up here automatically — no need to maintain a list.
	let theme = $state<string>(themeNames[0]);
	let mode = $state<'soft' | 'hard'>('soft');

	function cycleTheme() {
		theme = themeNames[(themeNames.indexOf(theme) + 1) % themeNames.length];
		document.documentElement.dataset.theme = theme;
	}

	function toggleMode() {
		mode = mode === 'soft' ? 'hard' : 'soft';
		document.documentElement.dataset.mode = mode;
	}
</script>

<nav class="site-nav flex justify-between">
	<span class="pl-2">
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		{#each links as link (link.href)}
			<a href={link.href} class="mr-2 border-r pr-2">{link.label}</a>
		{/each}
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</span>
	<span class="flex gap-2 pr-2">
		<button onclick={toggleMode}>{mode === 'soft' ? 'Hard' : 'Soft'} Mode</button>
		<button onclick={cycleTheme}>Theme: {theme}</button>
	</span>
</nav>

<AppBreadcrumb />

{@render children()}
