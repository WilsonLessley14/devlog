/**
 * Returns a list of Svelte component names in the /games directory (without extension).
 * @returns {Promise<string[]>} List of game names.
 * @throws {Error} If the directory does not exist or cannot be read.
 */
export async function listGameComponents(): Promise<string[]> {
	// Vite import.meta.glob for client-side; fallback for SSR/test
	try {
		const modules = import.meta.glob('./*.svelte');
		return Object.keys(modules).map((path) => path.replace(/^\.\/(.*)\.svelte$/, '$1'));
	} catch {
		throw new Error('Games directory not found or cannot be read.');
	}
}
