import { render } from '@testing-library/svelte';
import Page from './+page.svelte';
import { describe, expect, it } from 'vitest';

describe('Blog Page', () => {
	it('renders blog post list', () => {
		const { getByText } = render(Page, { data: { posts: ['foo.md', 'bar.md'] } });
		expect(getByText('foo.md')).toBeInTheDocument();
		expect(getByText('bar.md')).toBeInTheDocument();
	});

	it('renders no posts message', () => {
		const { getByText } = render(Page, { data: { posts: [] } });
		expect(getByText('No blog posts found.')).toBeInTheDocument();
	});
});
