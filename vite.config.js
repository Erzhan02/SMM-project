import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), Inspect()],

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@helpers': path.resolve(__dirname, 'src/app/styles/helpers'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@app': path.resolve(__dirname, 'src/app'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@i': path.resolve(__dirname, 'icons'),
		},
	},
});
