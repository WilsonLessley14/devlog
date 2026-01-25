import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import Input from './Input.svelte';

describe('Input', () => {
	describe('Basic rendering', () => {
		it('renders with default props', () => {
			render(Input);
			const input = screen.getByRole('textbox');
			expect(input).toBeInTheDocument();
			expect(input).toHaveAttribute('type', 'text');
		});

		it('renders with custom placeholder', () => {
			render(Input, { placeholder: 'Enter your name' });
			const input = screen.getByPlaceholderText('Enter your name');
			expect(input).toBeInTheDocument();
		});

		it('renders with label', () => {
			render(Input, { label: 'Email', id: 'email-input' });
			const label = screen.getByText('Email');
			const input = screen.getByLabelText('Email');
			expect(label).toBeInTheDocument();
			expect(input).toHaveAttribute('id', 'email-input');
		});

		it('generates unique ID when not provided', () => {
			render(Input, { label: 'Username' });
			const input = screen.getByLabelText('Username');
			expect(input).toHaveAttribute('id');
			expect(input.id).toMatch(/^input-/);
		});
	});

	describe('Input types', () => {
		it('renders email input', () => {
			render(Input, { type: 'email' });
			const input = screen.getByRole('textbox');
			expect(input).toHaveAttribute('type', 'email');
		});

		it('renders password input', () => {
			render(Input, { type: 'password' });
			const input = document.querySelector('input[type="password"]');
			expect(input).toBeInTheDocument();
		});

		it('renders search input', () => {
			render(Input, { type: 'search' });
			const input = screen.getByRole('searchbox');
			expect(input).toBeInTheDocument();
		});

		it('renders number input', () => {
			render(Input, { type: 'number' });
			const input = document.querySelector('input[type="number"]');
			expect(input).toBeInTheDocument();
		});
	});

	describe('Sizes', () => {
		it('renders with small size', () => {
			render(Input, { size: 'sm' });
			const input = screen.getByRole('textbox');
			expect(input.className).toContain('px-3');
			expect(input.className).toContain('text-sm');
		});

		it('renders with medium size by default', () => {
			render(Input);
			const input = screen.getByRole('textbox');
			expect(input.className).toContain('px-4');
			expect(input.className).toContain('text-base');
		});

		it('renders with large size', () => {
			render(Input, { size: 'lg' });
			const input = screen.getByRole('textbox');
			expect(input.className).toContain('px-5');
			expect(input.className).toContain('text-lg');
		});
	});

	describe('States', () => {
		it('disables input when disabled prop is true', () => {
			render(Input, { disabled: true });
			const input = screen.getByRole('textbox');
			expect(input).toBeDisabled();
		});

		it('makes input readonly', () => {
			render(Input, { readonly: true });
			const input = screen.getByRole('textbox');
			expect(input).toHaveAttribute('readonly');
		});

		it('marks input as required', () => {
			render(Input, { required: true, label: 'Name' });
			const input = screen.getByRole('textbox');
			expect(input).toHaveAttribute('required');
			expect(input).toHaveAttribute('aria-required', 'true');
			expect(screen.getByText('*')).toBeInTheDocument();
		});

		it('applies error styles when error is true', () => {
			render(Input, { error: true });
			const input = screen.getByRole('textbox');
			expect(input.className).toContain('border-error');
			expect(input).toHaveAttribute('aria-invalid', 'true');
		});
	});

	describe('Validation and messages', () => {
		it('displays helper text', () => {
			render(Input, { helperText: 'Enter a valid email address' });
			const helperText = screen.getByText('Enter a valid email address');
			expect(helperText).toBeInTheDocument();
			expect(helperText).toHaveClass('text-subtext');
		});

		it('displays error message when error is true', () => {
			render(Input, { error: true, errorMessage: 'This field is required' });
			const errorMessage = screen.getByText('This field is required');
			expect(errorMessage).toBeInTheDocument();
			expect(errorMessage).toHaveClass('text-error');
			expect(errorMessage).toHaveAttribute('role', 'alert');
		});

		it('hides helper text when error is shown', () => {
			render(Input, {
				error: true,
				errorMessage: 'Invalid input',
				helperText: 'Helper text'
			});
			expect(screen.getByText('Invalid input')).toBeInTheDocument();
			expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
		});

		it('links error message with aria-describedby', () => {
			render(Input, { error: true, errorMessage: 'Error!', id: 'test-input' });
			const input = screen.getByRole('textbox');
			expect(input).toHaveAttribute('aria-describedby', 'test-input-error');
		});

		it('links helper text with aria-describedby', () => {
			render(Input, { helperText: 'Help!', id: 'test-input' });
			const input = screen.getByRole('textbox');
			expect(input).toHaveAttribute('aria-describedby', 'test-input-helper');
		});
	});

	describe('Accessibility', () => {
		it('renders with aria-label', () => {
			render(Input, { ariaLabel: 'Search products' });
			const input = screen.getByRole('textbox');
			expect(input).toHaveAttribute('aria-label', 'Search products');
		});

		it('uses custom aria-describedby when provided', () => {
			render(Input, { ariaDescribedBy: 'custom-description' });
			const input = screen.getByRole('textbox');
			expect(input).toHaveAttribute('aria-describedby', 'custom-description');
		});

		it('includes both helper text and error in aria-describedby', () => {
			render(Input, {
				error: true,
				errorMessage: 'Error',
				helperText: 'Help',
				id: 'test'
			});
			const input = screen.getByRole('textbox');
			// Both helper and error IDs are included in aria-describedby
			expect(input).toHaveAttribute('aria-describedby', 'test-helper test-error');
		});
	});

	describe('User interactions', () => {
		it('updates value on input', async () => {
			const user = userEvent.setup();
			render(Input);
			const input = screen.getByRole('textbox') as HTMLInputElement;

			await user.type(input, 'Hello');
			expect(input.value).toBe('Hello');
		});

		it('calls oninput handler', async () => {
			const user = userEvent.setup();
			const handleInput = vi.fn();
			render(Input, { oninput: handleInput });
			const input = screen.getByRole('textbox');

			await user.type(input, 'a');
			expect(handleInput).toHaveBeenCalled();
		});

		it('calls onchange handler', async () => {
			const user = userEvent.setup();
			const handleChange = vi.fn();
			render(Input, { onchange: handleChange });
			const input = screen.getByRole('textbox');

			await user.type(input, 'test');
			await user.tab(); // Trigger blur which causes change
			expect(handleChange).toHaveBeenCalled();
		});

		it('calls onfocus handler', async () => {
			const handleFocus = vi.fn();
			render(Input, { onfocus: handleFocus });
			const input = screen.getByRole('textbox');

			input.focus();
			expect(handleFocus).toHaveBeenCalledTimes(1);
		});

		it('calls onblur handler', async () => {
			const handleBlur = vi.fn();
			render(Input, { onblur: handleBlur });
			const input = screen.getByRole('textbox');

			input.focus();
			input.blur();
			expect(handleBlur).toHaveBeenCalledTimes(1);
		});
	});

	describe('Additional attributes', () => {
		it('renders with name attribute', () => {
			render(Input, { name: 'username' });
			const input = screen.getByRole('textbox');
			expect(input).toHaveAttribute('name', 'username');
		});

		it('renders with autocomplete attribute', () => {
			render(Input, { autocomplete: 'email' });
			const input = screen.getByRole('textbox');
			expect(input).toHaveAttribute('autocomplete', 'email');
		});
	});
});
