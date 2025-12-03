<script lang="ts">
	import Button from './Button.svelte';
	import type { ButtonVariant, Size } from '../tokens';

	interface Props {
		text?: string;
		variant?: ButtonVariant;
		size?: Size;
		disabled?: boolean;
		loading?: boolean;
		type?: 'button' | 'submit' | 'reset';
		ariaLabel?: string;
		onclick?: (event: MouseEvent) => void;
	}

	let {
		text = 'Click me',
		variant,
		size,
		disabled,
		loading,
		type,
		ariaLabel,
		onclick
	}: Props = $props();
</script>

<Button {variant} {size} {disabled} {loading} {type} {ariaLabel} {onclick}>
	{text}
</Button>
