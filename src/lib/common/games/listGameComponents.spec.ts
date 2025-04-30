import { describe, it, expect } from 'vitest';
import { listGameComponents } from './listGameComponents';

describe('listGameComponents', () => {
	it('returns an array (may be empty if no games exist)', async () => {
		const games = await listGameComponents();
		expect(Array.isArray(games)).toBe(true);
	});
});
