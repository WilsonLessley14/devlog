import type { Snippet } from 'svelte';
import type { Size } from '../tokens';

export type LinkVariant = 'default' | 'subtle' | 'muted';

export interface LinkProps {
	href: string;
	variant?: LinkVariant;
	size?: Size;
	external?: boolean;
	underline?: 'always' | 'hover' | 'none';
	ariaLabel?: string;
	children?: Snippet;
	class?: string;
}

export interface LinkTestWrapperProps extends Omit<LinkProps, 'children'> {
	text?: string;
}
