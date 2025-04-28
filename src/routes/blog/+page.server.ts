import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';

/**
 * Loads the list of blog post filenames from the src/lib/blogposts directory.
 * @returns {Promise<{ posts: string[] }>} An object containing an array of blog post filenames.
 * @throws {Error} If the directory cannot be read.
 */
export const load: PageServerLoad = async (_event) => {
	try {
		const blogDir = path.resolve('src/lib/blogposts');
		const files = await fs.promises.readdir(blogDir);
		const postFileNames = files.filter((file) => file.endsWith('.md'));
		const posts = postFileNames.map((file) => file.replace(/\.md$/, ''));
		return { posts };
	} catch (err) {
		throw new Error(
			'Failed to load blog posts: ' + (err instanceof Error ? err.message : String(err))
		);
	}
};
