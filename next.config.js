// @ts-check
import createJiti from 'jiti';
import { fileURLToPath } from 'node:url';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti('./src/env.ts');

/**
 * Configuration for Next.js.
 * @type {import('next').NextConfig}
 */
const config = {
	/**
	 * The `reactStrictMode` flag helps identify issues in React. It mounts the components twice in development mode.
	 */
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
	},
};

export default withNextIntl(config);
