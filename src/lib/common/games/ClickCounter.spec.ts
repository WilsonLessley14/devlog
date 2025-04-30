// @vitest-environment jsdom
import { render, fireEvent } from '@testing-library/svelte';
import { describe, it } from 'vitest';
import ClickCounter from './ClickCounter.svelte';

describe('ClickCounter', () => {
	it('renders with initial count 0', () => {
		const { getByText } = render(ClickCounter);
		getByText('Count: 0');
	});

	it('increments the counter when button is clicked', async () => {
		const { getByText } = render(ClickCounter);
		const button = getByText('Click me!');
		await fireEvent.click(button);
		getByText('Count: 1');
		await fireEvent.click(button);
		getByText('Count: 2');
	});
});
