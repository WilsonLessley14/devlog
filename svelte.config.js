import sveltePreprocess from 'svelte-preprocess';

/** @type {import('vite').UserConfig} */
const config = {
  preprocess: sveltePreprocess(),
};

export default config;
