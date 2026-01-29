import { render, screen } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import TagTestWrapper from './TagTestWrapper.svelte';

describe('Tag', () => {
	// Rendering tests
	it('renders with default props', () => {
		render(TagTestWrapper, {});
		const tag = screen.getByText('Tag');
		expect(tag).toBeInTheDocument();
	});

	it('renders with custom text', () => {
		render(TagTestWrapper, { text: 'Custom Label' });
		const tag = screen.getByText('Custom Label');
		expect(tag).toBeInTheDocument();
	});

	it('renders with label prop', () => {
		render(TagTestWrapper, { label: 'TypeScript' });
		const tag = screen.getByText('TypeScript');
		expect(tag).toBeInTheDocument();
	});

	// Element type tests
	it('renders as a span by default (non-clickable)', () => {
		render(TagTestWrapper, { text: 'Static' });
		const tag = screen.getByText('Static');
		expect(tag.tagName).toBe('SPAN');
	});

	it('renders as a button when onclick is provided', () => {
		const handleClick = vi.fn();
		render(TagTestWrapper, { text: 'Clickable', onclick: handleClick });
		const tag = screen.getByRole('button', { name: 'Clickable' });
		expect(tag).toBeInTheDocument();
		expect(tag.tagName).toBe('BUTTON');
	});

	// Variant tests
	it('renders with default variant', () => {
		render(TagTestWrapper, {});
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('bg-surface');
		expect(tag.className).toContain('text-text');
		expect(tag.className).toContain('border-border');
	});

	it('renders with primary variant', () => {
		render(TagTestWrapper, { variant: 'primary' });
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('text-brand');
		expect(tag.className).toContain('bg-brand/10');
	});

	it('renders with success variant', () => {
		render(TagTestWrapper, { variant: 'success' });
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('text-success');
		expect(tag.className).toContain('bg-success/10');
	});

	it('renders with warning variant', () => {
		render(TagTestWrapper, { variant: 'warning' });
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('text-warning');
		expect(tag.className).toContain('bg-warning/10');
	});

	it('renders with error variant', () => {
		render(TagTestWrapper, { variant: 'error' });
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('text-error');
		expect(tag.className).toContain('bg-error/10');
	});

	it('renders with info variant', () => {
		render(TagTestWrapper, { variant: 'info' });
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('text-info');
		expect(tag.className).toContain('bg-info/10');
	});

	// Size tests
	it('renders with medium size by default', () => {
		render(TagTestWrapper, {});
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('text-sm');
		expect(tag.className).toContain('px-2.5');
	});

	it('renders with small size', () => {
		render(TagTestWrapper, { size: 'sm' });
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('text-xs');
		expect(tag.className).toContain('px-2');
	});

	it('renders with large size', () => {
		render(TagTestWrapper, { size: 'lg' });
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('text-base');
		expect(tag.className).toContain('px-3');
	});

	// Style tests
	it('has rounded-full class for pill shape', () => {
		render(TagTestWrapper, {});
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('rounded-full');
	});

	it('has inline-flex class for proper alignment', () => {
		render(TagTestWrapper, {});
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('inline-flex');
	});

	it('has font-medium class for text weight', () => {
		render(TagTestWrapper, {});
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('font-medium');
	});

	it('has transition classes for smooth color changes', () => {
		render(TagTestWrapper, {});
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('transition-colors');
		expect(tag.className).toContain('duration-base');
	});

	// Custom class test
	it('applies custom class names', () => {
		render(TagTestWrapper, { class: 'custom-tag' });
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('custom-tag');
	});

	// Disabled state tests
	it('applies disabled styling when disabled', () => {
		render(TagTestWrapper, { disabled: true });
		const tag = screen.getByText('Tag');
		expect(tag.className).toContain('opacity-50');
		expect(tag.className).toContain('cursor-not-allowed');
	});

	it('sets aria-disabled on span when disabled', () => {
		render(TagTestWrapper, { disabled: true });
		const tag = screen.getByText('Tag');
		expect(tag).toHaveAttribute('aria-disabled', 'true');
	});

	it('disables button element when disabled and clickable', () => {
		const handleClick = vi.fn();
		render(TagTestWrapper, { disabled: true, onclick: handleClick, text: 'Disabled' });
		const tag = screen.getByRole('button', { name: 'Disabled' });
		expect(tag).toBeDisabled();
		expect(tag).toHaveAttribute('aria-disabled', 'true');
	});

	// Clickable state tests
	it('applies interactive classes when clickable', () => {
		const handleClick = vi.fn();
		render(TagTestWrapper, { onclick: handleClick });
		const tag = screen.getByRole('button', { name: 'Tag' });
		expect(tag.className).toContain('cursor-pointer');
		expect(tag.className).toContain('hover:opacity-80');
	});

	it('does not apply interactive classes when not clickable', () => {
		render(TagTestWrapper, {});
		const tag = screen.getByText('Tag');
		expect(tag.className).not.toContain('cursor-pointer');
	});

	it('calls onclick handler when clicked', () => {
		const handleClick = vi.fn();
		render(TagTestWrapper, { onclick: handleClick, text: 'Click me' });
		const tag = screen.getByRole('button', { name: 'Click me' });
		tag.click();
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('does not call onclick when disabled', () => {
		const handleClick = vi.fn();
		render(TagTestWrapper, { disabled: true, onclick: handleClick, text: 'Disabled' });
		const tag = screen.getByRole('button', { name: 'Disabled' });
		tag.click();
		expect(handleClick).not.toHaveBeenCalled();
	});

	// Removable state tests
	it('shows remove button when removable is true (non-clickable tag)', () => {
		render(TagTestWrapper, { removable: true, text: 'Removable' });
		const removeBtn = screen.getByLabelText('Remove Removable');
		expect(removeBtn).toBeInTheDocument();
	});

	it('shows remove button when removable is true (clickable tag)', () => {
		const handleClick = vi.fn();
		render(TagTestWrapper, { removable: true, onclick: handleClick, text: 'Removable' });
		const removeBtn = screen.getByLabelText('Remove Removable');
		expect(removeBtn).toBeInTheDocument();
	});

	it('does not show remove button when removable is false', () => {
		render(TagTestWrapper, { text: 'Static' });
		const removeBtn = screen.queryByLabelText('Remove Static');
		expect(removeBtn).not.toBeInTheDocument();
	});

	it('calls onremove when remove button is clicked', () => {
		const handleRemove = vi.fn();
		render(TagTestWrapper, { removable: true, onremove: handleRemove, text: 'Removable' });
		const removeBtn = screen.getByLabelText('Remove Removable');
		removeBtn.click();
		expect(handleRemove).toHaveBeenCalledTimes(1);
	});

	it('does not call onremove when disabled', () => {
		const handleRemove = vi.fn();
		render(TagTestWrapper, {
			removable: true,
			onremove: handleRemove,
			disabled: true,
			text: 'Disabled'
		});
		const removeBtn = screen.getByLabelText('Remove Disabled');
		removeBtn.click();
		expect(handleRemove).not.toHaveBeenCalled();
	});

	// Combination tests
	it('renders success variant with small size correctly', () => {
		render(TagTestWrapper, { variant: 'success', size: 'sm', text: 'Success' });
		const tag = screen.getByText('Success');
		expect(tag.className).toContain('text-success');
		expect(tag.className).toContain('text-xs');
	});

	it('renders error variant with large size correctly', () => {
		render(TagTestWrapper, { variant: 'error', size: 'lg', text: 'Error' });
		const tag = screen.getByText('Error');
		expect(tag.className).toContain('text-error');
		expect(tag.className).toContain('text-base');
	});

	it('renders clickable removable tag correctly', () => {
		const handleClick = vi.fn();
		const handleRemove = vi.fn();
		render(TagTestWrapper, {
			onclick: handleClick,
			removable: true,
			onremove: handleRemove,
			text: 'Interactive'
		});
		const tag = screen.getByRole('button', { name: 'Interactive' });
		expect(tag).toBeInTheDocument();
		const removeBtn = screen.getByLabelText('Remove Interactive');
		expect(removeBtn).toBeInTheDocument();

		// Clicking remove should call onremove but not onclick (stopPropagation)
		removeBtn.click();
		expect(handleRemove).toHaveBeenCalledTimes(1);
	});
});
