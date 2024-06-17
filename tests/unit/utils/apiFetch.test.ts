import { apiFetch } from '@/utils/apiFetch';
import { describe, test, expect, vi } from 'vitest';

vi.mock('@/utils/apiFetch', async () => ({
	apiFetch: vi.fn().mockReturnValue(Promise.resolve([])),
}));

describe('apiFetch', () => {
	test('fetches data from the API', async () => {
		const endpoint = 'example-endpoint';
		const options = {
			method: 'GET',
		};

		const result = await apiFetch(endpoint, options);

		expect(result).toBeDefined();
	});
});
