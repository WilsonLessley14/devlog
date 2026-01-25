<script lang="ts">
	import type { InputType, Size } from '../tokens';
	import { classNames } from '../utils';

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
		autocomplete?: AutoFill;
		oninput?: (event: Event) => void;
		onchange?: (event: Event) => void;
		onfocus?: (event: FocusEvent) => void;
		onblur?: (event: FocusEvent) => void;
	}

	let {
		type = 'text',
		size = 'md',
		value = $bindable(''),
		placeholder,
		disabled = false,
		readonly = false,
		required = false,
		error = false,
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

	const inputId = $derived(id || `input-${Math.random().toString(36).substr(2, 9)}`);
	const helperTextId = $derived(`${inputId}-helper`);
	const errorMessageId = $derived(`${inputId}-error`);

	const baseClasses =
		'w-full border rounded-md transition-all duration-base focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed';

	const sizeClasses: Record<Size, string> = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-5 py-3 text-lg'
	};

	const stateClasses = $derived(
		error
			? 'border-error focus:ring-error focus:border-error bg-surface text-text'
			: 'border-border focus:ring-brand focus:border-brand bg-surface text-text hover:border-borderHover'
	);

	const computedClasses = $derived(classNames(baseClasses, sizeClasses[size], stateClasses));

	const computedAriaDescribedBy = $derived(
		ariaDescribedBy ||
			[helperText && helperTextId, error && errorMessage && errorMessageId]
				.filter(Boolean)
				.join(' ') ||
			undefined
	);
</script>

{#if label}
	<label for={inputId} class="text-text mb-1 block text-sm font-medium">
		{label}
		{#if required}
			<span class="text-error" aria-label="required">*</span>
		{/if}
	</label>
{/if}

<input
	{type}
	id={inputId}
	{name}
	bind:value
	{placeholder}
	{disabled}
	{readonly}
	{required}
	{autocomplete}
	class={computedClasses}
	aria-label={ariaLabel}
	aria-describedby={computedAriaDescribedBy}
	aria-invalid={error}
	aria-required={required}
	{oninput}
	{onchange}
	{onfocus}
	{onblur}
/>

{#if helperText && !error}
	<p id={helperTextId} class="text-subtext mt-1 text-sm">
		{helperText}
	</p>
{/if}

{#if error && errorMessage}
	<p id={errorMessageId} class="text-error mt-1 text-sm" role="alert">
		{errorMessage}
	</p>
{/if}
