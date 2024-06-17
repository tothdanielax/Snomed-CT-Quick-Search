import { useTranslations } from 'next-intl';
import { Flex, TextInput, type TextInputProps, Tooltip, UnstyledButton } from '@mantine/core';
import { IconSearch, IconX } from '@tabler/icons-react';
import type { ModelTranslations } from '../../../../global';

/**
 * Properties for {@link SearchInput}.
 */
export type SearchInputProps = Readonly<
	TextInputProps & {
		/**
		 * The model that the search is used for.
		 */
		model: ModelTranslations;

		/**
		 * With reset button
		 */
		allowReset?: boolean;
	}
>;

/**
 * Search input component that supports for e.g. finding relevant concepts based on the entered search term.
 */
export function SearchInput({ model, allowReset, ...props }: SearchInputProps) {
	const t = useTranslations('inputs.LazySearchInput');
	const tModel = useTranslations(`models.${model}`);

	return (
		<TextInput
			data-testid="search-input"
			label={t('label', { modelName: tModel('longName') })}
			placeholder={t('placeholder', { modelName: tModel('longName') })}
			rightSection={
				<Flex className="h-full w-full items-center justify-center bg-transparent p-2">
					<Tooltip label={t('search')} position="bottom" withArrow>
						<UnstyledButton className="cursor-pointer" type="submit" data-testid="search-button">
							<IconSearch />
						</UnstyledButton>
					</Tooltip>

					{allowReset && (
						<Tooltip label={t('clear')} position="bottom" withArrow>
							<UnstyledButton className="cursor-pointer" type="reset" data-testid="clear-button">
								<IconX color="red" />
							</UnstyledButton>
						</Tooltip>
					)}
				</Flex>
			}
			rightSectionWidth={50}
			rightSectionPointerEvents="auto"
			w={{ xs: '100%', sm: 400 }}
			{...props}
		/>
	);
}
