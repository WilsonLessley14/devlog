import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	// devenv puts symlinks into the project root (.devenv/profile → /nix/store/...) that
	// reference the whole Nix closure. Vite's watcher follows symlinks and ignores
	// .gitignore, so without this it recursively stats the Nix store and OOMs. Exclude them.
	server: { watch: { ignored: ['**/.devenv/**', '**/.direnv/**'] } },
	// The design system ships .svelte source + directory re-exports, so it must be
	// processed by Vite (not externalized) during SSR.
	ssr: { noExternal: ['@wl/frontend-system'] },
	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],
				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
