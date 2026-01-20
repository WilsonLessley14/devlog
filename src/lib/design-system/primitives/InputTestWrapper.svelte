<script lang="ts">
	import Input from './Input.svelte';
	import type { InputType, Size } from '../tokens';
	import type { HTMLInputAttributes } from 'svelte/elements';

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
		ariaDescribedBy?: string;
		autocomplete?: HTMLInputAttributes['autocomplete'];
		oninput?: (event: Event) => void;
		onchange?: (event: Event) => void;
		onfocus?: (event: FocusEvent) => void;
		onblur?: (event: FocusEvent) => void;
	}

	let {
		type,
		size,
		value: initialValue = '',
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
		ariaDescribedBy,
		autocomplete,
		oninput,
		onchange,
		onfocus,
		onblur
	}: Props = $props();

	let value = $state(initialValue);
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
	{ariaDescribedBy}
	{autocomplete}
	{oninput}
	{onchange}
	{onfocus}
	{onblur}
/>
