import { render, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import WordFrequencyGame from './WordFrequencyGame.svelte';

describe('WordFrequencyGame', () => {
	// Skip: This test requires external DataMuse API which isn't available in unit tests
	it.skip('renders two word buttons and allows selection', async () => {
		const { getAllByRole, findByText } = render(WordFrequencyGame);
		const buttons = getAllByRole('button');
		expect(buttons.length).toBeGreaterThanOrEqual(2);
		await fireEvent.click(buttons[0]);
		await findByText(/Correct!|Incorrect.|Unable to determine/);
	});
});
