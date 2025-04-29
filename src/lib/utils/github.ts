/**
 * A simplified representation of a GitHub commit entry.
 */
export interface CommitEntry {
	message: string;
	repo: string;
	timestamp: string;
}

/**
 * Minimal subset of GitHub PushEvent fields needed for extracting commits.
 */
interface GitHubPushEvent {
	type: 'PushEvent';
	payload: { commits: unknown[] };
	repo: { name: string };
	created_at: string;
}

/**
 * Extract commit entries from a list of GitHub events.
 * @param events The array of GitHub events (unknowns).
 * @returns An array of commit entries with message, repo, and timestamp.
 */
export function extractCommitEntries(events: unknown[]): CommitEntry[] {
	return events.flatMap((e): CommitEntry[] => {
		if (typeof e !== 'object' || e === null) return [];
		const ev = e as GitHubPushEvent;
		if (ev.type !== 'PushEvent' || !Array.isArray(ev.payload.commits)) return [];
		return (ev.payload.commits as { message?: unknown }[]).flatMap((c) =>
			typeof c.message === 'string'
				? [{ message: c.message, repo: ev.repo.name, timestamp: ev.created_at }]
				: []
		);
	});
}

/**
 * Fetch public GitHub events for a user, using optional token from env.
 * @param username GitHub username.
 * @returns Array of raw event objects.
 * @throws Error on HTTP failure.
 */
export async function fetchUserEvents(username: string): Promise<unknown[]> {
	const token = process.env.GITHUB_FINE_GRAIN_ACCESS_TOKEN;
	const headers: Record<string, string> = {};
	if (token) headers.Authorization = `token ${token}`;
	const res = await fetch(`https://api.github.com/users/${username}/events/public`, { headers });
	if (!res.ok) {
		throw new Error(`Failed to fetch GitHub events: ${res.status}`);
	}
	return (await res.json()) as unknown[];
}
