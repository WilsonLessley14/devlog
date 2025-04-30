/**
 * Unit tests for WordFrequencyGameObject.getWordFrequency.
 * Ensures correct frequency fetching and error handling for various input scenarios.
 */
import { WordFrequencyGameObject } from './WordFrequencyGameObject.svelte';

describe('WordFrequencyGameObject.getWordFrequency', () => {
	let game: WordFrequencyGameObject;
	beforeEach(() => {
		game = new WordFrequencyGameObject();
	});

	it('returns a number for a known word', async () => {
		const freq = await (game as any).getWordFrequency('the');
		expect(typeof freq).toBe('number');
		expect(freq).toBeGreaterThan(0);
	});

	it('throws for nonsense word', async () => {
		await expect((game as any).getWordFrequency('asdfghjklqwerty')).rejects.toThrow();
	});

	it('throws for empty string', async () => {
		await expect((game as any).getWordFrequency('')).rejects.toThrow();
	});
});
