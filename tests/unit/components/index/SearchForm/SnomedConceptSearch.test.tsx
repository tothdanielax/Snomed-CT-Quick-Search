import { render, screen } from '@tests/unit/testing-utils';
import { SnomedConceptSearch } from '@/components/index/SearchForm/SnomedConceptSearch';
import { describe, expect, it } from 'vitest';

describe('SnomedConceptSearch', () => {
	it('renders the search input', () => {
		render(<SnomedConceptSearch />);

		const searchInput = screen.getByText(/search/i);
		expect(searchInput).toBeInTheDocument();
	});
});
