import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './navigation';
import { IntlErrorCode } from 'next-intl';
import deepmerge from 'deepmerge';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
export const defaultMessages = (await import(`../messages/en.json`)).default;

export default getRequestConfig(async ({ locale }) => {
	const typedLocale = locale as (typeof locales)[number];
	if (!typedLocale || !locales.includes(typedLocale)) notFound();

	/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access,unicorn/no-await-expression-member,@typescript-eslint/no-unsafe-call */
	const userMessages = (await import(`../messages/${locale}.json`)).default;
	const messages = deepmerge(defaultMessages, userMessages);
	/* eslint-enable @typescript-eslint/no-unsafe-assignment */

	return {
		messages,
		getMessageFallback({ namespace, key, error }) {
			const path = [namespace, key].filter((part) => part != null).join('.');

			if (error.code === IntlErrorCode.MISSING_MESSAGE) {
				return `${path} is not yet translated`;
			}

			return `Dear developer, please fix this message: ${path}`;
		},
	};
});
