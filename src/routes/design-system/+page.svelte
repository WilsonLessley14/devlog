<script lang="ts">
	import { Button, Card, Input, Text } from '$lib/design-system';

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
				{'<Button variant="primary">Primary</Button>'}
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
			<Card variant="code" class="mt-4">
				{'<Button size="sm">Small</Button>'}
			</Card>
		</div>

		<!-- States -->
		<div class="mb-8">
			<Text as="h3" variant="heading" size="lg" class="mb-4">States</Text>
			<div class="flex flex-wrap items-center gap-4">
				<Button variant="primary">Normal</Button>
				<Button variant="primary" disabled>Disabled</Button>
				<Button variant="primary" loading>Loading</Button>
			</div>
			<Card variant="code" class="mt-4">
				{'<Button disabled>Disabled</Button>'}
			</Card>
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
			<Card variant="code" class="mt-4">
				{'<Text size="2xl">Section Heading</Text>'}
			</Card>
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
				{'<Text as="h1" size="4xl">Page Title</Text>'}
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
				{'<Input type="email" label="Email" placeholder="email@example.com" />'}
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
			<Card variant="code" class="mt-4">
				{'<Input error errorMessage="Invalid input" />'}
			</Card>
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
				<Card variant="code">
					{'<Button variant="primary">Click me</Button>'}
				</Card>

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
				{'<div class="grid gap-4 md:grid-cols-2"><Card>...</Card><Card>...</Card></div>'}
			</Card>
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
