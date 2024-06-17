import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/en/notfound');
});

test('not existing', async ({ page }) => {
	await expect(page.getByText('404')).toBeVisible();
	await expect(page.getByText('This page could not be found.')).toBeVisible();
});
