<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import InputTestWrapper from '../lib/design-system/primitives/InputTestWrapper.svelte';
	import { fn } from '@storybook/test';

	// Input component with multiple types, sizes, and states. Supports labels, helper text, and error messages.
	// Accessibility: Proper label associations, aria-describedby for helper/error text, aria-invalid for errors.
	// Features: text, email, password, number, tel, url, search types. Disabled, readonly, required states.

	const { Story } = defineMeta({
		title: 'Primitive/Input',
		component: InputTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			type: {
				control: { type: 'select' },
				options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
				description: 'The type of input field',
				table: {
					type: { summary: 'InputType' },
					defaultValue: { summary: 'text' }
				}
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg'],
				description: 'The size of the input',
				table: {
					type: { summary: 'Size' },
					defaultValue: { summary: 'md' }
				}
			},
			disabled: {
				control: 'boolean',
				description: 'Whether the input is disabled',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'false' }
				}
			},
			readonly: {
				control: 'boolean',
				description: 'Whether the input is read-only',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'false' }
				}
			},
			required: {
				control: 'boolean',
				description: 'Whether the input is required',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'false' }
				}
			},
			error: {
				control: 'boolean',
				description: 'Whether the input has an error',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'false' }
				}
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

<!-- Basic Examples -->
<Story
	name="Default"
	args={{
		placeholder: 'Enter text...',
		ariaLabel: 'Text input'
	}}
/>

<Story
	name="With Label"
	args={{
		label: 'Username',
		placeholder: 'Enter your username',
		ariaLabel: 'Username input'
	}}
/>

<Story
	name="With Helper Text"
	args={{
		label: 'Email',
		type: 'email',
		placeholder: 'you@example.com',
		helperText: "We'll never share your email with anyone else",
		ariaLabel: 'Email input'
	}}
/>

<Story
	name="Required"
	args={{
		label: 'Password',
		type: 'password',
		required: true,
		placeholder: 'Enter your password',
		ariaLabel: 'Required password input'
	}}
/>

<!-- Size Variants -->
<Story
	name="Small"
	args={{
		label: 'Small Input',
		size: 'sm',
		placeholder: 'Small size',
		ariaLabel: 'Small input'
	}}
/>

<Story
	name="Medium"
	args={{
		label: 'Medium Input',
		size: 'md',
		placeholder: 'Medium size (default)',
		ariaLabel: 'Medium input'
	}}
/>

<Story
	name="Large"
	args={{
		label: 'Large Input',
		size: 'lg',
		placeholder: 'Large size',
		ariaLabel: 'Large input'
	}}
/>

<!-- Input Types -->
<Story
	name="Email"
	args={{
		type: 'email',
		label: 'Email Address',
		placeholder: 'you@example.com',
		ariaLabel: 'Email address input'
	}}
/>

<Story
	name="Password"
	args={{
		type: 'password',
		label: 'Password',
		placeholder: 'Enter password',
		ariaLabel: 'Password input'
	}}
/>

<Story
	name="Number"
	args={{
		type: 'number',
		label: 'Age',
		placeholder: '25',
		ariaLabel: 'Age input'
	}}
/>

<Story
	name="Telephone"
	args={{
		type: 'tel',
		label: 'Phone Number',
		placeholder: '+1 (555) 123-4567',
		ariaLabel: 'Phone number input'
	}}
/>

<Story
	name="URL"
	args={{
		type: 'url',
		label: 'Website',
		placeholder: 'https://example.com',
		ariaLabel: 'Website URL input'
	}}
/>

<Story
	name="Search"
	args={{
		type: 'search',
		label: 'Search',
		placeholder: 'Search...',
		ariaLabel: 'Search input'
	}}
/>

<!-- States -->
<Story
	name="Error State"
	args={{
		label: 'Email',
		type: 'email',
		value: 'invalid-email',
		error: true,
		errorMessage: 'Please enter a valid email address',
		ariaLabel: 'Email input with error'
	}}
/>

<Story
	name="Disabled"
	args={{
		label: 'Disabled Input',
		value: 'Cannot edit this',
		disabled: true,
		ariaLabel: 'Disabled input'
	}}
/>

<Story
	name="Readonly"
	args={{
		label: 'Readonly Input',
		value: 'This is readonly',
		readonly: true,
		ariaLabel: 'Readonly input'
	}}
/>

<!-- Complex Examples -->
<Story
	name="Complete Form Field"
	args={{
		label: 'Email Address',
		type: 'email',
		placeholder: 'you@example.com',
		helperText: 'Enter your work email address',
		required: true,
		autocomplete: 'email',
		ariaLabel: 'Complete email form field'
	}}
/>

<Story
	name="Error with Helper Text"
	args={{
		label: 'Username',
		value: 'ab',
		error: true,
		errorMessage: 'Username must be at least 3 characters',
		helperText: 'Choose a unique username',
		required: true,
		ariaLabel: 'Username input with error'
	}}
/>
