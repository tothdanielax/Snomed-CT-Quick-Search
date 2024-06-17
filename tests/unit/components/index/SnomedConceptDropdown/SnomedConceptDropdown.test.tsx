import { render, screen } from '@tests/unit/testing-utils';
import { SnomedConceptDropdown } from '@/components/index/SnomedConceptDropdown/SnomedConceptDropdown';
import { describe, expect, test } from 'vitest';
import type { SnomedConcept } from '@/models/SnomedConcept';

export const snomedGetResults: SnomedConcept[] = [
	{
		id: '1',
		descriptions: {
			items: [
				{ id: '2', term: 'Term 1 of 1' },
				{ id: '3', term: 'Term 2 of 1' },
			],
		},
		released: false,
		active: false,
		effectiveTime: '',
		moduleId: '',
		iconId: '',
		score: 0,
		memberOf: [],
		activeMemberOf: [],
		definitionStatus: {},
		subclassDefinnitionStatus: {},
		ancestorIds: [],
		parentIds: [],
		statedParentIds: [],
		statedAncestorIds: [],
		definitionStatusId: '',
	},
	{
		id: '4',
		descriptions: {
			items: [
				{ id: '5', term: 'Term 1 of 2' },
				{ id: '6', term: 'Term 2 of 2' },
			],
		},
		released: false,
		active: false,
		effectiveTime: '',
		moduleId: '',
		iconId: '',
		score: 0,
		memberOf: [],
		activeMemberOf: [],
		definitionStatus: {},
		subclassDefinnitionStatus: {},
		ancestorIds: [],
		parentIds: [],
		statedParentIds: [],
		statedAncestorIds: [],
		definitionStatusId: '',
	},
];

describe('SnomedConceptDropdown', () => {
	test('renders the dropdown with correct items', () => {
		render(<SnomedConceptDropdown results={snomedGetResults} highlightTerm="" />);
		const term1 = screen.getByText('Term 1 of 1');
		const term2 = screen.getByText('Term 2 of 1');
		const term3 = screen.getByText('Term 1 of 2');
		const term4 = screen.getByText('Term 2 of 2');

		expect(term1).toBeDefined();
		expect(term2).toBeDefined();
		expect(term3).toBeDefined();
		expect(term4).toBeDefined();

		expect(term1).toBeInTheDocument();
		expect(term2).toBeInTheDocument();
		expect(term3).toBeInTheDocument();
		expect(term4).toBeInTheDocument();
	});

	test('displays "noResults" message when results are empty', () => {
		render(<SnomedConceptDropdown results={[]} highlightTerm="" />);
		const noResultsMessage = screen.getByText('No results');
		expect(noResultsMessage).toBeDefined();
		expect(noResultsMessage).toBeInTheDocument();
	});
});
