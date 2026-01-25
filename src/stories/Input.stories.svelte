<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import InputTestWrapper from '../lib/design-system/primitives/InputTestWrapper.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'Primitive/Input',
		component: InputTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			type: {
				control: { type: 'select' },
				options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url']
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg']
			},
			disabled: {
				control: { type: 'boolean' }
			},
			readonly: {
				control: { type: 'boolean' }
			},
			required: {
				control: { type: 'boolean' }
			},
			error: {
				control: { type: 'boolean' }
			}
		},
		args: {
			oninput: fn(),
			onchange: fn(),
			onfocus: fn(),
			onblur: fn()
		}
	});
</script>

<!-- Input Types -->
<Story
	name="Text Input"
	args={{ type: 'text', placeholder: 'Enter text...', ariaLabel: 'Text input' }}
/>

<Story
	name="Email Input"
	args={{ type: 'email', placeholder: 'email@example.com', ariaLabel: 'Email input' }}
/>

<Story
	name="Password Input"
	args={{ type: 'password', placeholder: 'Enter password...', ariaLabel: 'Password input' }}
/>

<Story
	name="Search Input"
	args={{ type: 'search', placeholder: 'Search...', ariaLabel: 'Search input' }}
/>

<Story name="Number Input" args={{ type: 'number', placeholder: '0', ariaLabel: 'Number input' }} />

<Story
	name="Tel Input"
	args={{ type: 'tel', placeholder: '+1 (555) 000-0000', ariaLabel: 'Telephone input' }}
/>

<Story
	name="URL Input"
	args={{ type: 'url', placeholder: 'https://example.com', ariaLabel: 'URL input' }}
/>

<!-- Sizes -->
<Story
	name="Small Size"
	args={{ size: 'sm', placeholder: 'Small input', ariaLabel: 'Small input' }}
/>

<Story
	name="Medium Size"
	args={{ size: 'md', placeholder: 'Medium input', ariaLabel: 'Medium input' }}
/>

<Story
	name="Large Size"
	args={{ size: 'lg', placeholder: 'Large input', ariaLabel: 'Large input' }}
/>

<!-- States -->
<Story name="Default" args={{ placeholder: 'Default input', ariaLabel: 'Default input' }} />

<Story name="With Value" args={{ value: 'Pre-filled value', ariaLabel: 'Input with value' }} />

<Story
	name="Disabled"
	args={{ placeholder: 'Disabled input', disabled: true, ariaLabel: 'Disabled input' }}
/>

<Story
	name="Readonly"
	args={{ value: 'Read-only value', readonly: true, ariaLabel: 'Readonly input' }}
/>

<Story
	name="Required"
	args={{
		placeholder: 'Required field',
		required: true,
		label: 'Required Field',
		ariaLabel: 'Required input'
	}}
/>

<Story
	name="Error State"
	args={{
		placeholder: 'Invalid input',
		error: true,
		errorMessage: 'This field has an error',
		ariaLabel: 'Error input'
	}}
/>

<Story
	name="With Helper Text"
	args={{
		placeholder: 'Enter username',
		helperText: 'Your username must be at least 3 characters',
		ariaLabel: 'Input with helper text'
	}}
/>

<Story
	name="With Label"
	args={{
		label: 'Email Address',
		placeholder: 'email@example.com',
		type: 'email',
		ariaLabel: 'Labeled email input'
	}}
/>

<Story
	name="With Label and Helper"
	args={{
		label: 'Password',
		placeholder: 'Enter password',
		type: 'password',
		helperText: 'Must be at least 8 characters',
		ariaLabel: 'Password input with helper'
	}}
/>

<Story
	name="With Label and Error"
	args={{
		label: 'Username',
		placeholder: 'Enter username',
		error: true,
		errorMessage: 'Username is already taken',
		ariaLabel: 'Username input with error'
	}}
/>

<Story
	name="Required with Label and Helper"
	args={{
		label: 'Full Name',
		placeholder: 'John Doe',
		required: true,
		helperText: 'Enter your legal name',
		ariaLabel: 'Required full name input'
	}}
/>

<!-- All Sizes Showcase -->
<Story name="All Sizes">
	<div class="flex flex-col gap-4">
		<InputTestWrapper size="sm" placeholder="Small size" ariaLabel="Small size showcase" />
		<InputTestWrapper size="md" placeholder="Medium size" ariaLabel="Medium size showcase" />
		<InputTestWrapper size="lg" placeholder="Large size" ariaLabel="Large size showcase" />
	</div>
</Story>

<!-- All States Showcase -->
<Story name="All States">
	<div class="flex flex-col gap-4">
		<InputTestWrapper label="Default" placeholder="Enter text..." ariaLabel="Default state" />
		<InputTestWrapper
			label="Disabled"
			placeholder="Disabled"
			disabled={true}
			ariaLabel="Disabled state"
		/>
		<InputTestWrapper
			label="Readonly"
			value="Read-only value"
			readonly={true}
			ariaLabel="Readonly state"
		/>
		<InputTestWrapper
			label="Required"
			placeholder="Required"
			required={true}
			ariaLabel="Required state"
		/>
		<InputTestWrapper
			label="Error"
			placeholder="Error state"
			error={true}
			errorMessage="Something went wrong"
			ariaLabel="Error state"
		/>
		<InputTestWrapper
			label="With Helper"
			placeholder="With helper text"
			helperText="This is helpful information"
			ariaLabel="With helper text"
		/>
	</div>
</Story>
