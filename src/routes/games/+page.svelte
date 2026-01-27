<script lang="ts">
	import { listGameComponents } from '$lib/common/games/listGameComponents';
	import { Link } from '$lib/design-system';
	import { onMount } from 'svelte';

	let games: string[] = [];

	/**
	 * Load the list of game component names on mount.
	 */
	onMount(async () => {
		games = await listGameComponents();
	});
</script>

<h1>Games</h1>
{#if games.length === 0}
	<p>No games found.</p>
{:else}
	<ul>
		{#each games as game (game)}
			<li><Link href={`/games/${game}`}>{game}</Link></li>
		{/each}
	</ul>
{/if}
