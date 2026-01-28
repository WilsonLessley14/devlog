import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import AvatarTestWrapper from './AvatarTestWrapper.svelte';

/**
 * Helper to get the Avatar container element.
 * When an <img> is present, there are two elements with role="img":
 * the outer <span role="img"> and the inner <img>. We use aria-label to get the container.
 */
function getAvatarContainer(label: string = 'Avatar') {
	return screen.getByLabelText(label);
}

describe('Avatar', () => {
	// Basic rendering
	it('renders with default props', () => {
		render(AvatarTestWrapper, {});
		const avatar = getAvatarContainer();
		expect(avatar).toBeInTheDocument();
	});

	it('has role="img" for accessibility', () => {
		render(AvatarTestWrapper, { name: 'Wilson Lessley' });
		const avatar = getAvatarContainer('Wilson Lessley');
		expect(avatar).toHaveAttribute('role', 'img');
	});

	// Aria-label tests
	it('uses name for aria-label when provided', () => {
		render(AvatarTestWrapper, { name: 'Wilson Lessley' });
		const avatar = getAvatarContainer('Wilson Lessley');
		expect(avatar).toHaveAttribute('aria-label', 'Wilson Lessley');
	});

	it('uses alt for aria-label when name is not provided', () => {
		render(AvatarTestWrapper, { src: '/photo.jpg', alt: 'User photo' });
		const avatar = getAvatarContainer('User photo');
		expect(avatar).toHaveAttribute('aria-label', 'User photo');
	});

	it('uses "Avatar" as default aria-label', () => {
		render(AvatarTestWrapper, {});
		const avatar = getAvatarContainer('Avatar');
		expect(avatar).toHaveAttribute('aria-label', 'Avatar');
	});

	// Initials rendering
	it('renders initials from name when no src provided', () => {
		render(AvatarTestWrapper, { name: 'Wilson Lessley' });
		expect(screen.getByText('WL')).toBeInTheDocument();
	});

	it('renders single initial for single name', () => {
		render(AvatarTestWrapper, { name: 'Wilson' });
		expect(screen.getByText('W')).toBeInTheDocument();
	});

	it('renders first two initials for names with more than two parts', () => {
		render(AvatarTestWrapper, { name: 'John Paul Jones' });
		expect(screen.getByText('JP')).toBeInTheDocument();
	});

	it('renders uppercase initials', () => {
		render(AvatarTestWrapper, { name: 'jane doe' });
		expect(screen.getByText('JD')).toBeInTheDocument();
	});

	// Image rendering
	it('renders an img element when src is provided', () => {
		render(AvatarTestWrapper, { src: '/photo.jpg', alt: 'User photo' });
		const avatar = getAvatarContainer('User photo');
		const img = avatar.querySelector('img');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', '/photo.jpg');
	});

	it('uses alt text on img element', () => {
		render(AvatarTestWrapper, { src: '/photo.jpg', alt: 'User photo' });
		const avatar = getAvatarContainer('User photo');
		const img = avatar.querySelector('img');
		expect(img).toHaveAttribute('alt', 'User photo');
	});

	it('uses name as alt fallback on img element', () => {
		render(AvatarTestWrapper, { src: '/photo.jpg', name: 'Wilson Lessley' });
		const avatar = getAvatarContainer('Wilson Lessley');
		const img = avatar.querySelector('img');
		expect(img).toHaveAttribute('alt', 'Wilson Lessley');
	});

	// Size tests
	it('renders with medium size by default', () => {
		render(AvatarTestWrapper, { name: 'WL' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('w-10');
		expect(avatar.className).toContain('h-10');
	});

	it('renders with xs size', () => {
		render(AvatarTestWrapper, { name: 'WL', size: 'xs' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('w-6');
		expect(avatar.className).toContain('h-6');
	});

	it('renders with sm size', () => {
		render(AvatarTestWrapper, { name: 'WL', size: 'sm' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('w-8');
		expect(avatar.className).toContain('h-8');
	});

	it('renders with lg size', () => {
		render(AvatarTestWrapper, { name: 'WL', size: 'lg' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('w-12');
		expect(avatar.className).toContain('h-12');
	});

	it('renders with xl size', () => {
		render(AvatarTestWrapper, { name: 'WL', size: 'xl' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('w-16');
		expect(avatar.className).toContain('h-16');
	});

	// Shape tests
	it('renders with circle shape by default', () => {
		render(AvatarTestWrapper, { name: 'WL' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('rounded-full');
	});

	it('renders with square shape', () => {
		render(AvatarTestWrapper, { name: 'WL', shape: 'square' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('rounded-lg');
	});

	// Style tests
	it('has overflow-hidden for image clipping', () => {
		render(AvatarTestWrapper, { name: 'WL' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('overflow-hidden');
	});

	it('has inline-flex for proper alignment', () => {
		render(AvatarTestWrapper, { name: 'WL' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('inline-flex');
	});

	it('has items-center and justify-center for centering content', () => {
		render(AvatarTestWrapper, { name: 'WL' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('items-center');
		expect(avatar.className).toContain('justify-center');
	});

	// Custom class test
	it('applies custom class names', () => {
		render(AvatarTestWrapper, { name: 'WL', class: 'custom-avatar' });
		const avatar = getAvatarContainer('WL');
		expect(avatar.className).toContain('custom-avatar');
	});

	// Fallback icon test (no name and no src)
	it('renders fallback user icon when no name and no src provided', () => {
		render(AvatarTestWrapper, {});
		const avatar = getAvatarContainer('Avatar');
		const svg = avatar.querySelector('svg');
		expect(svg).toBeInTheDocument();
	});

	// Loading skeleton test
	it('shows skeleton placeholder before image loads', () => {
		render(AvatarTestWrapper, { src: '/photo.jpg', alt: 'User photo' });
		const avatar = getAvatarContainer('User photo');
		const skeleton = avatar.querySelector('.animate-pulse');
		expect(skeleton).toBeInTheDocument();
	});

	// Combination tests
	it('renders xl circle with initials correctly', () => {
		render(AvatarTestWrapper, { name: 'Wilson Lessley', size: 'xl', shape: 'circle' });
		const avatar = getAvatarContainer('Wilson Lessley');
		expect(avatar.className).toContain('w-16');
		expect(avatar.className).toContain('rounded-full');
		expect(screen.getByText('WL')).toBeInTheDocument();
	});

	it('renders sm square with image correctly', () => {
		render(AvatarTestWrapper, { src: '/photo.jpg', alt: 'Photo', size: 'sm', shape: 'square' });
		const avatar = getAvatarContainer('Photo');
		expect(avatar.className).toContain('w-8');
		expect(avatar.className).toContain('rounded-lg');
		expect(avatar.querySelector('img')).toBeInTheDocument();
	});
});
