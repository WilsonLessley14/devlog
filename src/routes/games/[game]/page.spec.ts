import { describe, it, expect } from 'vitest';
import { render, waitFor } from '@testing-library/svelte';
import GamePage from './+page.svelte';

describe('[game] route', () => {
	it('renders a game component if it exists', async () => {
		const params = { game: 'ClickCounter' };
		const { getByText } = render(GamePage, { props: { params } });
		await waitFor(() => {
			expect(getByText('Click Counter Game')).toBeTruthy();
		});
	});

	it('shows an error if the game does not exist', async () => {
		const params = { game: 'NonexistentGame' };
		const { getByText } = render(GamePage, { props: { params } });
		await waitFor(() => {
			expect(getByText('Game not found: NonexistentGame')).toBeTruthy();
		});
	});
});
