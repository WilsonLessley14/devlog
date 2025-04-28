import { render } from '@testing-library/svelte';
import Page from './+page.svelte';
import { describe, expect, it } from 'vitest';
// Render component tests

describe('Blog Page', () => {
	it('renders blog post list', () => {
		const { getByText } = render(Page, { data: { posts: ['foo', 'bar'] } });
		expect(getByText('foo')).toBeInTheDocument();
		expect(getByText('bar')).toBeInTheDocument();
	});

	it('renders no posts message', () => {
		const { getByText } = render(Page, { data: { posts: [] } });
		expect(getByText('No blog posts found.')).toBeInTheDocument();
	});
});
