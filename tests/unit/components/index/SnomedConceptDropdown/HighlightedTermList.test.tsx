import { fireEvent, render, screen } from '@tests/unit/testing-utils';
import { HighlightedTermList } from '@/components/index/SnomedConceptDropdown/HighlightedTermList';
import { describe, expect, it, vi } from 'vitest';
import { snomedGetResults } from './SnomedConceptDropdown.test';

describe('HighlightedTermList', () => {
	it('renders the list with correct items', () => {
		render(
			<HighlightedTermList results={snomedGetResults} onRowClick={vi.fn()} highlightTerm="" />,
		);

		const listItem = screen.queryByText('Term 1 of 1');
		expect(listItem).not.toBeNull();
		expect(listItem).toBeInTheDocument();
	});

	it('calls onRowClick when a row is clicked', () => {
		const onRowClick = vi.fn();

		render(
			<HighlightedTermList results={snomedGetResults} onRowClick={onRowClick} highlightTerm="" />,
		);

		const term1 = screen.getByText('Term 1 of 1');
		fireEvent.click(term1);

		expect(onRowClick).toHaveBeenCalledTimes(1);
		expect(onRowClick).toHaveBeenCalledWith(snomedGetResults[0], 'Term 1 of 1');
	});
});
