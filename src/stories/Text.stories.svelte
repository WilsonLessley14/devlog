<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TextTestWrapper from '../lib/design-system/primitives/TextTestWrapper.svelte';

	const { Story } = defineMeta({
		title: 'Primitive/Text',
		component: TextTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			as: {
				control: { type: 'select' },
				options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label']
			},
			variant: {
				control: { type: 'select' },
				options: ['heading', 'body', 'caption', 'label']
			},
			size: {
				control: { type: 'select' },
				options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl']
			},
			weight: {
				control: { type: 'select' },
				options: ['normal', 'medium', 'semibold', 'bold']
			},
			align: {
				control: { type: 'select' },
				options: ['left', 'center', 'right']
			},
			color: {
				control: { type: 'select' },
				options: [
					'text',
					'subtext',
					'brand',
					'success',
					'error',
					'warning',
					'info',
					'bg',
					'surface'
				]
			},
			italic: {
				control: { type: 'boolean' }
			},
			truncate: {
				control: { type: 'boolean' }
			}
		}
	});
</script>

<!-- Variants -->
<Story name="Heading Variant" args={{ variant: 'heading', text: 'This is a heading' }} />

<Story
	name="Body Variant"
	args={{ variant: 'body', text: 'This is body text for paragraphs and general content.' }}
/>

<Story
	name="Caption Variant"
	args={{ variant: 'caption', text: 'This is caption text for small annotations.' }}
/>

<Story name="Label Variant" args={{ variant: 'label', text: 'Form Label' }} />

<!-- Sizes -->
<Story name="Extra Small" args={{ size: 'xs', text: 'Extra small text (xs)' }} />

<Story name="Small" args={{ size: 'sm', text: 'Small text (sm)' }} />

<Story name="Base" args={{ size: 'base', text: 'Base size text (base)' }} />

<Story name="Large" args={{ size: 'lg', text: 'Large text (lg)' }} />

<Story name="Extra Large" args={{ size: 'xl', text: 'Extra large text (xl)' }} />

<Story name="Size 2XL" args={{ size: '2xl', text: 'Double extra large text (2xl)' }} />

<Story name="Size 3XL" args={{ size: '3xl', text: 'Triple extra large text (3xl)' }} />

<Story name="Size 4XL" args={{ size: '4xl', text: 'Quadruple extra large text (4xl)' }} />

<!-- Weights -->
<Story name="Normal Weight" args={{ weight: 'normal', text: 'Normal weight text' }} />

<Story name="Medium Weight" args={{ weight: 'medium', text: 'Medium weight text' }} />

<Story name="Semibold Weight" args={{ weight: 'semibold', text: 'Semibold weight text' }} />

<Story name="Bold Weight" args={{ weight: 'bold', text: 'Bold weight text' }} />

<!-- Colors -->
<Story name="Text Color" args={{ color: 'text', text: 'Default text color' }} />

<Story
	name="Subtext Color"
	args={{ color: 'subtext', text: 'Subtext color for secondary content' }}
/>

<Story name="Brand Color" args={{ color: 'brand', text: 'Brand color for emphasis' }} />

<Story
	name="Success Color"
	args={{ color: 'success', text: 'Success color for positive messages' }}
/>

<Story name="Error Color" args={{ color: 'error', text: 'Error color for alerts' }} />

<Story name="Warning Color" args={{ color: 'warning', text: 'Warning color for caution' }} />

<Story name="Info Color" args={{ color: 'info', text: 'Info color for information' }} />

<!-- Semantic Elements -->
<Story
	name="H1 Element"
	args={{ as: 'h1', variant: 'heading', size: '4xl', text: 'Heading 1 (h1)' }}
/>

<Story
	name="H2 Element"
	args={{ as: 'h2', variant: 'heading', size: '3xl', text: 'Heading 2 (h2)' }}
/>

<Story
	name="H3 Element"
	args={{ as: 'h3', variant: 'heading', size: '2xl', text: 'Heading 3 (h3)' }}
/>

<Story
	name="H4 Element"
	args={{ as: 'h4', variant: 'heading', size: 'xl', text: 'Heading 4 (h4)' }}
/>

<Story
	name="H5 Element"
	args={{ as: 'h5', variant: 'heading', size: 'lg', text: 'Heading 5 (h5)' }}
/>

<Story
	name="H6 Element"
	args={{ as: 'h6', variant: 'heading', size: 'base', text: 'Heading 6 (h6)' }}
/>

<Story
	name="Paragraph Element"
	args={{ as: 'p', variant: 'body', text: 'This is a paragraph element.' }}
/>

<Story
	name="Span Element"
	args={{ as: 'span', variant: 'body', text: 'This is an inline span element.' }}
/>

<!-- Special Features -->
<Story name="Italic Text" args={{ italic: true, text: 'This text is italicized' }} />

<Story
	name="Truncated Text"
	args={{
		truncate: true,
		text: 'This is a very long text that should be truncated when it exceeds the container width. It will show an ellipsis at the end.',
		class: 'max-w-xs'
	}}
/>

<!-- Alignment -->
<Story
	name="Left Aligned"
	args={{ align: 'left', text: 'Left aligned text', class: 'w-full bg-surface p-2' }}
/>

<Story
	name="Center Aligned"
	args={{ align: 'center', text: 'Center aligned text', class: 'w-full bg-surface p-2' }}
/>

<Story
	name="Right Aligned"
	args={{ align: 'right', text: 'Right aligned text', class: 'w-full bg-surface p-2' }}
/>

<!-- All Variants Showcase -->
<Story name="All Variants">
	<div class="flex flex-col gap-4">
		<TextTestWrapper variant="heading" text="Heading variant - for titles and headers" />
		<TextTestWrapper variant="body" text="Body variant - for paragraphs and general content." />
		<TextTestWrapper
			variant="caption"
			text="Caption variant - for small annotations and metadata."
		/>
		<TextTestWrapper variant="label" text="Label variant - for form labels" />
	</div>
</Story>

<!-- All Sizes Showcase -->
<Story name="All Sizes">
	<div class="flex flex-col gap-2">
		<TextTestWrapper size="xs" text="Extra small (xs)" />
		<TextTestWrapper size="sm" text="Small (sm)" />
		<TextTestWrapper size="base" text="Base (base)" />
		<TextTestWrapper size="lg" text="Large (lg)" />
		<TextTestWrapper size="xl" text="Extra large (xl)" />
		<TextTestWrapper size="2xl" text="Double extra large (2xl)" />
		<TextTestWrapper size="3xl" text="Triple extra large (3xl)" />
		<TextTestWrapper size="4xl" text="Quadruple extra large (4xl)" />
	</div>
</Story>

<!-- All Weights Showcase -->
<Story name="All Weights">
	<div class="flex flex-col gap-2">
		<TextTestWrapper weight="normal" text="Normal weight" />
		<TextTestWrapper weight="medium" text="Medium weight" />
		<TextTestWrapper weight="semibold" text="Semibold weight" />
		<TextTestWrapper weight="bold" text="Bold weight" />
	</div>
</Story>

<!-- All Colors Showcase -->
<Story name="All Colors">
	<div class="bg-bg flex flex-col gap-2 rounded p-4">
		<TextTestWrapper color="text" text="Text color (default)" />
		<TextTestWrapper color="subtext" text="Subtext color" />
		<TextTestWrapper color="brand" text="Brand color" />
		<TextTestWrapper color="success" text="Success color" />
		<TextTestWrapper color="error" text="Error color" />
		<TextTestWrapper color="warning" text="Warning color" />
		<TextTestWrapper color="info" text="Info color" />
	</div>
</Story>

<!-- Heading Hierarchy -->
<Story name="Heading Hierarchy">
	<div class="flex flex-col gap-3">
		<TextTestWrapper as="h1" variant="heading" size="4xl" text="Heading 1" />
		<TextTestWrapper as="h2" variant="heading" size="3xl" text="Heading 2" />
		<TextTestWrapper as="h3" variant="heading" size="2xl" text="Heading 3" />
		<TextTestWrapper as="h4" variant="heading" size="xl" text="Heading 4" />
		<TextTestWrapper as="h5" variant="heading" size="lg" text="Heading 5" />
		<TextTestWrapper as="h6" variant="heading" size="base" text="Heading 6" />
	</div>
</Story>

<!-- Combined Features -->
<Story
	name="Combined Features"
	args={{
		variant: 'heading',
		size: 'xl',
		weight: 'bold',
		color: 'brand',
		italic: true,
		text: 'Bold, Italic, Brand-colored Heading'
	}}
/>
