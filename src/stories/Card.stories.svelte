<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CardTestWrapper from '../lib/design-system/primitives/CardTestWrapper.svelte';

	const { Story } = defineMeta({
		title: 'Primitive/Card',
		component: CardTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['content', 'code']
			}
		}
	});
</script>

<Story
	name="Content"
	args={{
		variant: 'content',
		titleText: 'Card Title',
		text: 'This is the card body content. It can contain any information you want to display in a structured way.'
	}}
/>

<Story
	name="Content Without Title"
	args={{
		variant: 'content',
		text: 'A content card without a title, useful for simple informational blocks.'
	}}
/>

<Story
	name="Code"
	args={{
		variant: 'code',
		text: '<Button variant="primary">Click me</Button>'
	}}
/>

<Story
	name="Code Multiline"
	args={{
		variant: 'code',
		text: 'import { Button } from "$lib/design-system";'
	}}
/>

<Story
	name="Content with Custom Class"
	args={{
		variant: 'content',
		titleText: 'Custom Styled',
		text: 'This card has additional custom classes applied.',
		class: 'max-w-md'
	}}
/>

<Story name="Grid of Cards">
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		<CardTestWrapper
			variant="content"
			titleText="Feature One"
			text="A brief description of the first feature."
		/>
		<CardTestWrapper
			variant="content"
			titleText="Feature Two"
			text="A brief description of the second feature."
		/>
		<CardTestWrapper
			variant="content"
			titleText="Feature Three"
			text="A brief description of the third feature."
		/>
	</div>
</Story>
