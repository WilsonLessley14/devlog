<script lang="ts">
	import {
		Avatar,
		Badge,
		Button,
		Card,
		Icon,
		Image,
		Input,
		Link,
		Spinner,
		Text,
		Tooltip
	} from '$lib/design-system';
	import BreadcrumbTestWrapper from '$lib/design-system/primitives/BreadcrumbTestWrapper.svelte';

	// State for interactive demos
	let inputValue = $state('');
	let emailValue = $state('');
	let passwordValue = $state('');
	let searchValue = $state('');
	let errorInputValue = $state('invalid@');
</script>

<svelte:head>
	<title>Design System | The Cave</title>
	<meta
		name="description"
		content="Explore the design system components used throughout The Cave website."
	/>
</svelte:head>

<main class="mx-auto max-w-4xl px-4 py-8">
	<Text as="h1" variant="heading" size="4xl" class="mb-2">Design System</Text>
	<Text variant="body" color="subtext" class="mb-12">
		A comprehensive showcase of the primitive components used throughout this site. Each component
		is built with accessibility, theming, and consistency in mind.
	</Text>

	<!-- Button Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">
			Button
		</Text>

		<Text variant="body" class="mb-6">
			Buttons trigger actions and navigation. They come in three variants (primary, secondary,
			ghost) and three sizes (sm, md, lg).
		</Text>

		<!-- Variants -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Variants</Text>
			<div class="flex flex-wrap items-center gap-4">
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="ghost">Ghost</Button>
			</div>
			<Card variant="code" class="mt-4">
				&lt;Button variant="primary"&gt;Primary&lt;/Button&gt;
			</Card>
		</div>

		<!-- Sizes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Sizes</Text>
			<div class="flex flex-wrap items-center gap-4">
				<Button size="sm">Small</Button>
				<Button size="md">Medium</Button>
				<Button size="lg">Large</Button>
			</div>
			<Card variant="code" class="mt-4">&lt;Button size="sm"&gt;Small&lt;/Button&gt;</Card>
		</div>

		<!-- States -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">States</Text>
			<div class="flex flex-wrap items-center gap-4">
				<Button variant="primary">Normal</Button>
				<Button variant="primary" disabled>Disabled</Button>
				<Button variant="primary" loading>Loading</Button>
			</div>
			<Card variant="code" class="mt-4">&lt;Button disabled&gt;Disabled&lt;/Button&gt;</Card>
		</div>

		<!-- All Combinations -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">All Combinations</Text>
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<thead>
						<tr>
							<th class="border-border border-b p-2 text-left"></th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">Small</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">Medium</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">Large</Text>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Primary</Text>
							</td>
							<td class="border-border border-b p-2">
								<Button variant="primary" size="sm">Button</Button>
							</td>
							<td class="border-border border-b p-2">
								<Button variant="primary" size="md">Button</Button>
							</td>
							<td class="border-border border-b p-2">
								<Button variant="primary" size="lg">Button</Button>
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Secondary</Text>
							</td>
							<td class="border-border border-b p-2">
								<Button variant="secondary" size="sm">Button</Button>
							</td>
							<td class="border-border border-b p-2">
								<Button variant="secondary" size="md">Button</Button>
							</td>
							<td class="border-border border-b p-2">
								<Button variant="secondary" size="lg">Button</Button>
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Ghost</Text>
							</td>
							<td class="border-border border-b p-2">
								<Button variant="ghost" size="sm">Button</Button>
							</td>
							<td class="border-border border-b p-2">
								<Button variant="ghost" size="md">Button</Button>
							</td>
							<td class="border-border border-b p-2">
								<Button variant="ghost" size="lg">Button</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- Badge Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">Badge</Text>

		<Text variant="body" class="mb-6">
			Badges are compact elements used to display labels, tags, or status indicators. They support
			multiple variants for semantic meaning and multiple sizes for different contexts.
		</Text>

		<!-- Variants -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Variants</Text>
			<div class="flex flex-wrap items-center gap-3">
				<Badge variant="default">Default</Badge>
				<Badge variant="success">Success</Badge>
				<Badge variant="warning">Warning</Badge>
				<Badge variant="error">Error</Badge>
			</div>
			<Card variant="code" class="mt-4">&lt;Badge variant="success"&gt;Success&lt;/Badge&gt;</Card>
		</div>

		<!-- Sizes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Sizes</Text>
			<div class="flex flex-wrap items-center gap-3">
				<Badge size="sm">Small</Badge>
				<Badge size="md">Medium</Badge>
				<Badge size="lg">Large</Badge>
			</div>
			<Card variant="code" class="mt-4">&lt;Badge size="lg"&gt;Large&lt;/Badge&gt;</Card>
		</div>

		<!-- Use Cases -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Common Use Cases</Text>

			<!-- Blog Tags -->
			<div class="mb-6">
				<Text variant="label" class="mb-3">Blog Post Tags</Text>
				<div class="flex flex-wrap gap-2">
					<Badge>TypeScript</Badge>
					<Badge>Svelte</Badge>
					<Badge>JavaScript</Badge>
					<Badge>Web Development</Badge>
				</div>
			</div>

			<!-- Skill Labels -->
			<div class="mb-6">
				<Text variant="label" class="mb-3">Skill Labels</Text>
				<div class="flex flex-wrap gap-2">
					<Badge variant="success">JavaScript</Badge>
					<Badge variant="success">React</Badge>
					<Badge variant="success">Node.js</Badge>
					<Badge variant="warning">Learning</Badge>
				</div>
			</div>

			<!-- Status Indicators -->
			<div class="mb-6">
				<Text variant="label" class="mb-3">Status Indicators</Text>
				<div class="flex flex-wrap gap-2">
					<Badge variant="success">Active</Badge>
					<Badge variant="warning">Pending</Badge>
					<Badge variant="error">Failed</Badge>
					<Badge variant="default">Draft</Badge>
				</div>
			</div>
		</div>

		<!-- All Combinations -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">All Combinations</Text>
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<thead>
						<tr>
							<th class="border-border border-b p-2 text-left"></th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">Small</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">Medium</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">Large</Text>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Default</Text>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="default" size="sm">Badge</Badge>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="default" size="md">Badge</Badge>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="default" size="lg">Badge</Badge>
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Success</Text>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="success" size="sm">Badge</Badge>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="success" size="md">Badge</Badge>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="success" size="lg">Badge</Badge>
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Warning</Text>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="warning" size="sm">Badge</Badge>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="warning" size="md">Badge</Badge>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="warning" size="lg">Badge</Badge>
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Error</Text>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="error" size="sm">Badge</Badge>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="error" size="md">Badge</Badge>
							</td>
							<td class="border-border border-b p-2">
								<Badge variant="error" size="lg">Badge</Badge>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- Icon Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">Icon</Text>

		<Text variant="body" class="mb-6">
			Icons are wrapper components for SVG icons, providing consistent sizing and coloring. They
			support accessibility through labels for meaningful icons or aria-hidden for decorative ones.
		</Text>

		<!-- Sizes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Sizes</Text>
			<div class="flex flex-wrap items-center gap-6">
				<div class="text-center">
					<Icon size="xs">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">xs (12px)</Text>
				</div>
				<div class="text-center">
					<Icon size="sm">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">sm (16px)</Text>
				</div>
				<div class="text-center">
					<Icon size="md">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">md (20px)</Text>
				</div>
				<div class="text-center">
					<Icon size="lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">lg (24px)</Text>
				</div>
				<div class="text-center">
					<Icon size="xl">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">xl (32px)</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4"
				>&lt;Icon size="lg"&gt;&lt;svg&gt;...&lt;/svg&gt;&lt;/Icon&gt;</Card
			>
		</div>

		<!-- Colors -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Colors</Text>
			<div class="flex flex-wrap items-center gap-6">
				<div class="text-center">
					<span class="text-brand">
						<Icon color="current" size="lg">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-full w-full"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
									clip-rule="evenodd"
								/>
							</svg>
						</Icon>
					</span>
					<Text variant="caption" color="subtext" class="mt-2">current (inherits)</Text>
				</div>
				<div class="text-center">
					<Icon color="primary" size="lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">primary</Text>
				</div>
				<div class="text-center">
					<Icon color="secondary" size="lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">secondary</Text>
				</div>
				<div class="text-center">
					<Icon color="muted" size="lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">muted</Text>
				</div>
				<div class="text-center">
					<Icon color="success" size="lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">success</Text>
				</div>
				<div class="text-center">
					<Icon color="warning" size="lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">warning</Text>
				</div>
				<div class="text-center">
					<Icon color="error" size="lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="h-full w-full"
						>
							<path
								fill-rule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
								clip-rule="evenodd"
							/>
						</svg>
					</Icon>
					<Text variant="caption" color="subtext" class="mt-2">error</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4"
				>&lt;Icon color="success"&gt;&lt;svg&gt;...&lt;/svg&gt;&lt;/Icon&gt;</Card
			>
		</div>

		<!-- Accessibility -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Accessibility</Text>
			<Text variant="body" color="subtext" class="mb-4">
				Icons without a label are treated as decorative and hidden from screen readers. Icons with a
				label are announced as images with the provided description.
			</Text>
			<div class="space-y-4">
				<div class="bg-surface border-border rounded-md border p-4">
					<div class="flex items-center gap-3">
						<Icon size="lg" color="muted">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-full w-full"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
									clip-rule="evenodd"
								/>
							</svg>
						</Icon>
						<Text variant="body">Decorative icon (no label) - aria-hidden="true"</Text>
					</div>
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<div class="flex items-center gap-3">
						<Icon size="lg" color="primary" label="Favorite">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-full w-full"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
									clip-rule="evenodd"
								/>
							</svg>
						</Icon>
						<Text variant="body">Meaningful icon with label - role="img" aria-label="Favorite"</Text
						>
					</div>
				</div>
			</div>
			<Card variant="code" class="mt-4"
				>&lt;Icon label="Favorite"&gt;&lt;svg&gt;...&lt;/svg&gt;&lt;/Icon&gt;</Card
			>
		</div>

		<!-- Use Cases -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Common Use Cases</Text>
			<div class="grid gap-4 md:grid-cols-2">
				<Card variant="content">
					{#snippet title()}
						<Text as="h4" variant="heading" size="base">Button with Icon</Text>
					{/snippet}
					<div class="mt-2 flex items-center gap-2">
						<Button variant="primary">
							<span class="flex items-center gap-2">
								<Icon size="sm" color="current">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="h-full w-full"
									>
										<path
											fill-rule="evenodd"
											d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
											clip-rule="evenodd"
										/>
									</svg>
								</Icon>
								Add Item
							</span>
						</Button>
					</div>
				</Card>

				<Card variant="content">
					{#snippet title()}
						<Text as="h4" variant="heading" size="base">Status Indicators</Text>
					{/snippet}
					<div class="mt-2 flex items-center gap-4">
						<span class="flex items-center gap-1">
							<Icon size="sm" color="success">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="h-full w-full"
								>
									<path
										fill-rule="evenodd"
										d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
										clip-rule="evenodd"
									/>
								</svg>
							</Icon>
							<Text variant="caption" color="success">Active</Text>
						</span>
						<span class="flex items-center gap-1">
							<Icon size="sm" color="error">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									class="h-full w-full"
								>
									<path
										fill-rule="evenodd"
										d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
										clip-rule="evenodd"
									/>
								</svg>
							</Icon>
							<Text variant="caption" color="error">Error</Text>
						</span>
					</div>
				</Card>
			</div>
		</div>

		<!-- All Combinations -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">All Combinations</Text>
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<thead>
						<tr>
							<th class="border-border border-b p-2 text-left"></th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">xs</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">sm</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">md</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">lg</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">xl</Text>
							</th>
						</tr>
					</thead>
					<tbody>
						{#each ['primary', 'secondary', 'muted', 'success', 'warning', 'error'] as color (color)}
							<tr>
								<td class="border-border border-b p-2">
									<Text variant="label">{color}</Text>
								</td>
								{#each ['xs', 'sm', 'md', 'lg', 'xl'] as size (size)}
									<td class="border-border border-b p-2">
										<Icon
											size={size as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}
											color={color as
												| 'primary'
												| 'secondary'
												| 'muted'
												| 'success'
												| 'warning'
												| 'error'}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="currentColor"
												class="h-full w-full"
											>
												<path
													fill-rule="evenodd"
													d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
													clip-rule="evenodd"
												/>
											</svg>
										</Icon>
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- Text Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">
			Text / Typography
		</Text>

		<Text variant="body" class="mb-6">
			The Text component provides consistent typography across the application. It supports multiple
			semantic elements, variants, sizes, weights, and colors.
		</Text>

		<!-- Variants -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Variants</Text>
			<div class="space-y-4">
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="heading">Heading Variant</Text>
					<Text variant="caption" color="subtext" class="mt-1">
						variant="heading" - Bold text for titles
					</Text>
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="body">Body Variant - Regular paragraph text for content.</Text>
					<Text variant="caption" color="subtext" class="mt-1">
						variant="body" - Default for paragraphs
					</Text>
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption">Caption Variant - Small text for annotations</Text>
					<Text variant="caption" color="subtext" class="mt-1">
						variant="caption" - Smaller, supplementary text
					</Text>
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="label">Label Variant</Text>
					<Text variant="caption" color="subtext" class="mt-1">
						variant="label" - For form labels
					</Text>
				</div>
			</div>
		</div>

		<!-- Sizes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Sizes</Text>
			<div class="space-y-2">
				<Text size="4xl">4xl - Extra Large Heading</Text>
				<Text size="3xl">3xl - Large Heading</Text>
				<Text size="2xl">2xl - Section Heading</Text>
				<Text size="xl">xl - Subsection Heading</Text>
				<Text size="lg">lg - Large Body Text</Text>
				<Text size="base">base - Default Body Text</Text>
				<Text size="sm">sm - Small Text</Text>
				<Text size="xs">xs - Extra Small Text</Text>
			</div>
			<Card variant="code" class="mt-4">&lt;Text size="2xl"&gt;Section Heading&lt;/Text&gt;</Card>
		</div>

		<!-- Weights -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Weights</Text>
			<div class="space-y-2">
				<Text weight="normal">Normal Weight (400)</Text>
				<Text weight="medium">Medium Weight (500)</Text>
				<Text weight="semibold">Semibold Weight (600)</Text>
				<Text weight="bold">Bold Weight (700)</Text>
			</div>
		</div>

		<!-- Colors -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Colors</Text>
			<div class="space-y-2">
				<Text color="text">text - Default text color</Text>
				<Text color="subtext">subtext - Secondary text color</Text>
				<Text color="brand">brand - Brand/accent color</Text>
				<Text color="success">success - Success state</Text>
				<Text color="error">error - Error state</Text>
				<Text color="warning">warning - Warning state</Text>
				<Text color="info">info - Information state</Text>
			</div>
		</div>

		<!-- Alignment -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Alignment</Text>
			<div class="space-y-2">
				<div class="bg-surface border-border rounded border p-2">
					<Text align="left">Left aligned text (default)</Text>
				</div>
				<div class="bg-surface border-border rounded border p-2">
					<Text align="center">Center aligned text</Text>
				</div>
				<div class="bg-surface border-border rounded border p-2">
					<Text align="right">Right aligned text</Text>
				</div>
			</div>
		</div>

		<!-- Semantic Elements -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Semantic Elements</Text>
			<div class="space-y-2">
				<Text as="h1" size="xl">h1 - Page Title</Text>
				<Text as="h2" size="lg">h2 - Section Title</Text>
				<Text as="h3" size="base" weight="semibold">h3 - Subsection Title</Text>
				<Text as="p">p - Paragraph element (default for body variant)</Text>
				<Text as="span">span - Inline text element</Text>
				<Text as="label">label - Form label element</Text>
			</div>
			<Card variant="code" class="mt-4">
				&lt;Text as="h1" size="4xl"&gt;Page Title&lt;/Text&gt;
			</Card>
		</div>

		<!-- Special Features -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Special Features</Text>
			<div class="space-y-4">
				<div class="bg-surface border-border rounded-md border p-4">
					<Text italic>Italic text for emphasis</Text>
					<Text variant="caption" color="subtext" class="mt-1">italic={'{true}'}</Text>
				</div>
				<div class="bg-surface border-border max-w-xs rounded-md border p-4">
					<Text truncate>
						This is a very long text that will be truncated with an ellipsis when it overflows its
						container.
					</Text>
					<Text variant="caption" color="subtext" class="mt-1">truncate={'{true}'}</Text>
				</div>
			</div>
		</div>
	</section>

	<!-- Input Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">Input</Text>

		<Text variant="body" class="mb-6">
			Input components for collecting user data. Supports multiple types, sizes, validation states,
			and accessibility features.
		</Text>

		<!-- Types -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Types</Text>
			<div class="max-w-md space-y-4">
				<Input type="text" label="Text Input" placeholder="Enter text..." bind:value={inputValue} />
				<Input
					type="email"
					label="Email Input"
					placeholder="email@example.com"
					bind:value={emailValue}
				/>
				<Input
					type="password"
					label="Password Input"
					placeholder="Enter password..."
					bind:value={passwordValue}
				/>
				<Input
					type="search"
					label="Search Input"
					placeholder="Search..."
					bind:value={searchValue}
				/>
			</div>
			<Card variant="code" class="mt-4">
				&lt;Input type="email" label="Email" placeholder="email@example.com" /&gt;
			</Card>
		</div>

		<!-- Sizes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Sizes</Text>
			<div class="max-w-md space-y-4">
				<Input size="sm" placeholder="Small input" />
				<Input size="md" placeholder="Medium input (default)" />
				<Input size="lg" placeholder="Large input" />
			</div>
		</div>

		<!-- States -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">States</Text>
			<div class="max-w-md space-y-4">
				<Input label="Default" placeholder="Normal input state" />
				<Input
					label="With Helper Text"
					placeholder="Enter your username"
					helperText="Your username must be unique"
				/>
				<Input
					label="Error State"
					placeholder="Invalid input"
					error
					errorMessage="Please enter a valid email address"
					bind:value={errorInputValue}
				/>
				<Input label="Disabled" placeholder="Cannot edit" disabled />
				<Input label="Readonly" value="Read-only value" readonly />
				<Input label="Required Field" placeholder="This field is required" required />
			</div>
			<Card variant="code" class="mt-4">&lt;Input error errorMessage="Invalid input" /&gt;</Card>
		</div>

		<!-- With Labels and Helper Text -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Complete Examples</Text>
			<div class="max-w-md space-y-6">
				<Input
					type="email"
					label="Email Address"
					placeholder="you@company.com"
					helperText="We'll never share your email with anyone else."
					required
				/>
				<Input
					type="password"
					label="Password"
					placeholder="Create a strong password"
					helperText="Must be at least 8 characters long."
					required
				/>
			</div>
		</div>
	</section>

	<!-- Card Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">Card</Text>

		<Text variant="body" class="mb-6">
			Cards are container components for grouping related content. They come in two variants:
			content cards for general information and code cards for displaying code snippets.
		</Text>

		<!-- Content Variant -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Content Variant</Text>
			<Text variant="body" color="subtext" class="mb-4">
				Use content cards to group related information with an optional title. They have rounded
				corners, padding, and a subtle border.
			</Text>
			<div class="space-y-4">
				<Card variant="content">
					{#snippet title()}
						<Text as="h3" variant="heading" size="lg">Card with Title</Text>
					{/snippet}
					<Text variant="body" color="subtext">
						This card has a title and body content. The title snippet allows for custom heading
						elements and styling.
					</Text>
				</Card>

				<Card variant="content">
					<Text variant="body" color="subtext">
						This card has no title - just body content. Useful for simple informational blocks or
						when the context is clear from surrounding content.
					</Text>
				</Card>
			</div>
			<Card variant="code" class="mt-4">
				{'<Card variant="content">{#snippet title()}<Text>Title</Text>{/snippet}Body content</Card>'}
			</Card>
		</div>

		<!-- Code Variant -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Code Variant</Text>
			<Text variant="body" color="subtext" class="mb-4">
				Code cards are styled for displaying code snippets. They use a monospace font and
				appropriate styling for code examples.
			</Text>
			<div class="space-y-4">
				<Card variant="code">&lt;Button variant="primary"&gt;Click me&lt;/Button&gt;</Card>

				<Card variant="code">
					{"import { Button, Card, Text } from '$lib/design-system';"}
				</Card>
			</div>
			<Card variant="code" class="mt-4">
				{'<Card variant="code">{\'code snippet here\'}</Card>'}
			</Card>
		</div>

		<!-- Grid Layout -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Grid Layout</Text>
			<Text variant="body" color="subtext" class="mb-4">
				Cards work well in grid layouts for displaying related items side by side.
			</Text>
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				<Card variant="content">
					{#snippet title()}
						<Text as="h3" variant="heading" size="base">Feature One</Text>
					{/snippet}
					<Text variant="body" color="subtext" size="sm">
						A brief description of the first feature or item.
					</Text>
				</Card>

				<Card variant="content">
					{#snippet title()}
						<Text as="h3" variant="heading" size="base">Feature Two</Text>
					{/snippet}
					<Text variant="body" color="subtext" size="sm">
						A brief description of the second feature or item.
					</Text>
				</Card>

				<Card variant="content">
					{#snippet title()}
						<Text as="h3" variant="heading" size="base">Feature Three</Text>
					{/snippet}
					<Text variant="body" color="subtext" size="sm">
						A brief description of the third feature or item.
					</Text>
				</Card>
			</div>
			<Card variant="code" class="mt-4">
				&lt;div class="grid gap-4
				md:grid-cols-2"&gt;&lt;Card&gt;...&lt;/Card&gt;&lt;Card&gt;...&lt;/Card&gt;&lt;/div&gt;
			</Card>
		</div>
	</section>

	<!-- Breadcrumb Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">
			Breadcrumb
		</Text>

		<Text variant="body" class="mb-6">
			Breadcrumbs provide navigation context by showing the current page's location within the site
			hierarchy. They automatically generate from the URL path and support customization.
		</Text>

		<!-- Basic Examples -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Basic Examples</Text>
			<div class="space-y-4">
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Path: /blog</Text>
					<BreadcrumbTestWrapper pathname="/blog" />
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Path: /blog/my-first-post</Text>
					<BreadcrumbTestWrapper pathname="/blog/my-first-post" />
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Path: /design-system</Text>
					<BreadcrumbTestWrapper pathname="/design-system" />
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Breadcrumb /&gt;</Card>
		</div>

		<!-- Sizes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Sizes</Text>
			<div class="space-y-4">
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Small (default)</Text>
					<BreadcrumbTestWrapper pathname="/blog/post" size="sm" />
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Medium</Text>
					<BreadcrumbTestWrapper pathname="/blog/post" size="md" />
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Large</Text>
					<BreadcrumbTestWrapper pathname="/blog/post" size="lg" />
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Breadcrumb size="md" /&gt;</Card>
		</div>

		<!-- Separators -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Custom Separators</Text>
			<div class="space-y-4">
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Default (/)</Text>
					<BreadcrumbTestWrapper pathname="/blog/post" separator="/" />
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Chevron (›)</Text>
					<BreadcrumbTestWrapper pathname="/blog/post" separator="›" />
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Arrow (>)</Text>
					<BreadcrumbTestWrapper pathname="/blog/post" separator=">" />
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Breadcrumb separator="›" /&gt;</Card>
		</div>

		<!-- Customization -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Customization Options</Text>
			<div class="space-y-4">
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Without Home</Text>
					<BreadcrumbTestWrapper pathname="/blog/post" showHome={false} />
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Custom Home Label</Text>
					<BreadcrumbTestWrapper pathname="/blog/post" homeLabel="Dashboard" />
				</div>
				<div class="bg-surface border-border rounded-md border p-4">
					<Text variant="caption" color="subtext" class="mb-2">Custom Items</Text>
					<BreadcrumbTestWrapper
						items={[
							{ label: 'Dashboard', href: '/dashboard' },
							{ label: 'Settings', href: '/settings' },
							{ label: 'Profile', href: '/profile' }
						]}
					/>
				</div>
			</div>
			<Card variant="code" class="mt-4">
				&lt;Breadcrumb showHome={'{false}'} /&gt;
			</Card>
		</div>
	</section>

	<!-- Link Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">Link</Text>

		<Text variant="body" class="mb-6">
			Links provide navigation to other pages or external resources. They support multiple variants,
			sizes, and underline styles for different use cases.
		</Text>

		<!-- Variants -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Variants</Text>
			<div class="flex flex-wrap items-center gap-6">
				<Link href="/example">Default Link</Link>
				<Link href="/example" variant="subtle">Subtle Link</Link>
				<Link href="/example" variant="muted">Muted Link</Link>
			</div>
			<Card variant="code" class="mt-4"
				>&lt;Link href="/page" variant="subtle"&gt;Link&lt;/Link&gt;</Card
			>
		</div>

		<!-- Sizes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Sizes</Text>
			<div class="flex flex-wrap items-center gap-6">
				<Link href="/example" size="sm">Small</Link>
				<Link href="/example" size="md">Medium</Link>
				<Link href="/example" size="lg">Large</Link>
			</div>
			<Card variant="code" class="mt-4"
				>&lt;Link href="/page" size="lg"&gt;Large Link&lt;/Link&gt;</Card
			>
		</div>

		<!-- Underline Styles -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Underline Styles</Text>
			<div class="flex flex-wrap items-center gap-6">
				<Link href="/example" underline="hover">Hover (default)</Link>
				<Link href="/example" underline="always">Always</Link>
				<Link href="/example" underline="none">None</Link>
			</div>
			<Card variant="code" class="mt-4"
				>&lt;Link href="/page" underline="always"&gt;Always underlined&lt;/Link&gt;</Card
			>
		</div>

		<!-- External Links -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">External Links</Text>
			<Text variant="body" color="subtext" class="mb-4">
				External links automatically add target="_blank", rel="noopener noreferrer", and a visual
				indicator.
			</Text>
			<div class="flex flex-wrap items-center gap-6">
				<Link href="https://github.com" external>GitHub</Link>
				<Link href="https://svelte.dev" external>Svelte</Link>
			</div>
			<Card variant="code" class="mt-4"
				>&lt;Link href="https://github.com" external&gt;GitHub&lt;/Link&gt;</Card
			>
		</div>

		<!-- All Combinations -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">All Combinations</Text>
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<thead>
						<tr>
							<th class="border-border border-b p-2 text-left"></th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">Small</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">Medium</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">Large</Text>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Default</Text>
							</td>
							<td class="border-border border-b p-2">
								<Link href="/example" variant="default" size="sm">Link</Link>
							</td>
							<td class="border-border border-b p-2">
								<Link href="/example" variant="default" size="md">Link</Link>
							</td>
							<td class="border-border border-b p-2">
								<Link href="/example" variant="default" size="lg">Link</Link>
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Subtle</Text>
							</td>
							<td class="border-border border-b p-2">
								<Link href="/example" variant="subtle" size="sm">Link</Link>
							</td>
							<td class="border-border border-b p-2">
								<Link href="/example" variant="subtle" size="md">Link</Link>
							</td>
							<td class="border-border border-b p-2">
								<Link href="/example" variant="subtle" size="lg">Link</Link>
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Muted</Text>
							</td>
							<td class="border-border border-b p-2">
								<Link href="/example" variant="muted" size="sm">Link</Link>
							</td>
							<td class="border-border border-b p-2">
								<Link href="/example" variant="muted" size="md">Link</Link>
							</td>
							<td class="border-border border-b p-2">
								<Link href="/example" variant="muted" size="lg">Link</Link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- Image Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">Image</Text>

		<Text variant="body" class="mb-6">
			Images display visual content with consistent styling, aspect ratios, and interactive effects.
			Supports lazy loading, various fits, and hover animations.
		</Text>

		<!-- Aspect Ratios -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Aspect Ratios</Text>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
				<div>
					<Image
						src="https://placecats.com/200/200"
						alt="Square aspect ratio"
						aspectRatio="square"
						rounded="md"
					/>
					<Text variant="caption" color="subtext" class="mt-2">square (1:1)</Text>
				</div>
				<div>
					<Image
						src="https://placecats.com/320/180"
						alt="Video aspect ratio"
						aspectRatio="video"
						rounded="md"
					/>
					<Text variant="caption" color="subtext" class="mt-2">video (16:9)</Text>
				</div>
				<div>
					<Image
						src="https://placecats.com/150/200"
						alt="Portrait aspect ratio"
						aspectRatio="portrait"
						rounded="md"
					/>
					<Text variant="caption" color="subtext" class="mt-2">portrait (3:4)</Text>
				</div>
				<div>
					<Image
						src="https://placecats.com/400/200"
						alt="Wide aspect ratio"
						aspectRatio="wide"
						rounded="md"
					/>
					<Text variant="caption" color="subtext" class="mt-2">wide (2:1)</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4"
				>&lt;Image src="..." alt="..." aspectRatio="square" /&gt;</Card
			>
		</div>

		<!-- Rounded Corners -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Rounded Corners</Text>
			<div class="flex flex-wrap items-end gap-4">
				<div>
					<Image
						src="https://placecats.com/100/100"
						alt="No rounding"
						aspectRatio="square"
						rounded="none"
						class="w-24"
					/>
					<Text variant="caption" color="subtext" class="mt-2">none</Text>
				</div>
				<div>
					<Image
						src="https://placecats.com/100/100"
						alt="Small rounding"
						aspectRatio="square"
						rounded="sm"
						class="w-24"
					/>
					<Text variant="caption" color="subtext" class="mt-2">sm</Text>
				</div>
				<div>
					<Image
						src="https://placecats.com/100/100"
						alt="Medium rounding"
						aspectRatio="square"
						rounded="md"
						class="w-24"
					/>
					<Text variant="caption" color="subtext" class="mt-2">md</Text>
				</div>
				<div>
					<Image
						src="https://placecats.com/100/100"
						alt="Large rounding"
						aspectRatio="square"
						rounded="lg"
						class="w-24"
					/>
					<Text variant="caption" color="subtext" class="mt-2">lg</Text>
				</div>
				<div>
					<Image
						src="https://placecats.com/100/100"
						alt="Full rounding (circle)"
						aspectRatio="square"
						rounded="full"
						class="w-24"
					/>
					<Text variant="caption" color="subtext" class="mt-2">full</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Image src="..." alt="..." rounded="full" /&gt;</Card>
		</div>

		<!-- Effects -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Effects</Text>
			<div class="flex flex-wrap gap-6">
				<div>
					<Image
						src="https://placecats.com/150/150"
						alt="With shadow"
						aspectRatio="square"
						rounded="md"
						shadow
						class="w-36"
					/>
					<Text variant="caption" color="subtext" class="mt-2">shadow</Text>
				</div>
				<div>
					<Image
						src="https://placecats.com/150/150"
						alt="With hover scale"
						aspectRatio="square"
						rounded="md"
						hoverScale
						class="w-36"
					/>
					<Text variant="caption" color="subtext" class="mt-2">hoverScale (hover me)</Text>
				</div>
				<div>
					<Image
						src="https://placecats.com/150/150"
						alt="Gallery style"
						aspectRatio="square"
						rounded="lg"
						shadow
						hoverScale
						class="w-36"
					/>
					<Text variant="caption" color="subtext" class="mt-2">combined (gallery style)</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Image src="..." alt="..." shadow hoverScale /&gt;</Card>
		</div>

		<!-- Object Fit -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Object Fit</Text>
			<Text variant="body" color="subtext" class="mb-4">
				Control how the image fills its container when aspect ratios differ.
			</Text>
			<div
				class="bg-surface border-border grid grid-cols-2 gap-4 rounded-md border p-4 md:grid-cols-4"
			>
				<div>
					<div class="bg-border h-32 w-full">
						<Image
							src="https://placecats.com/200/100"
							alt="Object cover"
							fit="cover"
							class="h-32"
						/>
					</div>
					<Text variant="caption" color="subtext" class="mt-2">cover (default)</Text>
				</div>
				<div>
					<div class="bg-border h-32 w-full">
						<Image
							src="https://placecats.com/200/100"
							alt="Object contain"
							fit="contain"
							class="h-32"
						/>
					</div>
					<Text variant="caption" color="subtext" class="mt-2">contain</Text>
				</div>
				<div>
					<div class="bg-border h-32 w-full">
						<Image src="https://placecats.com/200/100" alt="Object fill" fit="fill" class="h-32" />
					</div>
					<Text variant="caption" color="subtext" class="mt-2">fill</Text>
				</div>
				<div>
					<div class="bg-border h-32 w-full overflow-hidden">
						<Image src="https://placecats.com/200/100" alt="Object none" fit="none" class="h-32" />
					</div>
					<Text variant="caption" color="subtext" class="mt-2">none</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Image src="..." alt="..." fit="contain" /&gt;</Card>
		</div>
	</section>

	<!-- Spinner Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">
			Spinner
		</Text>

		<Text variant="body" class="mb-6">
			Spinners indicate loading states and async operations. They support multiple sizes and colors,
			with proper accessibility attributes for screen readers.
		</Text>

		<!-- Sizes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Sizes</Text>
			<div class="flex flex-wrap items-center gap-8">
				<div class="text-center">
					<Spinner size="sm" />
					<Text variant="caption" color="subtext" class="mt-2">Small</Text>
				</div>
				<div class="text-center">
					<Spinner size="md" />
					<Text variant="caption" color="subtext" class="mt-2">Medium (default)</Text>
				</div>
				<div class="text-center">
					<Spinner size="lg" />
					<Text variant="caption" color="subtext" class="mt-2">Large</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Spinner size="lg" /&gt;</Card>
		</div>

		<!-- Colors -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Colors</Text>
			<div class="flex flex-wrap items-center gap-8">
				<div class="text-center">
					<Spinner color="brand" />
					<Text variant="caption" color="subtext" class="mt-2">brand (default)</Text>
				</div>
				<div class="text-center">
					<Spinner color="text" />
					<Text variant="caption" color="subtext" class="mt-2">text</Text>
				</div>
				<div class="text-center">
					<Spinner color="success" />
					<Text variant="caption" color="subtext" class="mt-2">success</Text>
				</div>
				<div class="text-center">
					<Spinner color="error" />
					<Text variant="caption" color="subtext" class="mt-2">error</Text>
				</div>
				<div class="text-center">
					<Spinner color="warning" />
					<Text variant="caption" color="subtext" class="mt-2">warning</Text>
				</div>
				<div class="text-center">
					<Spinner color="info" />
					<Text variant="caption" color="subtext" class="mt-2">info</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Spinner color="success" /&gt;</Card>
		</div>

		<!-- Accessibility -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Accessibility</Text>
			<Text variant="body" color="subtext" class="mb-4">
				Spinners include role="status" and aria-label for screen readers. Customize the label to
				describe the loading context.
			</Text>
			<div class="flex flex-wrap items-center gap-8">
				<div class="text-center">
					<Spinner label="Loading content" />
					<Text variant="caption" color="subtext" class="mt-2">Default label</Text>
				</div>
				<div class="text-center">
					<Spinner label="Fetching contributions" />
					<Text variant="caption" color="subtext" class="mt-2">Custom label</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Spinner label="Fetching contributions" /&gt;</Card>
		</div>

		<!-- Use Cases -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Common Use Cases</Text>
			<div class="grid gap-4 md:grid-cols-2">
				<Card variant="content">
					{#snippet title()}
						<Text as="h4" variant="heading" size="base">Button Loading State</Text>
					{/snippet}
					<div class="mt-2 flex items-center gap-2">
						<Spinner size="sm" color="text" />
						<Text variant="body" color="subtext">Submitting...</Text>
					</div>
				</Card>

				<Card variant="content">
					{#snippet title()}
						<Text as="h4" variant="heading" size="base">Page Loading</Text>
					{/snippet}
					<div class="mt-4 flex flex-col items-center gap-2">
						<Spinner size="lg" />
						<Text variant="body" color="subtext">Loading page...</Text>
					</div>
				</Card>
			</div>
		</div>
	</section>

	<!-- Tooltip Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">
			Tooltip
		</Text>

		<Text variant="body" class="mb-6">
			Tooltips provide hover hints and extra context on buttons, icons, or other interactive
			elements. They appear on hover and focus, supporting keyboard accessibility.
		</Text>

		<!-- Positions -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Positions</Text>
			<div class="flex flex-wrap items-center justify-center gap-12 py-8">
				<Tooltip text="Tooltip on top" position="top">
					<Button variant="secondary">Top</Button>
				</Tooltip>
				<Tooltip text="Tooltip on bottom" position="bottom">
					<Button variant="secondary">Bottom</Button>
				</Tooltip>
				<Tooltip text="Tooltip on left" position="left">
					<Button variant="secondary">Left</Button>
				</Tooltip>
				<Tooltip text="Tooltip on right" position="right">
					<Button variant="secondary">Right</Button>
				</Tooltip>
			</div>
			<Card variant="code" class="mt-4">
				&lt;Tooltip text="Tooltip on top"
				position="top"&gt;&lt;Button&gt;Top&lt;/Button&gt;&lt;/Tooltip&gt;
			</Card>
		</div>

		<!-- With Icons -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">With Icons</Text>
			<Text variant="body" color="subtext" class="mb-4">
				Tooltips work well on icon buttons where the action might not be immediately clear.
			</Text>
			<div class="flex flex-wrap items-center gap-6">
				<Tooltip text="Add new item">
					<button
						type="button"
						class="bg-surface border-border hover:bg-surfaceHover rounded-md border p-2"
					>
						<Icon size="md" color="current">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-full w-full"
							>
								<path
									fill-rule="evenodd"
									d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
									clip-rule="evenodd"
								/>
							</svg>
						</Icon>
					</button>
				</Tooltip>
				<Tooltip text="Mark as favorite">
					<button
						type="button"
						class="bg-surface border-border hover:bg-surfaceHover rounded-md border p-2"
					>
						<Icon size="md" color="warning">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-full w-full"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
									clip-rule="evenodd"
								/>
							</svg>
						</Icon>
					</button>
				</Tooltip>
				<Tooltip text="Delete item" position="bottom">
					<button
						type="button"
						class="bg-surface border-border hover:bg-surfaceHover rounded-md border p-2"
					>
						<Icon size="md" color="error">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-full w-full"
							>
								<path
									fill-rule="evenodd"
									d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
									clip-rule="evenodd"
								/>
							</svg>
						</Icon>
					</button>
				</Tooltip>
			</div>
			<Card variant="code" class="mt-4">
				&lt;Tooltip text="Add new
				item"&gt;&lt;button&gt;&lt;Icon&gt;...&lt;/Icon&gt;&lt;/button&gt;&lt;/Tooltip&gt;
			</Card>
		</div>

		<!-- Accessibility -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Accessibility</Text>
			<Text variant="body" color="subtext" class="mb-4">
				Tooltips use role="tooltip" and aria-describedby to connect the trigger with the tooltip
				content. They appear on both hover and keyboard focus, and respect prefers-reduced-motion.
			</Text>
			<div class="space-y-4">
				<div class="bg-surface border-border rounded-md border p-4">
					<div class="flex items-center gap-3">
						<Tooltip text="This tooltip appears on keyboard focus too">
							<Button variant="primary">Tab to me</Button>
						</Tooltip>
						<Text variant="body" color="subtext">Try using Tab to focus this button</Text>
					</div>
				</div>
			</div>
			<Card variant="code" class="mt-4">
				&lt;Tooltip text="Accessible tooltip"&gt;&lt;Button&gt;Focus
				me&lt;/Button&gt;&lt;/Tooltip&gt;
			</Card>
		</div>
	</section>

	<!-- Avatar Section -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">
			Avatar
		</Text>

		<Text variant="body" class="mb-6">
			Avatars display user or author photos with automatic fallback support. When no image is
			available, initials are derived from the name. Supports multiple sizes, circle and square
			shapes, and graceful error handling.
		</Text>

		<!-- Image vs Initials -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Image vs Initials</Text>
			<div class="flex flex-wrap items-center gap-6">
				<div class="text-center">
					<Avatar src="https://placecats.com/200/200" alt="User avatar" name="Wilson Lessley" />
					<Text variant="caption" color="subtext" class="mt-2">With image</Text>
				</div>
				<div class="text-center">
					<Avatar name="Wilson Lessley" />
					<Text variant="caption" color="subtext" class="mt-2">Initials fallback</Text>
				</div>
				<div class="text-center">
					<Avatar name="Jane" />
					<Text variant="caption" color="subtext" class="mt-2">Single initial</Text>
				</div>
				<div class="text-center">
					<Avatar />
					<Text variant="caption" color="subtext" class="mt-2">Default placeholder</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4"
				>&lt;Avatar src="/photo.jpg" name="Wilson Lessley" /&gt;</Card
			>
		</div>

		<!-- Sizes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Sizes</Text>
			<div class="flex flex-wrap items-center gap-6">
				<div class="text-center">
					<Avatar name="Wilson Lessley" size="xs" />
					<Text variant="caption" color="subtext" class="mt-2">xs (24px)</Text>
				</div>
				<div class="text-center">
					<Avatar name="Wilson Lessley" size="sm" />
					<Text variant="caption" color="subtext" class="mt-2">sm (32px)</Text>
				</div>
				<div class="text-center">
					<Avatar name="Wilson Lessley" size="md" />
					<Text variant="caption" color="subtext" class="mt-2">md (40px)</Text>
				</div>
				<div class="text-center">
					<Avatar name="Wilson Lessley" size="lg" />
					<Text variant="caption" color="subtext" class="mt-2">lg (48px)</Text>
				</div>
				<div class="text-center">
					<Avatar name="Wilson Lessley" size="xl" />
					<Text variant="caption" color="subtext" class="mt-2">xl (64px)</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Avatar name="Wilson Lessley" size="xl" /&gt;</Card>
		</div>

		<!-- Shapes -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Shape Variants</Text>
			<div class="flex flex-wrap items-center gap-8">
				<div class="text-center">
					<Avatar name="Wilson Lessley" size="lg" shape="circle" />
					<Text variant="caption" color="subtext" class="mt-2">circle (default)</Text>
				</div>
				<div class="text-center">
					<Avatar name="Wilson Lessley" size="lg" shape="square" />
					<Text variant="caption" color="subtext" class="mt-2">square</Text>
				</div>
				<div class="text-center">
					<Avatar src="https://placecats.com/200/200" alt="Circle photo" size="lg" shape="circle" />
					<Text variant="caption" color="subtext" class="mt-2">circle + image</Text>
				</div>
				<div class="text-center">
					<Avatar src="https://placecats.com/200/200" alt="Square photo" size="lg" shape="square" />
					<Text variant="caption" color="subtext" class="mt-2">square + image</Text>
				</div>
			</div>
			<Card variant="code" class="mt-4">&lt;Avatar name="WL" shape="square" /&gt;</Card>
		</div>

		<!-- Use Cases -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">Common Use Cases</Text>
			<div class="grid gap-4 md:grid-cols-2">
				<Card variant="content">
					{#snippet title()}
						<Text as="h4" variant="heading" size="base">Blog Post Author</Text>
					{/snippet}
					<div class="mt-3 flex items-center gap-3">
						<Avatar src="https://placecats.com/200/200" name="Wilson Lessley" size="md" />
						<div>
							<Text variant="body" size="sm" weight="medium">Wilson Lessley</Text>
							<Text variant="caption" color="subtext">January 28, 2026</Text>
						</div>
					</div>
				</Card>

				<Card variant="content">
					{#snippet title()}
						<Text as="h4" variant="heading" size="base">Comment Thread</Text>
					{/snippet}
					<div class="mt-3 space-y-3">
						<div class="flex items-start gap-3">
							<Avatar name="Jane Doe" size="sm" />
							<div>
								<Text variant="body" size="sm" weight="medium">Jane Doe</Text>
								<Text variant="caption" color="subtext">Great article!</Text>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<Avatar name="Bob Smith" size="sm" />
							<div>
								<Text variant="body" size="sm" weight="medium">Bob Smith</Text>
								<Text variant="caption" color="subtext">Thanks for sharing.</Text>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>

		<!-- All Combinations -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">All Combinations</Text>
			<div class="overflow-x-auto">
				<table class="w-full border-collapse">
					<thead>
						<tr>
							<th class="border-border border-b p-2 text-left"></th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">xs</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">sm</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">md</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">lg</Text>
							</th>
							<th class="border-border border-b p-2 text-left">
								<Text variant="label">xl</Text>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Circle + Initials</Text>
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="xs" shape="circle" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="sm" shape="circle" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="md" shape="circle" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="lg" shape="circle" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="xl" shape="circle" />
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Square + Initials</Text>
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="xs" shape="square" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="sm" shape="square" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="md" shape="square" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="lg" shape="square" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar name="Wilson Lessley" size="xl" shape="square" />
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Circle + Image</Text>
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="xs" shape="circle" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="sm" shape="circle" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="md" shape="circle" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="lg" shape="circle" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="xl" shape="circle" />
							</td>
						</tr>
						<tr>
							<td class="border-border border-b p-2">
								<Text variant="label">Square + Image</Text>
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="xs" shape="square" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="sm" shape="square" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="md" shape="square" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="lg" shape="square" />
							</td>
							<td class="border-border border-b p-2">
								<Avatar src="https://placecats.com/200/200" name="WL" size="xl" shape="square" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- Usage Guidelines -->
	<section class="mb-16">
		<Text as="h2" variant="heading" size="2xl" class="border-border mb-6 border-b pb-2">
			Usage Guidelines
		</Text>

		<div class="grid gap-6 md:grid-cols-2">
			<Card variant="content">
				{#snippet title()}
					<Text as="h3" variant="heading" size="lg">Accessibility</Text>
				{/snippet}
				<Text variant="body" color="subtext">
					All components include proper ARIA attributes, keyboard navigation, and focus management.
					Always provide meaningful labels for form inputs.
				</Text>
			</Card>

			<Card variant="content">
				{#snippet title()}
					<Text as="h3" variant="heading" size="lg">Theming</Text>
				{/snippet}
				<Text variant="body" color="subtext">
					Components automatically adapt to light and dark modes using CSS custom properties. Use
					the theme toggle in the navigation to preview both modes.
				</Text>
			</Card>

			<Card variant="content">
				{#snippet title()}
					<Text as="h3" variant="heading" size="lg">Importing</Text>
				{/snippet}
				<Text variant="body" color="subtext" class="font-mono text-sm">
					{"import { Button, Input, Text } from '$lib/design-system';"}
				</Text>
			</Card>

			<Card variant="content">
				{#snippet title()}
					<Text as="h3" variant="heading" size="lg">Consistency</Text>
				{/snippet}
				<Text variant="body" color="subtext">
					Use design system primitives instead of raw HTML elements to ensure visual and behavioral
					consistency across the application.
				</Text>
			</Card>
		</div>
	</section>
</main>
