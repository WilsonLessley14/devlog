/** Avatar size options with pixel dimensions */
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/** Avatar shape variants */
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps {
	/** Image source URL */
	src?: string;
	/** Alt text for the image */
	alt?: string;
	/** User's full name, used to derive initials fallback and aria-label */
	name?: string;
	/** Avatar size: xs (24px), sm (32px), md (40px), lg (48px), xl (64px) */
	size?: AvatarSize;
	/** Shape variant: circle (default) or square (rounded corners) */
	shape?: AvatarShape;
	/** Additional CSS class names */
	class?: string;
}

export type AvatarTestWrapperProps = AvatarProps;
