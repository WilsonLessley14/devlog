import type { Snippet } from 'svelte';
import type { Size } from '../tokens';

export type TagVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';

export interface TagProps {
	/** Text content for the tag */
	label?: string;
	/** Visual variant determining color scheme */
	variant?: TagVariant;
	/** Size of the tag */
	size?: Size;
	/** Whether the tag shows a remove/close button */
	removable?: boolean;
	/** Callback fired when the remove button is clicked */
	onremove?: () => void;
	/** Click handler — when provided, tag renders as a button and becomes interactive */
	onclick?: (event: MouseEvent) => void;
	/** Whether the tag is disabled (greyed out, non-interactive) */
	disabled?: boolean;
	/** Additional CSS class names */
	class?: string;
	/** Custom content slot (used instead of label when provided) */
	children?: Snippet;
}

export interface TagTestWrapperProps extends Omit<TagProps, 'children'> {
	text?: string;
}
