import '../src/styles/tailwind.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import type { Preview } from '@storybook/react';
import { addons } from '@storybook/preview-api';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import React, { useEffect } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { ClientLayout } from '../src/components/layout/ClientLayout';
import { theme } from '../src/theme';
import { IntlProvider, NextIntlClientProvider } from 'next-intl';
import en from '../messages/en.json';
import { themes } from '@storybook/theming';

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
	const { setColorScheme } = useMantineColorScheme();
	const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark' : 'light');

	useEffect(() => {
		channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
		return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
	}, [channel]);

	return <>{children}</>;
}

const preview: Preview = {
	parameters: {
		layout: 'centered',
		nextjs: {
			appDirectory: true,
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			theme: themes.dark,
		},
	},

	tags: ['autodocs'],
	decorators: [
		(Story) => (
			<NextIntlClientProvider locale="en" messages={en}>
				<Story />
			</NextIntlClientProvider>
		),
		(Story) => (
			<ColorSchemeWrapper>
				<Story />
			</ColorSchemeWrapper>
		),
		(Story) => (
			<MantineProvider theme={theme}>
				<Story />
			</MantineProvider>
		),
	],
};

export default preview;
