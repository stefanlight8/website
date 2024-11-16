import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess({scss: {
    prependData: `@import './src/styles/main.scss';`,
  },
}),
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
	},
};

export default config;