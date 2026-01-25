<script lang="ts">
	import '../app.css';

	let links = [
		{ href: '/', label: 'Home' },
		{ href: '/blog', label: 'Blog' },
		{ href: '/contributions', label: 'Contributions' },
		{ href: '/cats', label: 'Cats' },
		{ href: '/design-system', label: 'Design System' }
	];

	let { children } = $props();

	let theme = $state<'light' | 'dark'>('light');

	function toggleTheme() {
		theme = theme === 'light' ? 'dark' : 'light';
		document.documentElement.dataset.theme = theme;
	}
</script>

<nav class="flex justify-between">
	<span class="pl-2">
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
		{#each links as link (link.href)}
			<a href={link.href} class="mr-2 border-r border-gray-200 pr-2">{link.label}</a>
		{/each}
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</span>
	<button onclick={toggleTheme} class="pr-2"
		>Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode</button
	>
</nav>

{@render children()}
