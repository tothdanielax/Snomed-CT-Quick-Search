import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	test: {
		coverage: {
			exclude: ['src/styles', 'src/types', 'src/pages'],
			extesions: ['.ts', '.tsx'],
			ignoreEmptyLines: true,
			include: ['src/**'],
			reporters: ['default', 'json', 'json-summary', 'html'],
		},
		environment: 'jsdom',
		exclude: ['tests/unit/testing-utils'],
		globals: true,
		include: ['tests/unit/**'],
		setupFiles: './tests/unit/testing-utils/vitest.setup.ts',
	},
});
