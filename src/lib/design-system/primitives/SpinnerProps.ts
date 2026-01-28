import type { Size, ColorToken } from '../tokens';

export interface SpinnerProps {
	size?: Size;
	color?: ColorToken;
	label?: string;
	class?: string;
}

export type SpinnerTestWrapperProps = SpinnerProps;
