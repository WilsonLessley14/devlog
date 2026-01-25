import type { PageServerLoad } from './$types';
import fs from 'fs';
import path from 'path';

/**
 * Reads the list of markdown blog post filenames (without extension) from the blogposts directory.
 * @param dir Directory path containing blog posts
 * @returns Promise resolving to array of slugs (filenames without .md)
 * @throws Error if directory cannot be read
 */
const getBlogPostsOrThrow = async (dir: string): Promise<string[]> => {
	try {
		const files = await fs.promises.readdir(dir);
		const postFileNames = files.filter((file) => file.endsWith('.md'));
		const posts = postFileNames.map((file) => file.replace(/\.md$/, ''));
		return posts;
	} catch (err) {
		throw new Error(
			'Failed to load blog posts: ' + (err instanceof Error ? err.message : String(err))
		);
	}
};

/**
 * Loads the list of blog post filenames from the src/lib/blogposts directory.
 * @returns {Promise<{ posts: string[] }>} An object containing an array of blog post filenames.
 * @throws {Error} If the directory cannot be read.
 */
export const load: PageServerLoad = async () => {
	const blogDir = path.resolve('src/lib/blogposts');
	return { posts: await getBlogPostsOrThrow(blogDir) };
};
