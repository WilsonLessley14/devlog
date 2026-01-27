import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import ImageTestWrapper from './ImageTestWrapper.svelte';

describe('Image', () => {
	const defaultProps = {
		src: '/test-image.jpg',
		alt: 'Test image'
	};

	it('renders with required props', () => {
		render(ImageTestWrapper, defaultProps);
		const img = screen.getByRole('img');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src', '/test-image.jpg');
		expect(img).toHaveAttribute('alt', 'Test image');
	});

	it('uses lazy loading by default', () => {
		render(ImageTestWrapper, defaultProps);
		const img = screen.getByRole('img');
		expect(img).toHaveAttribute('loading', 'lazy');
	});

	it('supports eager loading', () => {
		render(ImageTestWrapper, { ...defaultProps, loading: 'eager' });
		const img = screen.getByRole('img');
		expect(img).toHaveAttribute('loading', 'eager');
	});

	it('renders with square aspect ratio on wrapper', () => {
		render(ImageTestWrapper, { ...defaultProps, aspectRatio: 'square' });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('aspect-square');
	});

	it('renders with video aspect ratio on wrapper', () => {
		render(ImageTestWrapper, { ...defaultProps, aspectRatio: 'video' });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('aspect-video');
	});

	it('renders with portrait aspect ratio on wrapper', () => {
		render(ImageTestWrapper, { ...defaultProps, aspectRatio: 'portrait' });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('aspect-[3/4]');
	});

	it('renders with wide aspect ratio on wrapper', () => {
		render(ImageTestWrapper, { ...defaultProps, aspectRatio: 'wide' });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('aspect-[2/1]');
	});

	it('renders with object-cover by default', () => {
		render(ImageTestWrapper, defaultProps);
		const img = screen.getByRole('img');
		expect(img.className).toContain('object-cover');
	});

	it('renders with object-contain', () => {
		render(ImageTestWrapper, { ...defaultProps, fit: 'contain' });
		const img = screen.getByRole('img');
		expect(img.className).toContain('object-contain');
	});

	it('renders with object-fill', () => {
		render(ImageTestWrapper, { ...defaultProps, fit: 'fill' });
		const img = screen.getByRole('img');
		expect(img.className).toContain('object-fill');
	});

	it('renders with no rounding by default on wrapper', () => {
		render(ImageTestWrapper, defaultProps);
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('rounded-none');
	});

	it('renders with small rounding on wrapper', () => {
		render(ImageTestWrapper, { ...defaultProps, rounded: 'sm' });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('rounded-sm');
	});

	it('renders with medium rounding on wrapper', () => {
		render(ImageTestWrapper, { ...defaultProps, rounded: 'md' });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('rounded-md');
	});

	it('renders with large rounding on wrapper', () => {
		render(ImageTestWrapper, { ...defaultProps, rounded: 'lg' });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('rounded-lg');
	});

	it('renders with full rounding (circle) on wrapper', () => {
		render(ImageTestWrapper, { ...defaultProps, rounded: 'full' });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('rounded-full');
	});

	it('applies hover scale effect when enabled', () => {
		render(ImageTestWrapper, { ...defaultProps, hoverScale: true });
		const img = screen.getByRole('img');
		expect(img.className).toContain('hover:scale-105');
		expect(img.className).toContain('transition-transform');
	});

	it('does not apply hover scale by default', () => {
		render(ImageTestWrapper, defaultProps);
		const img = screen.getByRole('img');
		expect(img.className).not.toContain('hover:scale-105');
	});

	it('applies shadow on wrapper when enabled', () => {
		render(ImageTestWrapper, { ...defaultProps, shadow: true });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('shadow-md');
	});

	it('does not apply shadow by default', () => {
		render(ImageTestWrapper, defaultProps);
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).not.toContain('shadow-md');
	});

	it('applies custom className to wrapper', () => {
		render(ImageTestWrapper, { ...defaultProps, class: 'custom-class' });
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('custom-class');
	});

	it('applies base classes to img', () => {
		render(ImageTestWrapper, defaultProps);
		const img = screen.getByRole('img');
		expect(img.className).toContain('block');
		expect(img.className).toContain('w-full');
		expect(img.className).toContain('h-full');
	});

	it('wrapper has overflow-hidden for hover scale clipping', () => {
		render(ImageTestWrapper, defaultProps);
		const img = screen.getByRole('img');
		const wrapper = img.parentElement;
		expect(wrapper?.className).toContain('overflow-hidden');
	});
});
