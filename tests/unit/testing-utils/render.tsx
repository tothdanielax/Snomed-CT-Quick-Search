import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender } from '@testing-library/react';
import { theme } from '@/theme';
import { NextIntlClientProvider } from 'next-intl';
import messages from '@messages/en.json';

/**
 * Renders the UI with the MantineProvider.
 * @param ui The UI to render.
 * @returns The rendered UI.
 * @see https://mantine.dev/guides/vitest/#custom-render
 */
export function render(ui: React.ReactNode) {
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return testingLibraryRender(<>{ui}</>, {
		wrapper: ({ children }: { children: React.ReactNode }) => (
			<MantineProvider theme={theme}>
				<NextIntlClientProvider messages={messages} locale="en">
					{children}
				</NextIntlClientProvider>
			</MantineProvider>
		),
	});
}
