<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TooltipTestWrapper from '../lib/design-system/primitives/TooltipTestWrapper.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Primitive/Tooltip',
		component: TooltipTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			text: {
				control: { type: 'text' }
			},
			position: {
				control: { type: 'select' },
				options: ['top', 'bottom', 'left', 'right']
			},
			showDelay: {
				control: { type: 'number' }
			},
			hideDelay: {
				control: { type: 'number' }
			},
			triggerText: {
				control: { type: 'text' }
			}
		}
	});
</script>

<Story name="Default" args={{ text: 'Helpful tooltip text', triggerText: 'Hover me' }} />

<Story name="Top Position" args={{ text: 'Tooltip on top', position: 'top', triggerText: 'Top' }} />

<Story
	name="Bottom Position"
	args={{ text: 'Tooltip on bottom', position: 'bottom', triggerText: 'Bottom' }}
/>

<Story
	name="Left Position"
	args={{ text: 'Tooltip on left', position: 'left', triggerText: 'Left' }}
/>

<Story
	name="Right Position"
	args={{ text: 'Tooltip on right', position: 'right', triggerText: 'Right' }}
/>

<Story
	name="Long Text"
	args={{ text: 'This is a longer tooltip with more detailed information', triggerText: 'Long' }}
/>

<Story
	name="No Delay"
	args={{ text: 'Instant tooltip', showDelay: 0, hideDelay: 0, triggerText: 'Instant' }}
/>

<Story name="Slow Show" args={{ text: 'Slow to appear', showDelay: 500, triggerText: 'Slow' }} />
