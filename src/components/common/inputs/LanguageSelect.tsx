import { Select, type SelectProps, Tooltip } from '@mantine/core';
import { useTranslations } from 'next-intl';
import React, { useCallback, useTransition } from 'react';
import { locales, usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation';
import { useQuery } from '@/hooks/useQuery';

/**
 * A select input that allows the user to select a language.
 */
export function LanguageSelect() {
	const t = useTranslations('inputs.LanguageSelect');

	const router = useRouter();
	const pathname = usePathname();
	const query = useQuery();
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
	const { locale: defaultLocale } = useParams() as { locale: string };
	const [_pendingTransition, startTransition] = useTransition();

	const handleChange: SelectProps['onChange'] = useCallback(
		(value?: string | null) => {
			if (!value) return;

			startTransition(() => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
				router.push(`${pathname}?${query.getAll(true)}`, { locale: value as 'en' | 'hu' });
			});
		},
		[pathname, query, router],
	);

	return (
		<Tooltip label={t('select-language')} position="bottom" withArrow>
			<Select
				aria-label={t('select-language')}
				data-testid="language-select"
				value={defaultLocale}
				onChange={handleChange}
				data={locales.map((locale) => ({
					value: locale,
					label: t(locale),
				}))}
			/>
		</Tooltip>
	);
}
