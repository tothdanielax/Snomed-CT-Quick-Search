import { theme } from '@/theme';
import { describe, expect, expectTypeOf, test } from 'vitest';

describe('theme', () => {
	test('exports theme', async () => {
		expect(theme).toBeDefined();
		expectTypeOf(theme).toBeObject();
	});
});
