<script lang="ts">
	import type { AvatarTestWrapperProps } from './AvatarProps';
	import Avatar from './Avatar.svelte';

	let { ...props }: AvatarTestWrapperProps = $props();
</script>

<Avatar {...props} />
