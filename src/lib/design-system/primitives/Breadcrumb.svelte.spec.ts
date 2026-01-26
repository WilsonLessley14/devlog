import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import BreadcrumbTestWrapper from './BreadcrumbTestWrapper.svelte';

describe('Breadcrumb', () => {
	describe('Basic rendering', () => {
		it('renders breadcrumbs from pathname', () => {
			render(BreadcrumbTestWrapper, { pathname: '/blog' });
			expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
			expect(screen.getByText('Home')).toBeInTheDocument();
			expect(screen.getByText('Blog')).toBeInTheDocument();
		});

		it('renders with custom items', () => {
			render(BreadcrumbTestWrapper, {
				items: [
					{ label: 'Start', href: '/' },
					{ label: 'Section', href: '/section' }
				]
			});
			expect(screen.getByText('Start')).toBeInTheDocument();
			expect(screen.getByText('Section')).toBeInTheDocument();
		});

		it('does not render on home page', () => {
			render(BreadcrumbTestWrapper, { pathname: '/' });
			expect(screen.queryByRole('navigation', { name: 'Breadcrumb' })).not.toBeInTheDocument();
		});
	});

	describe('Path formatting', () => {
		it('formats kebab-case to Title Case', () => {
			render(BreadcrumbTestWrapper, { pathname: '/design-system' });
			expect(screen.getByText('Design System')).toBeInTheDocument();
		});

		it('handles multi-segment paths', () => {
			render(BreadcrumbTestWrapper, { pathname: '/blog/my-first-post' });
			expect(screen.getByText('Home')).toBeInTheDocument();
			expect(screen.getByText('Blog')).toBeInTheDocument();
			expect(screen.getByText('My First Post')).toBeInTheDocument();
		});

		it('generates correct hrefs for each segment', () => {
			render(BreadcrumbTestWrapper, { pathname: '/blog/my-post' });
			const homeLink = screen.getByRole('link', { name: 'Home' });
			const blogLink = screen.getByRole('link', { name: 'Blog' });
			expect(homeLink).toHaveAttribute('href', '/');
			expect(blogLink).toHaveAttribute('href', '/blog');
		});
	});

	describe('Home item', () => {
		it('shows home item by default', () => {
			render(BreadcrumbTestWrapper, { pathname: '/blog' });
			expect(screen.getByText('Home')).toBeInTheDocument();
		});

		it('hides home item when showHome is false', () => {
			render(BreadcrumbTestWrapper, { pathname: '/blog', showHome: false });
			expect(screen.queryByText('Home')).not.toBeInTheDocument();
		});

		it('uses custom home label', () => {
			render(BreadcrumbTestWrapper, { pathname: '/blog', homeLabel: 'Start' });
			expect(screen.getByText('Start')).toBeInTheDocument();
			expect(screen.queryByText('Home')).not.toBeInTheDocument();
		});
	});

	describe('Separator', () => {
		it('renders default separator', () => {
			const { container } = render(BreadcrumbTestWrapper, { pathname: '/blog' });
			const separators = container.querySelectorAll('[aria-hidden="true"]');
			expect(separators.length).toBeGreaterThan(0);
			expect(separators[0].textContent?.trim()).toBe('/');
		});

		it('renders custom separator', () => {
			const { container } = render(BreadcrumbTestWrapper, { pathname: '/blog', separator: '>' });
			const separators = container.querySelectorAll('[aria-hidden="true"]');
			expect(separators[0].textContent?.trim()).toBe('>');
		});
	});

	describe('Sizes', () => {
		it('renders with small size by default', () => {
			const { container } = render(BreadcrumbTestWrapper, { pathname: '/blog' });
			const nav = container.querySelector('nav');
			expect(nav?.className).toContain('text-sm');
		});

		it('renders with medium size', () => {
			const { container } = render(BreadcrumbTestWrapper, { pathname: '/blog', size: 'md' });
			const nav = container.querySelector('nav');
			expect(nav?.className).toContain('text-base');
		});

		it('renders with large size', () => {
			const { container } = render(BreadcrumbTestWrapper, { pathname: '/blog', size: 'lg' });
			const nav = container.querySelector('nav');
			expect(nav?.className).toContain('text-lg');
		});
	});

	describe('Accessibility', () => {
		it('has nav landmark with aria-label', () => {
			render(BreadcrumbTestWrapper, { pathname: '/blog' });
			expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
		});

		it('uses ordered list structure', () => {
			const { container } = render(BreadcrumbTestWrapper, { pathname: '/blog' });
			expect(container.querySelector('ol')).toBeInTheDocument();
			expect(container.querySelectorAll('li').length).toBeGreaterThan(0);
		});

		it('marks current page with aria-current', () => {
			render(BreadcrumbTestWrapper, { pathname: '/blog' });
			const currentItem = screen.getByText('Blog');
			// aria-current is on the wrapper span
			expect(currentItem.closest('[aria-current="page"]')).toBeInTheDocument();
		});

		it('hides separator from screen readers', () => {
			const { container } = render(BreadcrumbTestWrapper, { pathname: '/blog' });
			const separators = container.querySelectorAll('[aria-hidden="true"]');
			expect(separators.length).toBeGreaterThan(0);
		});

		it('current page is not a link', () => {
			render(BreadcrumbTestWrapper, { pathname: '/blog' });
			const blogText = screen.getByText('Blog');
			expect(blogText.tagName.toLowerCase()).toBe('span');
			expect(blogText.closest('a')).toBeNull();
		});
	});

	describe('Custom class', () => {
		it('applies custom class to nav element', () => {
			const { container } = render(BreadcrumbTestWrapper, {
				pathname: '/blog',
				class: 'custom-breadcrumb'
			});
			const nav = container.querySelector('nav');
			expect(nav?.className).toContain('custom-breadcrumb');
		});
	});
});
