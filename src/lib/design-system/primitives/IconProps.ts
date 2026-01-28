import type { Snippet } from 'svelte';

/**
 * Available icon sizes with their corresponding pixel dimensions
 */
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Available icon colors
 * - current: inherits color from parent element
 * - primary: uses the brand color
 * - secondary: uses the text color
 * - muted: uses the subtext color
 * - success, warning, error: semantic colors
 */
export type IconColor =
	| 'current'
	| 'primary'
	| 'secondary'
	| 'muted'
	| 'success'
	| 'warning'
	| 'error';

/**
 * Props for the Icon component
 */
export interface IconProps {
	/**
	 * The size of the icon
	 * - xs: 12px
	 * - sm: 16px
	 * - md: 20px (default)
	 * - lg: 24px
	 * - xl: 32px
	 */
	size?: IconSize;

	/**
	 * The color of the icon
	 * - current: inherits from parent (default)
	 * - primary: brand color
	 * - secondary: text color
	 * - muted: subtext color
	 * - success, warning, error: semantic colors
	 */
	color?: IconColor;

	/**
	 * Accessible label for the icon
	 * If provided, adds role="img" and aria-label for standalone meaningful icons
	 * If not provided, the icon is treated as decorative with aria-hidden="true"
	 */
	label?: string;

	/**
	 * Additional CSS classes to apply
	 */
	class?: string;

	/**
	 * SVG content passed as a slot
	 */
	children?: Snippet;
}

/**
 * Props for the Icon test wrapper component
 */
export interface IconTestWrapperProps extends Omit<IconProps, 'children'> {
	/**
	 * Whether to include a sample SVG icon for testing
	 */
	showIcon?: boolean;
}
