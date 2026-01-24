/**
 * Design System Token Types
 * Shared TypeScript types for design system components
 */

export type Size = 'sm' | 'md' | 'lg';

export type Variant = 'primary' | 'secondary' | 'ghost' | 'success' | 'error' | 'warning' | 'info';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export type InputType = 'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url';

export type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';

export type TextVariant = 'heading' | 'body' | 'caption' | 'label';

export type TextAlign = 'left' | 'center' | 'right';

export type ColorToken =
	| 'text'
	| 'subtext'
	| 'brand'
	| 'success'
	| 'error'
	| 'warning'
	| 'info'
	| 'bg'
	| 'surface';

export type CardVariant = 'content' | 'code';
