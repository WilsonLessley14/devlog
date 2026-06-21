<script lang="ts">
	import { Button, Card, Input, Text, Stack, Cluster, Grid } from '@wl/frontend-system';
</script>

<Stack gap="8">
	<Stack gap="2">
		<Text as="h1" variant="heading" size="4xl">Design System</Text>
		<Text variant="body" tone="muted">
			This site runs on <code>@wl/frontend-system</code>. Use the <strong>Mode</strong> (soft/hard)
			and <strong>theme</strong> (light/dark) toggles in the nav — every component re-skins from design
			tokens, no per-component code.
		</Text>
	</Stack>

	<section>
		<Stack gap="3">
			<Text as="h2" variant="heading" size="2xl">Typography</Text>
			<Card.Root>
				<Card.Content>
					<Stack gap="2">
						<Text variant="heading" size="3xl">Heading</Text>
						<Text variant="body">Body text in the active mode's font and color.</Text>
						<Text variant="caption" tone="muted">Caption / muted secondary text.</Text>
						<Text variant="body" tone="accent">Accent-toned text.</Text>
						<Text variant="body" tone="danger">Danger-toned text.</Text>
					</Stack>
				</Card.Content>
			</Card.Root>
		</Stack>
	</section>

	<section>
		<Stack gap="3">
			<Text as="h2" variant="heading" size="2xl">Buttons</Text>
			<Card.Root>
				<Card.Content>
					<Cluster gap="3">
						<Button>Default</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="destructive">Destructive</Button>
						<Button variant="link">Link</Button>
					</Cluster>
				</Card.Content>
			</Card.Root>
		</Stack>
	</section>

	<section>
		<Stack gap="3">
			<Text as="h2" variant="heading" size="2xl">Forms & Cards</Text>
			<Grid min="18rem" gap="4">
				<Card.Root>
					<Card.Header>
						<Card.Title>Subscribe</Card.Title>
						<Card.Description>Cards carry the active radius & shadow.</Card.Description>
					</Card.Header>
					<Card.Content>
						<Stack gap="3">
							<Input type="email" placeholder="you@example.com" />
							<Cluster gap="2">
								<Button size="sm">Save</Button>
								<Button size="sm" variant="outline">Cancel</Button>
							</Cluster>
						</Stack>
					</Card.Content>
				</Card.Root>
				<Card.Root>
					<Card.Header>
						<Card.Title>Another card</Card.Title>
						<Card.Description>Toggle hard mode for sharp corners + offset shadow.</Card.Description>
					</Card.Header>
					<Card.Content>
						<Text variant="body" tone="muted">Same structure, different character.</Text>
					</Card.Content>
				</Card.Root>
			</Grid>
		</Stack>
	</section>
</Stack>
