export type AspectRatio = 'square' | 'video' | 'portrait' | 'wide' | 'auto';
export type ObjectFit = 'cover' | 'contain' | 'fill' | 'none';
export type ImageRounded = 'none' | 'sm' | 'md' | 'lg' | 'full';

export interface ImageProps {
	src: string;
	alt: string;
	aspectRatio?: AspectRatio;
	fit?: ObjectFit;
	rounded?: ImageRounded;
	loading?: 'lazy' | 'eager';
	hoverScale?: boolean;
	shadow?: boolean;
	class?: string;
}

export type ImageTestWrapperProps = ImageProps;
