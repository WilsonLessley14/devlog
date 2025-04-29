import type { PageServerLoad } from './$types';
import type { CommitEntry } from '$lib/utils/github';
import { extractCommitEntries, fetchUserEvents } from '$lib/utils/github';

/**
 * Fetches the user's recent GitHub commits via public events and returns a list of commits.
 * @returns An object containing an array of commit entries with message, repo, and timestamp.
 * @throws Error if the GitHub events cannot be fetched.
 */
export const load: PageServerLoad = async () => {
	const username = 'WilsonLessley14';
	const events = await fetchUserEvents(username);
	const commits: CommitEntry[] = extractCommitEntries(events);
	return { commits };
};
