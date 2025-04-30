<script lang="ts">
	import { WordFrequencyGameObject } from './WordFrequencyGameObject.svelte';

	const game = new WordFrequencyGameObject();
</script>

<div class="word-frequency-game">
	<div class="words">
		<button on:click={() => game.selectWord(1)} disabled={game.round.selected !== null}
			>{game.round.word1}</button
		>
		<span>vs</span>
		<button on:click={() => game.selectWord(2)} disabled={game.round.selected !== null}
			>{game.round.word2}</button
		>
	</div>
	{#if game.round.selected !== null}
		<div class="feedback">
			{#if game.round.correct !== null}
				{#if game.round.correct}
					<span class="correct">Correct!</span>
				{:else}
					<span class="incorrect">Incorrect.</span>
				{/if}
				<button on:click={() => game.newRound()}>Next</button>
			{/if}
		</div>
	{/if}
</div>

<style>
	.word-frequency-game {
		max-width: 400px;
		margin: 2rem auto;
		text-align: center;
	}
	.words {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}
	button {
		font-size: 1.2rem;
		padding: 0.5rem 1.5rem;
	}
	.correct {
		color: green;
		font-weight: bold;
	}
	.incorrect {
		color: red;
		font-weight: bold;
	}
	.error {
		color: red;
		margin-bottom: 1rem;
	}
</style>
