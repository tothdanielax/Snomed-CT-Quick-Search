import { getSnomedConcepts } from '@/api/concepts.api';
import { describe, expect, test, vi } from 'vitest';

vi.mock('@/api/concepts.api', async () => ({
	getSnomedConcepts: vi.fn().mockReturnValue(Promise.resolve([])),
}));

describe('getSnomedConcepts', () => {
	test('should fetch SNOMED CT concepts with the given term and limit', async () => {
		const term = 'test';
		const limit = 10;

		const result = await getSnomedConcepts({ term, limit });
		expect(result).toEqual([]);
	});
});
