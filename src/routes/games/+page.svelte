<script lang="ts">
	import { listGameComponents } from '$lib/common/games/listGameComponents';
	let games: string[] = [];

	/**
	 * Load the list of game component names on mount.
	 */
	import { onMount } from 'svelte';
	onMount(async () => {
		games = await listGameComponents();
	});
</script>

<h1>Games</h1>
{#if games.length === 0}
	<p>No games found.</p>
{:else}
	<ul>
		{#each games as game}
			<li><a href={`/games/${game}`}>{game}</a></li>
		{/each}
	</ul>
{/if}
