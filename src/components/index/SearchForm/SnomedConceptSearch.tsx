import { SearchInput, type SearchInputProps } from '../../common/inputs/SearchInput';

/**
 * Props for the {@link SnomedConceptSearch} component.
 */
export type SnomedConceptSearchProps = Omit<SearchInputProps, 'model'>;

/**
 * A search input for SNOMED CT concepts.
 */
export function SnomedConceptSearch({ ...props }: SnomedConceptSearchProps) {
	return <SearchInput model="SnomedConcept" allowReset {...props} />;
}
