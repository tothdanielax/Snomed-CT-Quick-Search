import type { Meta, StoryObj } from '@storybook/react';
import { SnomedConceptSearch } from '@/components/index/SearchForm/SnomedConceptSearch';
import { fn } from '@storybook/test';

const meta = {
	title: 'Index/SearchForm/SnomedConceptSearch',
	component: SnomedConceptSearch,
	args: {
		onChange: fn(),
	},
} satisfies Meta<typeof SnomedConceptSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
	args: {
		value: 'value',
	},
};
