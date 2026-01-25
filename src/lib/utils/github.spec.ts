import { describe, it, expect, vi } from 'vitest';

// Mock the SvelteKit env module
vi.mock('$env/dynamic/private', () => ({
	env: { GITHUB_FINE_GRAIN_ACCESS_TOKEN: 'mock-token' }
}));

import { fetchRecentContributionsByDay, extractContributionCountsFromGraphQL } from './github';

const mockGraphQLResponse = {
	data: {
		user: {
			contributionsCollection: {
				commitContributionsByRepository: [
					{
						repository: { nameWithOwner: 'owner/repo1' },
						contributions: {
							nodes: [
								{ occurredAt: '2025-04-29T00:00:00Z', commitCount: 2 },
								{ occurredAt: '2025-04-28T00:00:00Z', commitCount: 1 }
							]
						}
					},
					{
						repository: { nameWithOwner: 'owner/repo2' },
						contributions: {
							nodes: [{ occurredAt: '2025-04-29T00:00:00Z', commitCount: 3 }]
						}
					}
				]
			}
		}
	}
};

describe('fetchRecentContributionsByDay', () => {
	it('parses per-day, per-repo contribution counts from GraphQL response', async () => {
		const fetchMock = vi.fn().mockResolvedValue({
			ok: true,
			json: async () => mockGraphQLResponse
		});
		// Patch global fetch for this test
		const origFetch = global.fetch;
		global.fetch = fetchMock;
		const contributions = await fetchRecentContributionsByDay('foo');
		expect(contributions).toEqual([
			{ repo: 'owner/repo1', date: '2025-04-29', count: 2 },
			{ repo: 'owner/repo2', date: '2025-04-29', count: 3 },
			{ repo: 'owner/repo1', date: '2025-04-28', count: 1 }
		]);
		global.fetch = origFetch;
	});

	it('throws if GitHub returns error', async () => {
		const fetchMock = vi.fn().mockResolvedValue({ ok: false, status: 403 });
		const origFetch = global.fetch;
		global.fetch = fetchMock;
		await expect(fetchRecentContributionsByDay('foo')).rejects.toThrow();
		global.fetch = origFetch;
	});
});

describe('extractContributionCountsFromGraphQL', () => {
	it('extracts correct entries from GraphQL response', () => {
		const result = extractContributionCountsFromGraphQL(mockGraphQLResponse);
		expect(result).toEqual([
			{ repo: 'owner/repo1', date: '2025-04-29', count: 2 },
			{ repo: 'owner/repo2', date: '2025-04-29', count: 3 },
			{ repo: 'owner/repo1', date: '2025-04-28', count: 1 }
		]);
	});
});
