import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

/**
 * Reads a markdown file and renders it to HTML.
 * @param filePath Path to the markdown file
 * @returns Promise resolving to the HTML string
 * @throws Error if file cannot be read
 */
const renderMarkdownOrThrow = async (filePath: string): Promise<string> => {
	try {
		const markdown = await fs.promises.readFile(filePath, 'utf-8');
		return marked(markdown);
	} catch {
		throw error(404, `Blog post not found: ${filePath}`);
	}
};

/**
 * Reads and renders a markdown blog post to HTML.
 * @param {object} args
 * @param {Record<string, string>} args.params - Route parameters.
 * @param {string} args.params.blogname - The blog post filename without extension.
 * @returns {{ html: string; slug: string }} The post HTML and slug.
 * @throws {import('@sveltejs/kit').HttpError} If the post cannot be found.
 */
export const load: PageServerLoad = async ({ params }) => {
	const slug = params.blogname;
	const filePath = path.resolve('src/lib/blogposts', `${slug}.md`);
	const html = await renderMarkdownOrThrow(filePath);
	return { html, slug };
};
