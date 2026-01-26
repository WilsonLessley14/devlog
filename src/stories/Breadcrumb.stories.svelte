<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import BreadcrumbTestWrapper from '../lib/design-system/primitives/BreadcrumbTestWrapper.svelte';

	const { Story } = defineMeta({
		title: 'Primitive/Breadcrumb',
		component: BreadcrumbTestWrapper,
		tags: ['autodocs'],
		argTypes: {
			pathname: {
				control: { type: 'text' },
				description: 'The URL pathname to generate breadcrumbs from'
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg']
			},
			separator: {
				control: { type: 'text' },
				description: 'Custom separator between items'
			},
			showHome: {
				control: { type: 'boolean' },
				description: 'Whether to show the home item'
			},
			homeLabel: {
				control: { type: 'text' },
				description: 'Custom label for the home item'
			}
		}
	});
</script>

<!-- Basic Examples -->
<Story name="Default" args={{ pathname: '/blog' }} />

<Story name="Multi-Level Path" args={{ pathname: '/blog/my-first-post' }} />

<Story name="Design System Path" args={{ pathname: '/design-system' }} />

<Story name="Deep Nesting" args={{ pathname: '/docs/components/button/usage' }} />

<!-- Sizes -->
<Story name="Small Size" args={{ pathname: '/blog', size: 'sm' }} />

<Story name="Medium Size" args={{ pathname: '/blog', size: 'md' }} />

<Story name="Large Size" args={{ pathname: '/blog', size: 'lg' }} />

<!-- Customization -->
<Story name="Custom Separator Arrow" args={{ pathname: '/blog/post', separator: '>' }} />

<Story name="Custom Separator Chevron" args={{ pathname: '/blog/post', separator: '›' }} />

<Story name="Custom Separator Slash" args={{ pathname: '/blog/post', separator: '|' }} />

<Story name="Without Home" args={{ pathname: '/blog/post', showHome: false }} />

<Story name="Custom Home Label" args={{ pathname: '/blog', homeLabel: 'Start' }} />

<!-- Custom Items -->
<Story
	name="Custom Items"
	args={{
		items: [
			{ label: 'Dashboard', href: '/dashboard' },
			{ label: 'Settings', href: '/dashboard/settings' },
			{ label: 'Profile', href: '/dashboard/settings/profile' }
		]
	}}
/>

<!-- Home Page (Should Not Render) -->
<Story name="Home Page (Hidden)">
	<div class="bg-surface rounded border p-4">
		<p class="text-subtext text-sm">Breadcrumbs are hidden on the home page:</p>
		<BreadcrumbTestWrapper pathname="/" />
		<p class="text-subtext mt-2 text-xs italic">(Nothing renders above this line)</p>
	</div>
</Story>

<!-- All Sizes Showcase -->
<Story name="All Sizes">
	<div class="flex flex-col gap-4">
		<div>
			<p class="text-subtext mb-1 text-xs">Small (sm)</p>
			<BreadcrumbTestWrapper pathname="/blog/my-post" size="sm" />
		</div>
		<div>
			<p class="text-subtext mb-1 text-xs">Medium (md)</p>
			<BreadcrumbTestWrapper pathname="/blog/my-post" size="md" />
		</div>
		<div>
			<p class="text-subtext mb-1 text-xs">Large (lg)</p>
			<BreadcrumbTestWrapper pathname="/blog/my-post" size="lg" />
		</div>
	</div>
</Story>

<!-- All Separators Showcase -->
<Story name="All Separators">
	<div class="flex flex-col gap-4">
		<div>
			<p class="text-subtext mb-1 text-xs">Default (/)</p>
			<BreadcrumbTestWrapper pathname="/blog/post" separator="/" />
		</div>
		<div>
			<p class="text-subtext mb-1 text-xs">Arrow (>)</p>
			<BreadcrumbTestWrapper pathname="/blog/post" separator=">" />
		</div>
		<div>
			<p class="text-subtext mb-1 text-xs">Chevron (›)</p>
			<BreadcrumbTestWrapper pathname="/blog/post" separator="›" />
		</div>
		<div>
			<p class="text-subtext mb-1 text-xs">Pipe (|)</p>
			<BreadcrumbTestWrapper pathname="/blog/post" separator="|" />
		</div>
		<div>
			<p class="text-subtext mb-1 text-xs">Bullet (•)</p>
			<BreadcrumbTestWrapper pathname="/blog/post" separator="•" />
		</div>
	</div>
</Story>
