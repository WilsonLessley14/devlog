import { apiRequest } from './apiService';

/**
 * Mock fetch for unit testing apiRequest
 */
global.fetch = jest.fn();

describe('apiRequest', () => {
	beforeEach(() => {
		(fetch as jest.Mock).mockClear();
	});

	it('logs and returns parsed response on success', async () => {
		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			status: 200,
			json: async () => ({ foo: 'bar' })
		});
		const result = await apiRequest<{ foo: string }>('https://example.com', { method: 'GET' });
		expect(result).toEqual({ foo: 'bar' });
	});

	it('throws and logs on network error', async () => {
		(fetch as jest.Mock).mockRejectedValueOnce(new Error('fail'));
		await expect(apiRequest('https://example.com', { method: 'GET' })).rejects.toThrow(
			'Network error'
		);
	});

	it('throws and logs on parse error', async () => {
		(fetch as jest.Mock).mockResolvedValueOnce({
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
		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: false,
			status: 403,
			json: async () => ({ message: 'forbidden' })
		});
		await expect(apiRequest('https://example.com', { method: 'GET' })).rejects.toThrow(
			'HTTP error 403'
		);
	});
});
