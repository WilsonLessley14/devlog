import type { Snippet } from 'svelte';
import type { Size } from '../tokens';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error';

export interface BadgeProps {
	variant?: BadgeVariant;
	size?: Size;
	class?: string;
	children?: Snippet;
}

export interface BadgeTestWrapperProps extends Omit<BadgeProps, 'children'> {
	text?: string;
}
