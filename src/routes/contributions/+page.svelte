<script lang="ts">
	/**
	 * Data prop: array of per-day contribution counts per repo.
	 */
	export let data: { contributions: Array<{ repo: string; date: string; count: number }> };
</script>

<svelte:head>
	<title>Contributions by Repository and Day</title>
</svelte:head>

<h1>Contributions by Repository and Day</h1>
<ul>
	{#each data.contributions as entry (entry.repo + entry.date)}
		<li class="mb-2">
			<p class="font-semibold">{entry.repo}</p>
			<p class="text-subtext text-sm">Date: {entry.date}</p>
			<p class="text-subtext text-sm">Commits: {entry.count}</p>
		</li>
	{/each}
</ul>
