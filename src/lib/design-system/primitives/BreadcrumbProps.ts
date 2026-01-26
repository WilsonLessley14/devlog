import type { Size } from '../tokens';

export interface BreadcrumbItem {
	label: string;
	href: string;
}

export interface BreadcrumbProps {
	items?: BreadcrumbItem[];
	size?: Size;
	separator?: string;
	showHome?: boolean;
	homeLabel?: string;
	class?: string;
}

export interface BreadcrumbTestWrapperProps extends BreadcrumbProps {
	pathname?: string;
}
