/**
 * Dynamically loads a Svelte game component by name from /common/games.
 * @param {string} gameName - The name of the Svelte component (without extension).
 * @returns {Promise<typeof import('svelte').SvelteComponent>} The loaded Svelte component.
 * @throws {Error} If the component does not exist or fails to load.
 */
export async function loadGameComponent(
	gameName: string
): Promise<typeof import('svelte').SvelteComponent> {
	const modules = import.meta.glob('./*.svelte');
	const match = Object.entries(modules).find(([path]) => path.endsWith(`/${gameName}.svelte`));
	if (!match) {
		throw new Error(`Game not found: ${gameName}`);
	}
	const module = await match[1]();
	return module.default;
}
