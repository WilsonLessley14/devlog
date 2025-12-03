<script lang="ts">
	import Text from './Text.svelte';
	import type { TextElement, TextVariant, TextAlign, ColorToken } from '../tokens';

	interface Props {
		text?: string;
		as?: TextElement;
		variant?: TextVariant;
		size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
		weight?: 'normal' | 'medium' | 'semibold' | 'bold';
		align?: TextAlign;
		color?: ColorToken;
		italic?: boolean;
		truncate?: boolean;
		class?: string;
	}

	let {
		text = 'Text content',
		as,
		variant,
		size,
		weight,
		align,
		color,
		italic,
		truncate,
		class: className
	}: Props = $props();
</script>

<Text {as} {variant} {size} {weight} {align} {color} {italic} {truncate} class={className}>
	{text}
</Text>
