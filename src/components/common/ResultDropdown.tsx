import { useTranslations } from 'next-intl';
import { Box, Divider, Text } from '@mantine/core';
import { type ReactNode } from 'react';

/**
 * Properties for {@link ResultDropdown}.
 */
export type ResultDropdownProps = Readonly<{
	/**
	 * The label to display above the dropdown.
	 */
	label?: string;

	/**
	 * The list that will be rendered in the dropdown.
	 */
	children?: ReactNode;
}>;

/**
 * Dropdown to display search results.
 */
export function ResultDropdown({ label, children }: ResultDropdownProps) {
	const t = useTranslations('ResultDropdown');

	return (
		<Box>
			<Text> {label ?? t('Results')} </Text>
			<Divider />
			{children}
		</Box>
	);
}
