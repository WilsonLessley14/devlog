import { apiRequest } from './apiService';
import { describe, it, expect, vi, beforeEach } from 'vitest';

/**
 * Mock fetch for unit testing apiRequest
 */
global.fetch = vi.fn();

describe('apiRequest', () => {
	beforeEach(() => {
		(fetch as vi.Mock).mockClear();
	});

	it('logs and returns parsed response on success', async () => {
		(fetch as vi.Mock).mockResolvedValueOnce({
			ok: true,
			status: 200,
			json: async () => ({ foo: 'bar' })
		});
		const result = await apiRequest<{ foo: string }>('https://example.com', { method: 'GET' });
		expect(result).toEqual({ foo: 'bar' });
	});

	it('throws and logs on network error', async () => {
		(fetch as vi.Mock).mockRejectedValueOnce(new Error('fail'));
		await expect(apiRequest('https://example.com', { method: 'GET' })).rejects.toThrow(
			'Network error'
		);
	});

	it('throws and logs on parse error', async () => {
		(fetch as vi.Mock).mockResolvedValueOnce({
			ok: true,
			status: 200,
			json: async () => {
				throw new Error('bad json');
			}
		});
		await expect(apiRequest('https://example.com', { method: 'GET' })).rejects.toThrow(
			'Failed to parse response JSON'
		);
	});

	it('throws and logs on HTTP error', async () => {
		(fetch as vi.Mock).mockResolvedValueOnce({
			ok: false,
			status: 403,
			json: async () => ({ message: 'forbidden' })
		});
		await expect(apiRequest('https://example.com', { method: 'GET' })).rejects.toThrow(
			'HTTP error 403'
		);
	});
});
