/**
 * TS representation of a SNOMED CT concept description. Part of {@link SnomedConcept}.
 */
export type SnomedConceptDescription = {
	id: string;
	term: string;
	[other: string]: unknown;
};

/**
 * TS representation of a SNOMED CT concept.
 */
export type SnomedConcept = {
	id: string;
	released: boolean;
	active: boolean;
	effectiveTime: string;
	moduleId: string;
	iconId: string;
	score: number;
	memberOf: unknown[];
	activeMemberOf: unknown[];
	definitionStatus: object;
	subclassDefinnitionStatus: object;
	ancestorIds: unknown[];
	parentIds: unknown[];
	statedParentIds: unknown[];
	statedAncestorIds: unknown[];
	definitionStatusId: string;
	descriptions: { items: SnomedConceptDescription[] };
	[other: string]: unknown;
};
