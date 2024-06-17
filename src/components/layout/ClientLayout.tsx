'use client';

import React, { type ReactNode } from 'react';
import { AppShell, Flex, MantineProvider, Text } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import { LanguageSelect } from '@/components/common/inputs/LanguageSelect';
import { ColorSchemeToggle } from '@/components/common/inputs/ColorSchemeToggle';
import { SelectedRender } from '@/components/common/SelectedRender';
import { useStore } from '@/store/store';
import { theme } from '@/theme';
import { useTranslations } from 'next-intl';
import { useConceptStore } from '@/store/slices/conceptStore';

/**
 * Props for {@link ClientLayout}
 */
type ClientLayoutProps = Readonly<{
	/**
	 * The page content.
	 */
	children: ReactNode;
}>;

/**
 * The layout for the client side of the app.
 */
export function ClientLayout({ children }: ClientLayoutProps) {
	const store = useStore(useConceptStore, (state) => state);
	const t = useTranslations('SelectedRender');

	return (
		<AnimatePresence mode="wait" initial={false}>
			<MantineProvider defaultColorScheme="auto" theme={theme}>
				<AppShell>
					<Flex
						className="w-screen"
						justify="space-between"
						align="center"
						gap={{ base: 15, sm: 5 }}
						py={5}
						px={30}
						mb={{ base: 20, xs: 0 }}
						direction={{ base: 'column', sm: 'row' }}
					>
						<Flex className="h-full w-fit" justify="center" align="center" gap={5}>
							<LanguageSelect />
							<ColorSchemeToggle />
						</Flex>
						<SelectedRender modelName="SnomedConcept">
							<Text fw={400}>
								{store?.selectedConcept
									? `ID ${store?.selectedConcept?.id} | ${store?.matchedTerm}`
									: t('selectMatchingTerm')}
							</Text>
						</SelectedRender>
					</Flex>
					<AppShell.Main>{children}</AppShell.Main>
				</AppShell>
			</MantineProvider>
		</AnimatePresence>
	);
}
