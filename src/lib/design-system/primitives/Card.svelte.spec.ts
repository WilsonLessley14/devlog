import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import CardTestWrapper from './CardTestWrapper.svelte';

describe('Card', () => {
	describe('content variant', () => {
		it('renders content variant by default', () => {
			render(CardTestWrapper, { text: 'Test content' });
			expect(screen.getByText('Test content')).toBeInTheDocument();
		});

		it('renders with content variant explicitly', () => {
			render(CardTestWrapper, { variant: 'content', text: 'Content card text' });
			expect(screen.getByText('Content card text')).toBeInTheDocument();
		});

		it('renders title slot when provided', () => {
			render(CardTestWrapper, {
				variant: 'content',
				text: 'Card body',
				titleText: 'Card Title'
			});
			expect(screen.getByText('Card Title')).toBeInTheDocument();
			expect(screen.getByText('Card body')).toBeInTheDocument();
		});

		it('applies content variant classes', () => {
			render(CardTestWrapper, { variant: 'content', text: 'Styled content' });
			const cardText = screen.getByText('Styled content');
			const card = cardText.closest('div');
			expect(card).toHaveClass('bg-surface', 'rounded-lg', 'p-6', 'border-border', 'border');
		});
	});

	describe('code variant', () => {
		it('renders code variant', () => {
			render(CardTestWrapper, { variant: 'code', text: 'const x = 1;' });
			expect(screen.getByText('const x = 1;')).toBeInTheDocument();
		});

		it('applies code variant classes', () => {
			render(CardTestWrapper, { variant: 'code', text: 'code example' });
			const codeText = screen.getByText('code example');
			// Code variant wraps content in a <code> element
			expect(codeText.tagName.toLowerCase()).toBe('code');
			expect(codeText).toHaveClass('font-mono', 'text-sm', 'text-subtext');
		});

		it('has rounded-md instead of rounded-lg for code variant', () => {
			render(CardTestWrapper, { variant: 'code', text: 'code block' });
			const codeElement = screen.getByText('code block');
			const card = codeElement.closest('div');
			expect(card).toHaveClass('rounded-md');
			expect(card).not.toHaveClass('rounded-lg');
		});
	});

	describe('custom classes', () => {
		it('accepts additional class names', () => {
			render(CardTestWrapper, {
				variant: 'content',
				text: 'Custom class card',
				class: 'mt-4 custom-class'
			});
			const cardText = screen.getByText('Custom class card');
			const card = cardText.closest('div');
			expect(card).toHaveClass('mt-4', 'custom-class');
		});
	});
});
