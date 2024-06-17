import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * Helper function to validate a string and transform it to a boolean.
 * {@link https://env.t3.gg/docs/recipes#booleans}
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onlyBoolean = z
	.string()
	// only allow "true" or "false"
	.refine((s) => s === 'true' || s === 'false')
	// transform to boolean
	.transform((s) => s === 'true');

/**
 * This file is used to validate and expose environment variables to the app. It uses the `zod` validation library.
 * {@link https://env.t3.gg/docs/nextjs}
 */
export const env = createEnv({
	/**
	 * Specify your client-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid environment vars. To expose them to the client, prefix them with
	 * `NEXT_PUBLIC_`.
	 */
	client: {},

	/**
	 * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
	 * `SOME_VAR=''` will throw an error.
	 */
	emptyStringAsUndefined: true,

	// Tell the library when we're in a server context.
	isServer: typeof window === 'undefined',

	/**
	 * You can't destruct `process.environment` as a regular object in the Next.js edge runtimes (e.g.
	 * middlewares) or client-side so we need to destruct manually.
	 */
	runtimeEnv: {
		SNOWRAY_API_KEY: process.env.SNOWRAY_API_KEY,
	},

	/**
	 * Specify your server-side environment variables schema here. This way you can ensure the app
	 * isn't built with invalid environment vars.
	 */
	server: {
		SNOWRAY_API_KEY: z
			.string({
				description: 'API key for the Snowray API',
			})
			.readonly(),
	},

	/**
	 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip environment validation. This is especially
	 * useful for Docker builds.
	 */
	skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
