import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import ButtonTestWrapper from './ButtonTestWrapper.svelte';

describe('Button', () => {
	it('renders with default props', () => {
		render(ButtonTestWrapper, { text: 'Click me' });
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent('Click me');
		expect(button).toHaveAttribute('type', 'button');
	});

	it('renders with primary variant by default', () => {
		render(ButtonTestWrapper, { text: 'Primary' });
		const button = screen.getByRole('button');
		expect(button.className).toContain('bg-brand');
	});

	it('renders with secondary variant', () => {
		render(ButtonTestWrapper, { variant: 'secondary', text: 'Secondary' });
		const button = screen.getByRole('button');
		expect(button.className).toContain('bg-surface');
		expect(button.className).toContain('border-border');
	});

	it('renders with ghost variant', () => {
		render(ButtonTestWrapper, { variant: 'ghost', text: 'Ghost' });
		const button = screen.getByRole('button');
		expect(button.className).toContain('bg-transparent');
	});

	it('renders with small size', () => {
		render(ButtonTestWrapper, { size: 'sm', text: 'Small' });
		const button = screen.getByRole('button');
		expect(button.className).toContain('px-3');
		expect(button.className).toContain('text-sm');
	});

	it('renders with medium size by default', () => {
		render(ButtonTestWrapper, { text: 'Medium' });
		const button = screen.getByRole('button');
		expect(button.className).toContain('px-4');
		expect(button.className).toContain('text-base');
	});

	it('renders with large size', () => {
		render(ButtonTestWrapper, { size: 'lg', text: 'Large' });
		const button = screen.getByRole('button');
		expect(button.className).toContain('px-6');
		expect(button.className).toContain('text-lg');
	});

	it('disables button when disabled prop is true', () => {
		render(ButtonTestWrapper, { disabled: true, text: 'Disabled' });
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
	});

	it('disables button when loading prop is true', () => {
		render(ButtonTestWrapper, { loading: true, text: 'Loading' });
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
		expect(button).toHaveAttribute('aria-busy', 'true');
	});

	it('shows loading indicator when loading', () => {
		render(ButtonTestWrapper, { loading: true, text: 'Loading' });
		const spinner = screen.getByRole('status');
		expect(spinner).toBeInTheDocument();
		expect(spinner).toHaveAttribute('aria-label', 'Loading');
	});

	it('renders with submit type', () => {
		render(ButtonTestWrapper, { type: 'submit', text: 'Submit' });
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('type', 'submit');
	});

	it('renders with reset type', () => {
		render(ButtonTestWrapper, { type: 'reset', text: 'Reset' });
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('type', 'reset');
	});

	it('renders with aria-label', () => {
		render(ButtonTestWrapper, {
			ariaLabel: 'Close dialog',
			text: 'X'
		});
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('aria-label', 'Close dialog');
	});

	it('calls onclick handler when clicked', async () => {
		const handleClick = vi.fn();
		render(ButtonTestWrapper, {
			onclick: handleClick,
			text: 'Click me'
		});
		const button = screen.getByRole('button');
		await button.click();
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('does not call onclick when disabled', async () => {
		const handleClick = vi.fn();
		render(ButtonTestWrapper, {
			disabled: true,
			onclick: handleClick,
			text: 'Disabled'
		});
		const button = screen.getByRole('button');
		await button.click();
		expect(handleClick).not.toHaveBeenCalled();
	});

	it('applies base accessibility classes', () => {
		render(ButtonTestWrapper, { text: 'Button' });
		const button = screen.getByRole('button');
		expect(button.className).toContain('focus:outline-none');
		expect(button.className).toContain('focus:ring-2');
	});
});
