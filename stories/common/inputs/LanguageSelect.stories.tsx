import { LanguageSelect } from '@/components/common/inputs/LanguageSelect';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, getByTestId, userEvent } from '@storybook/test';

const meta = {
	title: 'Common/Inputs/LanguageSelect',
	component: LanguageSelect,
	play: async ({ canvasElement }) => {
		const languageSelect = getByTestId(canvasElement, 'language-select');
		await expect(languageSelect).toBeVisible();
		await userEvent.click(languageSelect);
		await expect(languageSelect).toHaveFocus();
	},
} satisfies Meta<typeof LanguageSelect>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
