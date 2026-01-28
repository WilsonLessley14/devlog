<script lang="ts">
	import { onMount } from 'svelte';

	export let data: { game: string };

	let GameComponent: typeof import('svelte').SvelteComponent | null = null;
	let loadError: string | null = null;

	import { loadGameComponent } from '$lib/common/games/loadGameComponent';

	/**
	 * Loads the Svelte game component dynamically using the helper.
	 */
	onMount(async () => {
		try {
			GameComponent = await loadGameComponent(data.game);
		} catch (e) {
			loadError = e instanceof Error ? e.message : 'Unknown error';
		}
	});
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<nav><a href="/games">← All Games</a></nav>
<h1>{data.game}</h1>
{#if loadError}
	<p style="color: red">{loadError}</p>
{:else if GameComponent}
	<svelte:component this={GameComponent} />
{:else}
	<p>Loading…</p>
{/if}
