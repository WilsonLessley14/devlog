<script lang="ts">
	import type { LinkTestWrapperProps } from './LinkProps';
	import Link from './Link.svelte';

	let { text = 'Link', ...restProps }: LinkTestWrapperProps = $props();
</script>

<Link {...restProps}>
	{text}
</Link>
