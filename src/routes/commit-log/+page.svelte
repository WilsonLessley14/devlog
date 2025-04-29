<script lang="ts">
	export let data: { commits: Array<{ message: string; repo: string; timestamp: string }> };
</script>

<svelte:head>
	<title>Commit Log</title>
</svelte:head>

<h1 class="mb-4 text-2xl font-bold">Recent Commits</h1>
<ul>
	{#each data.commits as commit}
		<li class="mb-2">
			<p class="font-semibold">{commit.message}</p>
			<p class="text-sm text-gray-600">Repo: {commit.repo}</p>
			<p class="text-sm text-gray-600">Pushed at: {new Date(commit.timestamp).toLocaleString()}</p>
		</li>
	{/each}
</ul>
