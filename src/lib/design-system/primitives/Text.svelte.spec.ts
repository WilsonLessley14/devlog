import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import TextTestWrapper from './TextTestWrapper.svelte';

describe('Text', () => {
	describe('Basic rendering', () => {
		it('renders with default props', () => {
			render(TextTestWrapper, { text: 'Hello World' });
			expect(screen.getByText('Hello World')).toBeInTheDocument();
		});

		it('renders as paragraph by default with body variant', () => {
			const { container } = render(TextTestWrapper, { text: 'Paragraph text' });
			const paragraph = container.querySelector('p');
			expect(paragraph).toBeInTheDocument();
			expect(paragraph).toHaveTextContent('Paragraph text');
		});
	});

	describe('Semantic elements', () => {
		it('renders as h1', () => {
			const { container } = render(TextTestWrapper, { as: 'h1', text: 'Heading 1' });
			const heading = container.querySelector('h1');
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveTextContent('Heading 1');
		});

		it('renders as h2', () => {
			const { container } = render(TextTestWrapper, { as: 'h2', text: 'Heading 2' });
			expect(container.querySelector('h2')).toBeInTheDocument();
		});

		it('renders as h3', () => {
			const { container } = render(TextTestWrapper, { as: 'h3', text: 'Heading 3' });
			expect(container.querySelector('h3')).toBeInTheDocument();
		});

		it('renders as span', () => {
			const { container } = render(TextTestWrapper, { as: 'span', text: 'Span text' });
			expect(container.querySelector('span')).toBeInTheDocument();
		});

		it('renders as label', () => {
			const { container } = render(TextTestWrapper, { as: 'label', text: 'Label text' });
			expect(container.querySelector('label')).toBeInTheDocument();
		});
	});

	describe('Variants', () => {
		it('renders heading variant with default styles', () => {
			const { container } = render(TextTestWrapper, { variant: 'heading', text: 'Heading' });
			const element = container.querySelector('h2');
			expect(element).toBeInTheDocument();
			expect(element?.className).toContain('text-2xl');
			expect(element?.className).toContain('font-bold');
		});

		it('renders body variant with default styles', () => {
			const { container } = render(TextTestWrapper, { variant: 'body', text: 'Body' });
			const element = container.querySelector('p');
			expect(element).toBeInTheDocument();
			expect(element?.className).toContain('text-base');
			expect(element?.className).toContain('font-normal');
		});

		it('renders caption variant with default styles', () => {
			const { container } = render(TextTestWrapper, { variant: 'caption', text: 'Caption' });
			const element = container.querySelector('span');
			expect(element).toBeInTheDocument();
			expect(element?.className).toContain('text-sm');
			expect(element?.className).toContain('font-normal');
		});

		it('renders label variant with default styles', () => {
			const { container } = render(TextTestWrapper, { variant: 'label', text: 'Label' });
			const element = container.querySelector('label');
			expect(element).toBeInTheDocument();
			expect(element?.className).toContain('text-sm');
			expect(element?.className).toContain('font-medium');
		});
	});

	describe('Sizes', () => {
		it('renders with xs size', () => {
			const { container } = render(TextTestWrapper, { size: 'xs', text: 'Extra small' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-xs');
		});

		it('renders with sm size', () => {
			const { container } = render(TextTestWrapper, { size: 'sm', text: 'Small' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-sm');
		});

		it('renders with base size', () => {
			const { container } = render(TextTestWrapper, { size: 'base', text: 'Base' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-base');
		});

		it('renders with lg size', () => {
			const { container } = render(TextTestWrapper, { size: 'lg', text: 'Large' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-lg');
		});

		it('renders with xl size', () => {
			const { container } = render(TextTestWrapper, { size: 'xl', text: 'XL' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-xl');
		});

		it('renders with 2xl size', () => {
			const { container } = render(TextTestWrapper, { size: '2xl', text: '2XL' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-2xl');
		});

		it('renders with 3xl size', () => {
			const { container } = render(TextTestWrapper, { size: '3xl', text: '3XL' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-3xl');
		});

		it('renders with 4xl size', () => {
			const { container } = render(TextTestWrapper, { size: '4xl', text: '4XL' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-4xl');
		});
	});

	describe('Font weights', () => {
		it('renders with normal weight', () => {
			const { container } = render(TextTestWrapper, { weight: 'normal', text: 'Normal' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('font-normal');
		});

		it('renders with medium weight', () => {
			const { container } = render(TextTestWrapper, { weight: 'medium', text: 'Medium' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('font-medium');
		});

		it('renders with semibold weight', () => {
			const { container } = render(TextTestWrapper, { weight: 'semibold', text: 'Semibold' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('font-semibold');
		});

		it('renders with bold weight', () => {
			const { container } = render(TextTestWrapper, { weight: 'bold', text: 'Bold' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('font-bold');
		});
	});

	describe('Text alignment', () => {
		it('renders with left alignment by default', () => {
			const { container } = render(TextTestWrapper, { text: 'Left' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-left');
		});

		it('renders with center alignment', () => {
			const { container } = render(TextTestWrapper, { align: 'center', text: 'Center' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-center');
		});

		it('renders with right alignment', () => {
			const { container } = render(TextTestWrapper, { align: 'right', text: 'Right' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-right');
		});
	});

	describe('Colors', () => {
		it('renders with default text color', () => {
			const { container } = render(TextTestWrapper, { text: 'Default color' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-text');
		});

		it('renders with subtext color', () => {
			const { container } = render(TextTestWrapper, { color: 'subtext', text: 'Subtext' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-subtext');
		});

		it('renders with brand color', () => {
			const { container } = render(TextTestWrapper, { color: 'brand', text: 'Brand' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-brand');
		});

		it('renders with success color', () => {
			const { container } = render(TextTestWrapper, { color: 'success', text: 'Success' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-success');
		});

		it('renders with error color', () => {
			const { container } = render(TextTestWrapper, { color: 'error', text: 'Error' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('text-error');
		});
	});

	describe('Text styles', () => {
		it('renders italic text', () => {
			const { container } = render(TextTestWrapper, { italic: true, text: 'Italic' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('italic');
		});

		it('renders truncated text', () => {
			const { container } = render(TextTestWrapper, { truncate: true, text: 'Truncate' });
			const element = container.querySelector('p');
			expect(element?.className).toContain('truncate');
		});

		it('renders with custom class', () => {
			const { container } = render(TextTestWrapper, {
				class: 'custom-class',
				text: 'Custom'
			});
			const element = container.querySelector('p');
			expect(element?.className).toContain('custom-class');
		});
	});

	describe('Combined props', () => {
		it('combines variant, size, weight, and color', () => {
			const { container } = render(TextTestWrapper, {
				as: 'h1',
				size: '4xl',
				weight: 'bold',
				color: 'brand',
				align: 'center',
				text: 'Combined'
			});
			const element = container.querySelector('h1');
			expect(element?.className).toContain('text-4xl');
			expect(element?.className).toContain('font-bold');
			expect(element?.className).toContain('text-brand');
			expect(element?.className).toContain('text-center');
		});

		it('overrides variant defaults with explicit props', () => {
			const { container } = render(TextTestWrapper, {
				variant: 'heading',
				size: 'sm',
				weight: 'normal',
				text: 'Override'
			});
			const element = container.querySelector('h2');
			// Explicit size/weight should override variant defaults
			expect(element?.className).toContain('text-sm');
			expect(element?.className).toContain('font-normal');
		});
	});
});
