import type { Meta, StoryObj } from '@storybook/react';
import { SnomedConceptDropdown } from '@/components/index/SnomedConceptDropdown/SnomedConceptDropdown';
import { GetSnomedConceptResultsMock } from '@tests/data';

const meta = {
	title: 'Index/SnomedConceptDropdown/SnomedConceptDropdown',
	component: SnomedConceptDropdown,
	args: {
		highlightTerm: 'Res',
		results: GetSnomedConceptResultsMock,
	},
} satisfies Meta<typeof SnomedConceptDropdown>;

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
