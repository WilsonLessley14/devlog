import type { Snippet } from 'svelte';
import type { ButtonVariant, Size } from '../tokens';

export interface ButtonProps {
	variant?: ButtonVariant;
	size?: Size;
	disabled?: boolean;
	loading?: boolean;
	type?: 'button' | 'submit' | 'reset';
	ariaLabel?: string;
	onclick?: (event: MouseEvent) => void;
	children?: Snippet;
}

export interface ButtonTestWrapperProps extends ButtonProps {
	text?: string;
}
