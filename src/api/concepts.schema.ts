import type { SnomedConcept } from '@/models/SnomedConcept';
import { z } from 'zod';

export const GetSnomedConceptsFilterSchema = z.object({
	term: z
		.string({
			description: 'The term to search for',
		})
		.min(2, {
			message: 'The term must be at least 2 characters long',
		}),
	limit: z.number({
		description: 'The maximum number of results to return',
	}),
});

export type GetSnomedConceptsFilter = z.infer<typeof GetSnomedConceptsFilterSchema>;
export type GetSnomedConcepts = (filter: GetSnomedConceptsFilter) => Promise<SnomedConcept[]>;
