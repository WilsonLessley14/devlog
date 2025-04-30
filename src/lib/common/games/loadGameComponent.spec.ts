import { describe, it, expect } from 'vitest';
import { loadGameComponent } from './loadGameComponent';

describe('loadGameComponent', () => {
	it('loads an existing game component', async () => {
		const Comp = await loadGameComponent('ClickCounter');
		expect(Comp).toBeTypeOf('function');
	});

	it('throws an error for a missing game', async () => {
		await expect(loadGameComponent('NotARealGame')).rejects.toThrow('Game not found: NotARealGame');
	});
});
