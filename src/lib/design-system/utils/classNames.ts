/**
 * Class name utility for combining Tailwind classes
 * Simple alternative to clsx/classnames for design system components
 */
export function classNames(...classes: (string | undefined | null | false)[]): string {
	return classes.filter(Boolean).join(' ');
}
