'use server';

import { apiFetch } from '@/utils/apiFetch';
import type { SnomedConcept } from '@/models/SnomedConcept';
import type { GetSnomedConcepts } from './concepts.schema';

export const getSnomedConcepts: GetSnomedConcepts = async ({ term, limit }) => {
	// example: https://api.snowray.app/snowowl/snomedct/SNOMEDCT/concepts?term=test&limit=10&expand=pt()

	try {
		const query = new URLSearchParams({
			term,
			limit: limit.toString(),
			expand: 'descriptions()',
		});

		return (await apiFetch<{ items: SnomedConcept[] }>(`/concepts?${query}`)).items;
	} catch {
		throw new Error('Failed to fetch SNOMED CT concepts');
	}
};
