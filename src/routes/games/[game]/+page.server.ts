import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const game = params.game;
	return { game };
};
