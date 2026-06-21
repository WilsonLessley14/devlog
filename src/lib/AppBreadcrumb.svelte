<script lang="ts">
	import { page } from '$app/stores';
	import { Breadcrumb } from '@wl/frontend-system';

	function formatLabel(segment: string): string {
		return segment
			.split('-')
			.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
			.join(' ');
	}

	const items = $derived.by(() => {
		const segments = $page.url.pathname.split('/').filter(Boolean);
		const out = [{ label: 'Home', href: '/' }];
		let path = '';
		for (const s of segments) {
			path += `/${s}`;
			out.push({ label: formatLabel(s), href: path });
		}
		return out;
	});

	const isHome = $derived($page.url.pathname === '/');
</script>

{#if !isHome}
	<Breadcrumb.Root class="px-2 py-1">
		<Breadcrumb.List>
			{#each items as item, i (item.href)}
				<Breadcrumb.Item>
					{#if i === items.length - 1}
						<Breadcrumb.Page>{item.label}</Breadcrumb.Page>
					{:else}
						<Breadcrumb.Link href={item.href}>{item.label}</Breadcrumb.Link>
					{/if}
				</Breadcrumb.Item>
				{#if i < items.length - 1}
					<Breadcrumb.Separator />
				{/if}
			{/each}
		</Breadcrumb.List>
	</Breadcrumb.Root>
{/if}
