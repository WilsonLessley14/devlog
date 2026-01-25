<script lang="ts">
	import Input from './Input.svelte';
	import type { InputType, Size } from '../tokens';

	interface Props {
		type?: InputType;
		size?: Size;
		value?: string;
		placeholder?: string;
		disabled?: boolean;
		readonly?: boolean;
		required?: boolean;
		error?: boolean;
		errorMessage?: string;
		helperText?: string;
		label?: string;
		id?: string;
		name?: string;
		ariaLabel?: string;
		autocomplete?: AutoFill;
		oninput?: (event: Event) => void;
		onchange?: (event: Event) => void;
		onfocus?: (event: FocusEvent) => void;
		onblur?: (event: FocusEvent) => void;
	}

	let {
		type,
		size,
		value = $bindable(''),
		placeholder,
		disabled,
		readonly,
		required,
		error,
		errorMessage,
		helperText,
		label,
		id,
		name,
		ariaLabel,
		autocomplete,
		oninput,
		onchange,
		onfocus,
		onblur
	}: Props = $props();
</script>

<Input
	{type}
	{size}
	bind:value
	{placeholder}
	{disabled}
	{readonly}
	{required}
	{error}
	{errorMessage}
	{helperText}
	{label}
	{id}
	{name}
	{ariaLabel}
	{autocomplete}
	{oninput}
	{onchange}
	{onfocus}
	{onblur}
/>
