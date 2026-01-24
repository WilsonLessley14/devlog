import type { Snippet } from 'svelte';
import type { CardVariant } from '../tokens';

export interface CardProps {
	variant?: CardVariant;
	class?: string;
	children?: Snippet;
	title?: Snippet;
}

export interface CardTestWrapperProps {
	variant?: CardVariant;
	class?: string;
	text?: string;
	titleText?: string;
}
