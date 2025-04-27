/**
 * Renders markdown to HTML using markdown-it.
 * @param {string} markdown - The markdown string to render.
 * @returns {string} The rendered HTML string.
 * @throws {Error} If markdown-it fails.
 */
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

export function renderMarkdown(markdown: string): string {
  if (typeof markdown !== 'string') {
    throw new Error('Input must be a string');
  }
  return md.render(markdown);
}
