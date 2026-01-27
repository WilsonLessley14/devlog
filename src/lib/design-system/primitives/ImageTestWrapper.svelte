<script lang="ts">
	import type { ImageTestWrapperProps } from './ImageProps';
	import Image from './Image.svelte';

	let { ...props }: ImageTestWrapperProps = $props();
</script>

<Image {...props} />
