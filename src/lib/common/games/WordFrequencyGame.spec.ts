import { render, fireEvent, waitFor } from '@testing-library/svelte';
import WordFrequencyGame from './WordFrequencyGame.svelte';

describe('WordFrequencyGame', () => {
	it('renders two word buttons and allows selection', async () => {
		const { getAllByRole, findByText } = render(WordFrequencyGame);
		const buttons = getAllByRole('button');
		expect(buttons.length).toBeGreaterThanOrEqual(2);
		await fireEvent.click(buttons[0]);
		await findByText(/Correct!|Incorrect.|Unable to determine/);
	});
});
