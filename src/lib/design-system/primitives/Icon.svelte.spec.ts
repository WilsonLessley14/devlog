import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import IconTestWrapper from './IconTestWrapper.svelte';

describe('Icon', () => {
	// Helper to get the icon span (works for both decorative and labeled icons)
	const getIconSpan = (container: HTMLElement): HTMLSpanElement => {
		const span = container.querySelector('span');
		if (!span) throw new Error('Icon span not found');
		return span;
	};

	it('renders with default props', () => {
		const { container } = render(IconTestWrapper, {});
		const icon = getIconSpan(container);
		expect(icon).toBeInTheDocument();
	});

	it('renders SVG content via slot', () => {
		render(IconTestWrapper, { showIcon: true });
		const svg = document.querySelector('svg');
		expect(svg).toBeInTheDocument();
	});

	// Size tests
	it('renders with medium size by default', () => {
		const { container } = render(IconTestWrapper, {});
		const icon = getIconSpan(container);
		expect(icon.className).toContain('h-5');
		expect(icon.className).toContain('w-5');
	});

	it('renders with xs size', () => {
		const { container } = render(IconTestWrapper, { size: 'xs' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('h-3');
		expect(icon.className).toContain('w-3');
	});

	it('renders with sm size', () => {
		const { container } = render(IconTestWrapper, { size: 'sm' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('h-4');
		expect(icon.className).toContain('w-4');
	});

	it('renders with lg size', () => {
		const { container } = render(IconTestWrapper, { size: 'lg' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('h-6');
		expect(icon.className).toContain('w-6');
	});

	it('renders with xl size', () => {
		const { container } = render(IconTestWrapper, { size: 'xl' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('h-8');
		expect(icon.className).toContain('w-8');
	});

	// Color tests
	it('renders with current color by default', () => {
		const { container } = render(IconTestWrapper, {});
		const icon = getIconSpan(container);
		expect(icon.className).toContain('text-current');
	});

	it('renders with primary color', () => {
		const { container } = render(IconTestWrapper, { color: 'primary' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('text-brand');
	});

	it('renders with secondary color', () => {
		const { container } = render(IconTestWrapper, { color: 'secondary' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('text-text');
	});

	it('renders with muted color', () => {
		const { container } = render(IconTestWrapper, { color: 'muted' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('text-subtext');
	});

	it('renders with success color', () => {
		const { container } = render(IconTestWrapper, { color: 'success' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('text-success');
	});

	it('renders with warning color', () => {
		const { container } = render(IconTestWrapper, { color: 'warning' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('text-warning');
	});

	it('renders with error color', () => {
		const { container } = render(IconTestWrapper, { color: 'error' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('text-error');
	});

	// Accessibility tests
	it('renders as decorative (aria-hidden) when no label is provided', () => {
		const { container } = render(IconTestWrapper, {});
		const icon = getIconSpan(container);
		expect(icon).toHaveAttribute('aria-hidden', 'true');
		expect(icon).not.toHaveAttribute('role');
	});

	it('renders as meaningful icon with role="img" when label is provided', () => {
		render(IconTestWrapper, { label: 'Favorite' });
		const icon = screen.getByRole('img');
		expect(icon).toHaveAttribute('aria-label', 'Favorite');
		expect(icon).not.toHaveAttribute('aria-hidden');
	});

	it('uses custom label for accessibility', () => {
		render(IconTestWrapper, { label: 'Add to favorites' });
		const icon = screen.getByRole('img');
		expect(icon).toHaveAttribute('aria-label', 'Add to favorites');
	});

	// Style tests
	it('has inline-flex class for proper alignment', () => {
		const { container } = render(IconTestWrapper, {});
		const icon = getIconSpan(container);
		expect(icon.className).toContain('inline-flex');
	});

	it('has shrink-0 class to prevent shrinking', () => {
		const { container } = render(IconTestWrapper, {});
		const icon = getIconSpan(container);
		expect(icon.className).toContain('shrink-0');
	});

	it('has items-center and justify-center for centering', () => {
		const { container } = render(IconTestWrapper, {});
		const icon = getIconSpan(container);
		expect(icon.className).toContain('items-center');
		expect(icon.className).toContain('justify-center');
	});

	// Custom class test
	it('applies custom class names', () => {
		const { container } = render(IconTestWrapper, { class: 'custom-icon' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('custom-icon');
	});

	// Combination tests
	it('renders with primary color and large size correctly', () => {
		const { container } = render(IconTestWrapper, { color: 'primary', size: 'lg' });
		const icon = getIconSpan(container);
		expect(icon.className).toContain('text-brand');
		expect(icon.className).toContain('h-6');
		expect(icon.className).toContain('w-6');
	});

	it('renders with error color, xs size, and label correctly', () => {
		render(IconTestWrapper, { color: 'error', size: 'xs', label: 'Error icon' });
		const icon = screen.getByRole('img');
		expect(icon.className).toContain('text-error');
		expect(icon.className).toContain('h-3');
		expect(icon).toHaveAttribute('aria-label', 'Error icon');
	});
});
