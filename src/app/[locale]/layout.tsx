import '@/styles/tailwind.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import React, { type ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { ClientLayout } from '@/components/layout/ClientLayout';
import type { Metadata } from 'next';

/**
 * Props for the {@link AppLayout} component.
 */
type AppLayoutProps = {
	children: ReactNode;
	params: { locale: string };
};

/**
 * Global metadata settings for the app.
 */
export const metadata: Metadata = {
	title: {
		template: '%s - Snomed CT',
		default: 'Concepts - Snomed CT',
	},
};

/**
 * The root layout for the app.
 */
export default async function AppLayout({ children, params }: AppLayoutProps) {
	const messages = await getMessages();
	const { locale } = params;

	return (
		<html lang={locale}>
			<head>
				<ColorSchemeScript defaultColorScheme="auto" />
			</head>
			<body>
				<NextIntlClientProvider messages={messages} locale={locale}>
					<ClientLayout>{children}</ClientLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
