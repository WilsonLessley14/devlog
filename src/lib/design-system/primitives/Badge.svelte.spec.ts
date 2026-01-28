import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import BadgeTestWrapper from './BadgeTestWrapper.svelte';

describe('Badge', () => {
	it('renders with default props', () => {
		render(BadgeTestWrapper, {});
		const badge = screen.getByText('Badge');
		expect(badge).toBeInTheDocument();
	});

	it('renders with custom text', () => {
		render(BadgeTestWrapper, { text: 'Custom Label' });
		const badge = screen.getByText('Custom Label');
		expect(badge).toBeInTheDocument();
	});

	// Variant tests
	it('renders with default variant', () => {
		render(BadgeTestWrapper, {});
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('bg-surface');
		expect(badge.className).toContain('text-text');
		expect(badge.className).toContain('border-border');
	});

	it('renders with success variant', () => {
		render(BadgeTestWrapper, { variant: 'success' });
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('text-success');
		expect(badge.className).toContain('bg-success/10');
	});

	it('renders with warning variant', () => {
		render(BadgeTestWrapper, { variant: 'warning' });
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('text-warning');
		expect(badge.className).toContain('bg-warning/10');
	});

	it('renders with error variant', () => {
		render(BadgeTestWrapper, { variant: 'error' });
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('text-error');
		expect(badge.className).toContain('bg-error/10');
	});

	// Size tests
	it('renders with medium size by default', () => {
		render(BadgeTestWrapper, {});
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('text-sm');
		expect(badge.className).toContain('px-2.5');
	});

	it('renders with small size', () => {
		render(BadgeTestWrapper, { size: 'sm' });
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('text-xs');
		expect(badge.className).toContain('px-2');
	});

	it('renders with large size', () => {
		render(BadgeTestWrapper, { size: 'lg' });
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('text-base');
		expect(badge.className).toContain('px-3');
	});

	// Style tests
	it('has rounded-full class for pill shape', () => {
		render(BadgeTestWrapper, {});
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('rounded-full');
	});

	it('has inline-flex class for proper alignment', () => {
		render(BadgeTestWrapper, {});
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('inline-flex');
	});

	it('has font-medium class for text weight', () => {
		render(BadgeTestWrapper, {});
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('font-medium');
	});

	it('has transition classes for smooth color changes', () => {
		render(BadgeTestWrapper, {});
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('transition-colors');
		expect(badge.className).toContain('duration-base');
	});

	// Custom class test
	it('applies custom class names', () => {
		render(BadgeTestWrapper, { class: 'custom-badge' });
		const badge = screen.getByText('Badge');
		expect(badge.className).toContain('custom-badge');
	});

	// Combination tests
	it('renders success variant with small size correctly', () => {
		render(BadgeTestWrapper, { variant: 'success', size: 'sm', text: 'Success' });
		const badge = screen.getByText('Success');
		expect(badge.className).toContain('text-success');
		expect(badge.className).toContain('text-xs');
	});

	it('renders error variant with large size correctly', () => {
		render(BadgeTestWrapper, { variant: 'error', size: 'lg', text: 'Error' });
		const badge = screen.getByText('Error');
		expect(badge.className).toContain('text-error');
		expect(badge.className).toContain('text-base');
	});
});
