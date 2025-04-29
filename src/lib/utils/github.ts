import { env } from '$env/dynamic/private';

/**
 * A single day's contribution count for a repository.
 */
export interface ContributionCountEntry {
	repo: string;
	date: string; // YYYY-MM-DD
	count: number;
}

/**
 * Fetch per-day contribution counts for each repository for a user using GitHub's GraphQL API.
 * @param username GitHub username
 * @returns Array of contribution count entries
 * @throws Error on HTTP or API failure
 */
export async function fetchRecentContributionsByDay(
	username: string
): Promise<ContributionCountEntry[]> {
	const token = env.GITHUB_FINE_GRAIN_ACCESS_TOKEN;
	if (!token) throw new Error('GitHub token required');
	const query = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        commitContributionsByRepository(maxRepositories: 100) {
          repository { nameWithOwner }
          contributions(first: 100) {
            nodes {
              occurredAt
              commitCount
            }
          }
        }
      }
    }
  }`;
	const variables = { login: username };
	const res = await fetch('https://api.github.com/graphql', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ query, variables })
	});
	if (!res.ok) throw new Error(`GitHub GraphQL error: ${res.status}`);
	const data = await res.json();
	if (!data?.data?.user) throw new Error('No contribution data');
	return extractContributionCountsFromGraphQL(data);
}

/**
 * Safely extracts the user object from a GraphQL response.
 */
function extractUser(data: unknown): unknown | undefined {
	if (!data || typeof data !== 'object') return undefined;
	const d = (data as any).data;
	if (!d || typeof d !== 'object' || !d.user || typeof d.user !== 'object') return undefined;
	return d.user;
}

/**
 * Safely extracts the contributionsCollection from a user object.
 */
function extractContributionsCollection(user: unknown): unknown | undefined {
	if (!user || typeof user !== 'object') return undefined;
	return 'contributionsCollection' in user &&
		user.contributionsCollection &&
		typeof user.contributionsCollection === 'object'
		? user.contributionsCollection
		: undefined;
}

/**
 * Safely extracts the commitContributionsByRepository array from the contributionsCollection.
 */
function extractRepositoriesFromContributionsCollection(collection: unknown): unknown | undefined {
	if (!collection || typeof collection !== 'object') return undefined;
	return 'commitContributionsByRepository' in collection &&
		collection.commitContributionsByRepository &&
		Array.isArray(collection.commitContributionsByRepository)
		? collection.commitContributionsByRepository
		: undefined;
}

/**
 * Extracts all ContributionCountEntry from the repo array.
 */
function extractRepoEntries(repos: unknown): ContributionCountEntry[] {
	if (!Array.isArray(repos)) return [];
	return repos.flatMap((repo: any) => {
		const repoName = repo?.repository?.nameWithOwner;
		const nodes = repo?.contributions?.nodes ?? [];
		return (Array.isArray(nodes) ? nodes : []).flatMap((node: any) => {
			if (!node || typeof node.occurredAt !== 'string' || typeof node.commitCount !== 'number')
				return [];
			return [{ repo: repoName, date: node.occurredAt.slice(0, 10), count: node.commitCount }];
		});
	});
}

/**
 * Sorts ContributionCountEntry array by date descending (newest first).
 */
function sortEntriesDescending(entries: ContributionCountEntry[]): ContributionCountEntry[] {
	return [...entries].sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Extracts per-day contribution counts for each repository from GraphQL API response.
 * @param data Raw GraphQL response
 * @returns Array of contribution count entries
 */
export function extractContributionCountsFromGraphQL(data: unknown): ContributionCountEntry[] {
	const user = extractUser(data);
	const collection = extractContributionsCollection(user);
	const repos = extractRepositoriesFromContributionsCollection(collection);
	const entries = extractRepoEntries(repos);
	return sortEntriesDescending(entries);
}
