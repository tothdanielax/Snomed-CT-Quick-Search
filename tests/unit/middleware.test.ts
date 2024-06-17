import config from 'next/config';
import { expect, test, describe } from 'vitest';

describe('config', () => {
	test('exported', () => {
		expect(config).toBeDefined();
	});
});
