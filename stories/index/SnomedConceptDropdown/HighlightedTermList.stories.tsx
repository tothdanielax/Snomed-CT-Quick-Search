import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HighlightedTermList } from '@/components/index/SnomedConceptDropdown/HighlightedTermList';
import { GetSnomedConceptResultsMock } from '@tests/data';

const meta = {
	title: 'Index/SnomedConceptDropdown/HighlightedTermList',
	component: HighlightedTermList,
	args: {
		highlightTerm: 'res',
		onRowClick: fn(),
		results: GetSnomedConceptResultsMock,
	},
} satisfies Meta<typeof HighlightedTermList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const EmptyResults: Story = {
	args: {
		results: [],
	},
};
export const WithoutHighlight: Story = {
	args: {
		highlightTerm: '',
	},
};
