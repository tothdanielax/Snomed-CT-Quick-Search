import { GetSnomedConceptsFilterSchema } from '@/api/concepts.schema';
import { describe, test, expect } from 'vitest';

describe('GetSnomedConceptsFilterSchema', () => {
	test('should validate a valid filter', () => {
		const validFilter = {
			term: 'example',
			limit: 10,
		};
		const result = GetSnomedConceptsFilterSchema.safeParse(validFilter);
		expect(result.success).toBe(true);
	});

	test('should not validate a filter with a term less than 2 characters', () => {
		const invalidFilter = {
			term: 'a',
			limit: 10,
		};
		const result = GetSnomedConceptsFilterSchema.safeParse(invalidFilter);
		expect(result.success).toBe(false);
	});

	test('should not validate a filter with a non-numeric limit', () => {
		const invalidFilter = {
			term: 'example',
			limit: 'ten',
		};
		const result = GetSnomedConceptsFilterSchema.safeParse(invalidFilter);
		expect(result.success).toBe(false);
	});
});
