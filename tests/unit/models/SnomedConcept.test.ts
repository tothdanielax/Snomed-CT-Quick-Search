import { describe, it, expect } from 'vitest';
import type { SnomedConcept, SnomedConceptDescription } from '@/models/SnomedConcept';

// Helper function to create a valid SnomedConceptDescription
const createSnomedConceptDescription = (): SnomedConceptDescription => ({
	id: '12345',
	term: 'Example Term',
});

// Helper function to create a valid SnomedConcept
const createSnomedConcept = (): SnomedConcept => ({
	id: '67890',
	released: true,
	active: true,
	effectiveTime: '20230101',
	moduleId: 'module123',
	iconId: 'icon456',
	score: 95.5,
	memberOf: [],
	activeMemberOf: [],
	definitionStatus: {},
	subclassDefinnitionStatus: {},
	ancestorIds: [],
	parentIds: [],
	statedParentIds: [],
	statedAncestorIds: [],
	definitionStatusId: 'defStatus789',
	descriptions: { items: [createSnomedConceptDescription()] },
});

describe('SnomedConceptDescription', () => {
	it('should create a valid SnomedConceptDescription object', () => {
		const description = createSnomedConceptDescription();
		expect(description).toBeDefined();
		expect(description.id).toBe('12345');
		expect(description.term).toBe('Example Term');
	});

	it('should allow additional properties', () => {
		const description = { ...createSnomedConceptDescription(), additionalProp: 'value' };
		expect(description.additionalProp).toBe('value');
	});
});

describe('SnomedConcept', () => {
	it('should create a valid SnomedConcept object', () => {
		const concept = createSnomedConcept();
		expect(concept).toBeDefined();
		expect(concept.id).toBe('67890');
		expect(concept.released).toBe(true);
		expect(concept.active).toBe(true);
		expect(concept.effectiveTime).toBe('20230101');
		expect(concept.moduleId).toBe('module123');
		expect(concept.iconId).toBe('icon456');
		expect(concept.score).toBe(95.5);
		expect(concept.memberOf).toEqual([]);
		expect(concept.activeMemberOf).toEqual([]);
		expect(concept.definitionStatus).toEqual({});
		expect(concept.subclassDefinnitionStatus).toEqual({});
		expect(concept.ancestorIds).toEqual([]);
		expect(concept.parentIds).toEqual([]);
		expect(concept.statedParentIds).toEqual([]);
		expect(concept.statedAncestorIds).toEqual([]);
		expect(concept.definitionStatusId).toBe('defStatus789');
		expect(concept.descriptions.items.length).toBe(1);
		expect(concept.descriptions.items[0]?.id).toBe('12345');
	});

	it('should allow additional properties', () => {
		const concept = { ...createSnomedConcept(), additionalProp: 'value' };
		expect(concept.additionalProp).toBe('value');
	});
});
