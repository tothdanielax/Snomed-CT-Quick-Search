import { Box } from '@mantine/core';
import { useTranslations } from 'next-intl';
import type { ModelTranslations } from 'global';
import type { ReactNode } from 'react';

/**
 * Props for {@link SelectedRender}.
 */
type SelectedRenderProps = Readonly<{
	/**
	 * The name of the rendered model. Used for translations only.
	 */
	modelName: ModelTranslations;

	/**
	 * The children of the component.
	 */
	children?: ReactNode;
}>;

/**
 * A strongly typed component that renders the selected value in ID | Name format.
 */
export function SelectedRender({ children, modelName }: SelectedRenderProps) {
	const t = useTranslations('SelectedRender');
	const tModel = useTranslations(`models.${modelName}`);

	return <Box>{children ?? t('selectMatchingTerm', { modelName: tModel('shortName') })}</Box>;
}
