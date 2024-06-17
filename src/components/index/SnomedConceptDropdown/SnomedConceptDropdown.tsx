import { ResultDropdown } from '../../common/ResultDropdown';
import type { SnomedConcept } from '@/models/SnomedConcept';
import { useStore } from '@/store/store';
import {
	HighlightedTermList,
	type HighlightedTermListProps,
} from '@/components/index/SnomedConceptDropdown/HighlightedTermList';
import { useCallback, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Flex, Pagination } from '@mantine/core';
import { useConceptStore } from '@/store/slices/conceptStore';

const MAX_RESULTS_PER_PAGE = 5;

/**
 * Props for the {@link SnomedConceptDropdown} component.
 */
type SnomedConceptDropdownType = Omit<HighlightedTermListProps, 'onRowClick'>;

/**
 * A dropdown for SNOMED CT concepts. It displays a list of concepts and highlights the search term.
 */
export function SnomedConceptDropdown({ results, highlightTerm }: SnomedConceptDropdownType) {
	const conceptSlice = useStore(useConceptStore, (state) => state);
	const t = useTranslations('ResultDropdown');

	const [page, setPage] = useState(1);
	const paginatedData = results.slice(
		(page - 1) * MAX_RESULTS_PER_PAGE,
		page * MAX_RESULTS_PER_PAGE,
	);

	/**
	 * Handles a row click on the highlighted term list. The term means the full description.term, not the highlightTerm.
	 * @param row The obj of the row that was clicked.
	 * @param term The matched term.
	 */
	const handleRowClick: HighlightedTermListProps['onRowClick'] = useCallback(
		(row: SnomedConcept, term: string) => {
			conceptSlice?.setSelectedConceptWithMatchedTerm(row, term);
		},
		[conceptSlice],
	);

	return (
		<Flex justify="center" align="center" direction="column">
			<ResultDropdown>
				{results?.length === 0 ? (
					<p>{t('noResults')}</p>
				) : (
					<HighlightedTermList
						onRowClick={handleRowClick}
						highlightTerm={highlightTerm}
						results={paginatedData}
					/>
				)}
			</ResultDropdown>
			<Pagination
				total={results.length / MAX_RESULTS_PER_PAGE}
				value={page}
				onChange={setPage}
				mt="sm"
			/>
		</Flex>
	);
}
