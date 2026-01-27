import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import LinkTestWrapper from './LinkTestWrapper.svelte';

describe('Link', () => {
	it('renders with default props', () => {
		render(LinkTestWrapper, { href: '/test', text: 'Test Link' });
		const link = screen.getByRole('link');
		expect(link).toBeInTheDocument();
		expect(link).toHaveTextContent('Test Link');
		expect(link).toHaveAttribute('href', '/test');
	});

	it('renders with default variant', () => {
		render(LinkTestWrapper, { href: '/test', text: 'Link' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('!text-link');
	});

	it('renders with subtle variant', () => {
		render(LinkTestWrapper, { href: '/test', variant: 'subtle', text: 'Subtle' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('!text-text');
		expect(link.className).toContain('hover:!text-link');
	});

	it('renders with muted variant', () => {
		render(LinkTestWrapper, { href: '/test', variant: 'muted', text: 'Muted' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('!text-subtext');
	});

	it('renders with small size', () => {
		render(LinkTestWrapper, { href: '/test', size: 'sm', text: 'Small' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('text-sm');
	});

	it('renders with medium size by default', () => {
		render(LinkTestWrapper, { href: '/test', text: 'Medium' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('text-base');
	});

	it('renders with large size', () => {
		render(LinkTestWrapper, { href: '/test', size: 'lg', text: 'Large' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('text-lg');
	});

	it('renders with hover underline by default', () => {
		render(LinkTestWrapper, { href: '/test', text: 'Link' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('hover:!underline');
	});

	it('renders with always underline', () => {
		render(LinkTestWrapper, { href: '/test', underline: 'always', text: 'Always' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('!underline');
	});

	it('renders with no underline', () => {
		render(LinkTestWrapper, { href: '/test', underline: 'none', text: 'None' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('!no-underline');
	});

	it('renders external link with proper attributes', () => {
		render(LinkTestWrapper, { href: 'https://example.com', external: true, text: 'External' });
		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noopener noreferrer');
	});

	it('shows external indicator for external links', () => {
		render(LinkTestWrapper, { href: 'https://example.com', external: true, text: 'External' });
		const link = screen.getByRole('link');
		expect(link.textContent).toContain('↗');
	});

	it('does not show external indicator for internal links', () => {
		render(LinkTestWrapper, { href: '/internal', text: 'Internal' });
		const link = screen.getByRole('link');
		expect(link.textContent).not.toContain('↗');
	});

	it('renders with aria-label', () => {
		render(LinkTestWrapper, {
			href: '/test',
			ariaLabel: 'Go to test page',
			text: 'Link'
		});
		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('aria-label', 'Go to test page');
	});

	it('applies custom className', () => {
		render(LinkTestWrapper, { href: '/test', class: 'custom-class', text: 'Link' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('custom-class');
	});

	it('applies base accessibility classes', () => {
		render(LinkTestWrapper, { href: '/test', text: 'Link' });
		const link = screen.getByRole('link');
		expect(link.className).toContain('focus:outline-none');
		expect(link.className).toContain('focus:ring-2');
	});
});
