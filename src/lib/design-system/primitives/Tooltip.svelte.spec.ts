import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { tick } from 'svelte';
import TooltipTestWrapper from './TooltipTestWrapper.svelte';

describe('Tooltip', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.useRealTimers();
	});

	// Helper to get tooltip element (which may be aria-hidden)
	function getTooltipElement(): HTMLElement {
		return screen.getByRole('tooltip', { hidden: true });
	}

	// Helper to advance timers and flush Svelte reactivity
	async function advanceAndFlush(ms: number) {
		vi.advanceTimersByTime(ms);
		await tick();
	}

	it('renders the trigger element', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const trigger = screen.getByText('Hover me');
		expect(trigger).toBeInTheDocument();
	});

	it('renders with custom trigger text', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', triggerText: 'Custom Trigger' });
		const trigger = screen.getByText('Custom Trigger');
		expect(trigger).toBeInTheDocument();
	});

	it('has a tooltip element with role="tooltip"', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const tooltip = getTooltipElement();
		expect(tooltip).toBeInTheDocument();
		expect(tooltip.getAttribute('role')).toBe('tooltip');
	});

	it('displays the tooltip text content', () => {
		render(TooltipTestWrapper, { text: 'Help information' });
		const tooltip = getTooltipElement();
		expect(tooltip.textContent).toContain('Help information');
	});

	it('tooltip is initially hidden via opacity', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('opacity-0');
	});

	it('shows tooltip on mouse enter after delay', async () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', showDelay: 200 });
		const trigger = screen.getByText('Hover me');

		await fireEvent.mouseEnter(trigger.closest('.relative')!);
		await advanceAndFlush(200);

		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('opacity-100');
	});

	it('hides tooltip on mouse leave', async () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', showDelay: 0, hideDelay: 0 });
		const container = screen.getByText('Hover me').closest('.relative')!;

		await fireEvent.mouseEnter(container);
		await advanceAndFlush(0);

		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('opacity-100');

		await fireEvent.mouseLeave(container);
		await advanceAndFlush(0);

		expect(tooltip.className).toContain('opacity-0');
	});

	it('shows tooltip on focus', async () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', showDelay: 0 });
		const container = screen.getByText('Hover me').closest('.relative')!;

		await fireEvent.focusIn(container);
		await advanceAndFlush(0);

		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('opacity-100');
	});

	it('hides tooltip on focus out', async () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', showDelay: 0, hideDelay: 0 });
		const container = screen.getByText('Hover me').closest('.relative')!;

		await fireEvent.focusIn(container);
		await advanceAndFlush(0);

		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('opacity-100');

		await fireEvent.focusOut(container);
		await advanceAndFlush(0);

		expect(tooltip.className).toContain('opacity-0');
	});

	// Position tests
	it('renders with top position by default', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('bottom-full');
	});

	it('renders with bottom position', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', position: 'bottom' });
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('top-full');
	});

	it('renders with left position', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', position: 'left' });
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('right-full');
	});

	it('renders with right position', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', position: 'right' });
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('left-full');
	});

	// Styling tests
	it('has proper base styling classes', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('rounded');
		expect(tooltip.className).toContain('text-xs');
		expect(tooltip.className).toContain('font-medium');
		expect(tooltip.className).toContain('z-50');
	});

	it('has transition classes for animation', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('transition-all');
		expect(tooltip.className).toContain('duration-150');
	});

	it('respects prefers-reduced-motion', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('motion-reduce:transition-none');
	});

	// Accessibility tests
	it('has a unique id on the tooltip element', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const tooltip = getTooltipElement();
		expect(tooltip.id).toMatch(/^tooltip-/);
	});

	it('sets aria-hidden=true when tooltip is not visible', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const tooltip = getTooltipElement();
		expect(tooltip.getAttribute('aria-hidden')).toBe('true');
	});

	it('sets aria-hidden=false when tooltip is visible', async () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', showDelay: 0 });
		const container = screen.getByText('Hover me').closest('.relative')!;

		await fireEvent.mouseEnter(container);
		await advanceAndFlush(0);

		const tooltip = getTooltipElement();
		expect(tooltip.getAttribute('aria-hidden')).toBe('false');
	});

	it('connects trigger and tooltip with aria-describedby when visible', async () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', showDelay: 0 });
		const container = screen.getByText('Hover me').closest('.relative')!;
		const tooltip = getTooltipElement();

		await fireEvent.mouseEnter(container);
		await advanceAndFlush(0);

		const triggerWrapper = screen.getByText('Hover me').closest('[aria-describedby]');
		expect(triggerWrapper).toBeInTheDocument();
		expect(triggerWrapper?.getAttribute('aria-describedby')).toBe(tooltip.id);
	});

	it('does not set aria-describedby when tooltip is hidden', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text' });
		const triggerWrapper = screen.getByText('Hover me').parentElement;
		expect(triggerWrapper?.getAttribute('aria-describedby')).toBeNull();
	});

	// Custom class test
	it('applies custom class names', () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', class: 'custom-tooltip' });
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('custom-tooltip');
	});

	// Delay tests
	it('respects custom show delay', async () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', showDelay: 500 });
		const container = screen.getByText('Hover me').closest('.relative')!;

		await fireEvent.mouseEnter(container);

		// Should not be visible yet at 200ms
		await advanceAndFlush(200);
		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('opacity-0');

		// Should be visible at 500ms
		await advanceAndFlush(300);
		expect(tooltip.className).toContain('opacity-100');
	});

	it('respects custom hide delay', async () => {
		render(TooltipTestWrapper, { text: 'Tooltip text', showDelay: 0, hideDelay: 300 });
		const container = screen.getByText('Hover me').closest('.relative')!;

		await fireEvent.mouseEnter(container);
		await advanceAndFlush(0);

		const tooltip = getTooltipElement();
		expect(tooltip.className).toContain('opacity-100');

		await fireEvent.mouseLeave(container);

		// Should still be visible at 100ms
		await advanceAndFlush(100);
		expect(tooltip.className).toContain('opacity-100');

		// Should be hidden at 300ms
		await advanceAndFlush(200);
		expect(tooltip.className).toContain('opacity-0');
	});
});
