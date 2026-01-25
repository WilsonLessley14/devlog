<script lang="ts">
	/**
	 * ClickCounter: A simple click counter game component.
	 * @module ClickCounter
	 */
	/**
	 * Number of times the button has been clicked.
	 */
	let count = 0;

	/**
	 * Increments the click counter.
	 * @returns {void}
	 */
	function increment(): void {
		count += 1;
	}
</script>

<h2>Click Counter Game</h2>
<p class="counter">Count: {count}</p>
<button on:click={increment} aria-label="Increment counter"> Click me! </button>

<style>
	.counter {
		font-size: 2rem;
		margin: 1rem 0;
	}
	button {
		padding: 0.5rem 1.5rem;
		font-size: 1.2rem;
		cursor: pointer;
	}
</style>
