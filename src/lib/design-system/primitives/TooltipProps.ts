import type { Snippet } from 'svelte';

/** Position of the tooltip relative to the trigger element */
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
	/** The text content displayed in the tooltip */
	text: string;

	/** Position of the tooltip relative to the trigger element */
	position?: TooltipPosition;

	/** Delay in milliseconds before the tooltip appears */
	showDelay?: number;

	/** Delay in milliseconds before the tooltip hides */
	hideDelay?: number;

	/** Additional CSS class names to apply to the tooltip container */
	class?: string;

	/** The trigger element rendered via slot */
	children?: Snippet;
}

export interface TooltipTestWrapperProps extends Omit<TooltipProps, 'children'> {
	/** Text for the trigger element inside the tooltip */
	triggerText?: string;
}
