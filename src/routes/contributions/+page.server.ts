import type { PageServerLoad } from './$types';
import type { ContributionCountEntry } from '$lib/utils/github';
import { fetchRecentContributionsByDay } from '$lib/utils/github';

/**
 * Fetches the user's per-day contribution counts for each repository.
 * @returns An object containing an array of contribution count entries.
 * @throws Error if the GitHub API cannot be fetched.
 */
export const load: PageServerLoad = async () => {
	const username = 'WilsonLessley14';
	const contributions: ContributionCountEntry[] = await fetchRecentContributionsByDay(username);
	return { contributions };
};
