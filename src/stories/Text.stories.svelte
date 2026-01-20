<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TextTestWrapper from '../lib/design-system/primitives/TextTestWrapper.svelte';

	// Text component with semantic HTML elements and consistent typography styling.
	// Accessibility: Uses semantic elements (h1-h6, p, span, label) based on variant. WCAG AA color contrast.
	// Variants: heading (h2, 2xl, bold), body (p, base, normal), caption (span, sm, normal), label (label, sm, medium).

	const { Story } = defineMeta({
		title: 'Primitive/Text',
		component: TextTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['heading', 'body', 'caption', 'label'],
				description: 'The semantic variant (sets default element, size, and weight)',
				table: {
					type: { summary: 'TextVariant' },
					defaultValue: { summary: 'body' }
				}
			},
			as: {
				control: { type: 'select' },
				options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'div'],
				description: 'Override the HTML element to render',
				table: {
					type: { summary: 'TextElement' },
					defaultValue: { summary: 'based on variant' }
				}
			},
			size: {
				control: { type: 'select' },
				options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'],
				description: 'The font size',
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'based on variant' }
				}
			},
			weight: {
				control: { type: 'select' },
				options: ['normal', 'medium', 'semibold', 'bold'],
				description: 'The font weight',
				table: {
					type: { summary: 'string' },
					defaultValue: { summary: 'based on variant' }
				}
			},
			align: {
				control: { type: 'select' },
				options: ['left', 'center', 'right'],
				description: 'Text alignment',
				table: {
					type: { summary: 'TextAlign' },
					defaultValue: { summary: 'left' }
				}
			},
			color: {
				control: { type: 'select' },
				options: ['text', 'subtext', 'brand', 'error', 'bg'],
				description: 'The text color using theme tokens',
				table: {
					type: { summary: 'ColorToken' },
					defaultValue: { summary: 'text' }
				}
			},
			italic: {
				control: 'boolean',
				description: 'Render text in italics',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'false' }
				}
			},
			truncate: {
				control: 'boolean',
				description: 'Truncate text with ellipsis',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'false' }
				}
			}
		}
	});
</script>

<!-- Variant Examples -->
<Story
	name="Heading Variant"
	args={{
		variant: 'heading',
		text: 'This is a heading'
	}}
/>

<Story
	name="Body Variant"
	args={{
		variant: 'body',
		text: 'This is body text with normal font weight and base size'
	}}
/>

<Story
	name="Caption Variant"
	args={{
		variant: 'caption',
		text: 'This is a caption with smaller text'
	}}
/>

<Story
	name="Label Variant"
	args={{
		variant: 'label',
		text: 'Form Label'
	}}
/>

<!-- Semantic HTML Elements -->
<Story
	name="H1 Element"
	args={{
		variant: 'heading',
		as: 'h1',
		size: '4xl',
		text: 'Main Page Title (H1)'
	}}
/>

<Story
	name="H2 Element"
	args={{
		variant: 'heading',
		as: 'h2',
		size: '3xl',
		text: 'Section Heading (H2)'
	}}
/>

<Story
	name="H3 Element"
	args={{
		variant: 'heading',
		as: 'h3',
		size: '2xl',
		text: 'Subsection Heading (H3)'
	}}
/>

<Story
	name="H4 Element"
	args={{
		variant: 'heading',
		as: 'h4',
		size: 'xl',
		text: 'Sub-subsection Heading (H4)'
	}}
/>

<Story
	name="Paragraph"
	args={{
		variant: 'body',
		as: 'p',
		text: 'A paragraph of body text for content.'
	}}
/>

<Story
	name="Span"
	args={{
		variant: 'caption',
		as: 'span',
		text: 'Inline span element'
	}}
/>

<!-- Size Examples -->
<Story
	name="XS Size"
	args={{
		size: 'xs',
		text: 'Extra small text (xs)'
	}}
/>

<Story
	name="SM Size"
	args={{
		size: 'sm',
		text: 'Small text (sm)'
	}}
/>

<Story
	name="Base Size"
	args={{
		size: 'base',
		text: 'Base text size (base)'
	}}
/>

<Story
	name="LG Size"
	args={{
		size: 'lg',
		text: 'Large text (lg)'
	}}
/>

<Story
	name="XL Size"
	args={{
		size: 'xl',
		text: 'Extra large text (xl)'
	}}
/>

<Story
	name="Size2XL"
	args={{
		size: '2xl',
		text: '2X large text (2xl)'
	}}
/>

<Story
	name="Size3XL"
	args={{
		size: '3xl',
		text: '3X large text (3xl)'
	}}
/>

<Story
	name="Size4XL"
	args={{
		size: '4xl',
		text: '4X large text (4xl)'
	}}
/>

<!-- Weight Examples -->
<Story
	name="Normal Weight"
	args={{
		weight: 'normal',
		text: 'Normal font weight'
	}}
/>

<Story
	name="Medium Weight"
	args={{
		weight: 'medium',
		text: 'Medium font weight'
	}}
/>

<Story
	name="Semibold Weight"
	args={{
		weight: 'semibold',
		text: 'Semibold font weight'
	}}
/>

<Story
	name="Bold Weight"
	args={{
		weight: 'bold',
		text: 'Bold font weight'
	}}
/>

<!-- Alignment Examples -->
<Story
	name="Left Aligned"
	args={{
		align: 'left',
		text: 'Left aligned text (default)'
	}}
/>

<Story
	name="Center Aligned"
	args={{
		align: 'center',
		text: 'Center aligned text'
	}}
/>

<Story
	name="Right Aligned"
	args={{
		align: 'right',
		text: 'Right aligned text'
	}}
/>

<!-- Color Examples -->
<Story
	name="Text Color"
	args={{
		color: 'text',
		text: 'Primary text color (default)'
	}}
/>

<Story
	name="Subtext Color"
	args={{
		color: 'subtext',
		text: 'Secondary subtext color'
	}}
/>

<Story
	name="Brand Color"
	args={{
		color: 'brand',
		text: 'Brand color text'
	}}
/>

<Story
	name="Error Color"
	args={{
		color: 'error',
		text: 'Error color text'
	}}
/>

<!-- Special Features -->
<Story
	name="Italic"
	args={{
		italic: true,
		text: 'This text is italicized'
	}}
/>

<Story
	name="Truncate"
	args={{
		truncate: true,
		text: 'This is a very long piece of text that will be truncated with an ellipsis when it exceeds the container width. You can use this feature for single-line text overflow handling.'
	}}
/>

<!-- Combined Examples -->
<Story
	name="Large Bold Heading"
	args={{
		as: 'h1',
		size: '4xl',
		weight: 'bold',
		color: 'text',
		text: 'Large Bold Heading'
	}}
/>

<Story
	name="Centered Brand Subheading"
	args={{
		as: 'h3',
		size: 'xl',
		weight: 'semibold',
		align: 'center',
		color: 'brand',
		text: 'Centered Brand Subheading'
	}}
/>

<Story
	name="Small Italic Caption"
	args={{
		variant: 'caption',
		size: 'sm',
		italic: true,
		color: 'subtext',
		text: 'Small italic caption text'
	}}
/>

<Story
	name="Error Message"
	args={{
		variant: 'caption',
		size: 'sm',
		weight: 'medium',
		color: 'error',
		text: 'This field is required'
	}}
/>

<Story
	name="Truncated Heading"
	args={{
		variant: 'heading',
		as: 'h2',
		truncate: true,
		text: 'This is a very long heading that will be truncated with ellipsis to prevent layout issues'
	}}
/>
