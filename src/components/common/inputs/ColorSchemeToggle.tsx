import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, type MantineColorScheme, Tooltip, useMantineColorScheme } from '@mantine/core';
import { type ReactNode, useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';

/**
 * Icons for the color scheme toggle. Auto means the system default.
 */
const icons: Readonly<Record<MantineColorScheme, ReactNode>> = {
	light: <IconSun />,
	dark: <IconMoon />,
	auto: <IconDeviceDesktop />,
};

/**
 * A toggle that allows the user to change the color scheme.
 */
export function ColorSchemeToggle() {
	const t = useTranslations('inputs.ColorSchemaToggle');
	const { setColorScheme } = useMantineColorScheme();

	// default is 'auto', so next must be either 'light' or 'dark'
	const [shownColorScheme, setShownColorScheme] = useState<MantineColorScheme>('light');

	const getShownColorScheme = useCallback(() => {
		switch (shownColorScheme) {
			case 'light': {
				return 'dark';
			}
			case 'dark': {
				return 'auto';
			}
			case 'auto': {
				return 'light';
			}
			default: {
				return 'auto';
			}
		}
	}, [shownColorScheme]);

	const handleToggle = useCallback(() => {
		setColorScheme(shownColorScheme);
		setShownColorScheme(getShownColorScheme());
	}, [shownColorScheme, setColorScheme, getShownColorScheme]);

	return (
		<Tooltip
			label={t('toggle-color-scheme', { schema: t('schema', { schema: shownColorScheme }) })}
			position="bottom"
			withArrow
		>
			<ActionIcon
				onClick={handleToggle}
				variant="default"
				size="xl"
				aria-label="color schema toggle"
				data-testid="color-schema-toggle"
			>
				{icons[shownColorScheme]}
			</ActionIcon>
		</Tooltip>
	);
}
