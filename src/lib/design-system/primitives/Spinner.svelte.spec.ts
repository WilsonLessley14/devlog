import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import SpinnerTestWrapper from './SpinnerTestWrapper.svelte';

describe('Spinner', () => {
	it('renders with default props', () => {
		render(SpinnerTestWrapper, {});
		const spinner = screen.getByRole('status');
		expect(spinner).toBeInTheDocument();
		expect(spinner).toHaveAttribute('aria-label', 'Loading');
	});

	it('renders with medium size by default', () => {
		render(SpinnerTestWrapper, {});
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('h-8');
		expect(spinner.className).toContain('w-8');
	});

	it('renders with small size', () => {
		render(SpinnerTestWrapper, { size: 'sm' });
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('h-4');
		expect(spinner.className).toContain('w-4');
	});

	it('renders with large size', () => {
		render(SpinnerTestWrapper, { size: 'lg' });
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('h-12');
		expect(spinner.className).toContain('w-12');
	});

	it('renders with brand color by default', () => {
		render(SpinnerTestWrapper, {});
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('border-brand');
	});

	it('renders with success color', () => {
		render(SpinnerTestWrapper, { color: 'success' });
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('border-success');
	});

	it('renders with error color', () => {
		render(SpinnerTestWrapper, { color: 'error' });
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('border-error');
	});

	it('renders with text color', () => {
		render(SpinnerTestWrapper, { color: 'text' });
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('border-text');
	});

	it('renders with custom label for accessibility', () => {
		render(SpinnerTestWrapper, { label: 'Loading content' });
		const spinner = screen.getByRole('status');
		expect(spinner).toHaveAttribute('aria-label', 'Loading content');
	});

	it('contains screen reader text', () => {
		render(SpinnerTestWrapper, { label: 'Fetching data' });
		const srText = screen.getByText('Fetching data');
		expect(srText).toBeInTheDocument();
		expect(srText).toHaveClass('sr-only');
	});

	it('has role status for accessibility', () => {
		render(SpinnerTestWrapper, {});
		const spinner = screen.getByRole('status');
		expect(spinner).toBeInTheDocument();
	});

	it('includes spin animation class', () => {
		render(SpinnerTestWrapper, {});
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('animate-spin');
	});

	it('has rounded full class for circular shape', () => {
		render(SpinnerTestWrapper, {});
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('rounded-full');
	});

	it('has transparent top and right borders for spinner effect', () => {
		render(SpinnerTestWrapper, {});
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('border-t-transparent');
		expect(spinner.className).toContain('border-r-transparent');
	});

	it('applies custom class names', () => {
		render(SpinnerTestWrapper, { class: 'custom-spinner' });
		const spinner = screen.getByRole('status');
		expect(spinner.className).toContain('custom-spinner');
	});
});
