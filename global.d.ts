/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

/* eslint-disable @typescript-eslint/no-empty-interface,@typescript-eslint/consistent-type-definitions */
import en from '@messages/en.json';

export type Messages = typeof en;
export type ModelTranslations = keyof Messages['models'];

declare global {
	// Use type safe message keys with `next-intl`
	interface IntlMessages extends Messages {}
}
