import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('/');
	await page.evaluate(() => {
		const selectedConcept = { term: 'test', id: '123' };
		localStorage.setItem('selectedConcept', JSON.stringify(selectedConcept));
	});
});

test('index', async ({ page }) => {
	const searchInput = page.getByTestId('search-input');
	const searchButton = page.getByTestId('search-button');
	const clearButton = page.getByTestId('clear-button');
	const results = page.getByText('Results', { exact: true });
	const slider = page.getByRole('slider');
	const languageSelect = page.getByTestId('language-select');
	const colorSchemaToggle = page.getByTestId('color-schema-toggle');
	const matchingTerm = page.getByText('Select a matching term..');
	const firstLiElement = page.locator('li').first();
	// @ts-ignore
	const firstMarkElement = firstLiElement.getByRole('mark').first();

	await test.step('initial state', async () => {
		expect(searchInput).toBeDefined();
		expect(searchButton).toBeDefined();
		expect(clearButton).toBeDefined();
		expect(results).toBeDefined();
		expect(slider).toBeDefined();
		expect(matchingTerm).toBeDefined();
		expect(languageSelect).toBeDefined();
		expect(colorSchemaToggle).toBeDefined();
		expect(firstLiElement).toBeDefined();
		expect(firstMarkElement).toBeDefined();

		await expect(searchInput).toBeVisible();
		await expect(searchButton).toBeVisible();
		await expect(clearButton).toBeVisible();
		await expect(results).not.toBeVisible();
		await expect(slider).toBeVisible();
		await expect(matchingTerm).toBeVisible();
		await expect(languageSelect).toBeVisible();
		await expect(colorSchemaToggle).toBeVisible();
		await expect(firstLiElement).not.toBeVisible();
		await expect(firstMarkElement).not.toBeVisible();

		await expect(searchButton).toBeEnabled();
		await expect(clearButton).toBeEnabled();
	});

	await test.step('search with invalid term', async () => {
		await searchInput.fill('t');
		await searchButton.click();
		await expect(page.getByText('The term must be at least 2')).toBeVisible();
		await expect(results).not.toBeVisible();
		await expect(firstLiElement).not.toBeVisible();
		await expect(firstMarkElement).not.toBeVisible();
	});

	await test.step('search with valid term', async () => {
		await searchInput.fill('ta');
		await searchButton.click();
		await expect(results).toBeVisible();
		await expect(page.getByText('The term must be at least 2')).not.toBeVisible();
		await expect(firstLiElement).toBeVisible();
		await expect(firstMarkElement).toBeVisible();
	});

	await test.step('click on mark', async () => {
		await expect(page.getByText(/ID \d+ \| .+/)).not.toBeVisible();
		await expect(firstMarkElement).toHaveAttribute('data-highlight', /ta/i);
		await expect(firstMarkElement).toHaveCSS('cursor', 'pointer');
		await expect(firstMarkElement).toHaveCSS('font-weight', '700');
		await firstMarkElement.click();
		await expect(page.getByText(/ID \d+ \| .+/)).toBeVisible();
	});

	await test.step('clear on search does not clear the results', async () => {
		await clearButton.click();
		await expect(firstLiElement).toBeVisible();
	});
});
