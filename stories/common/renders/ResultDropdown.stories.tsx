import type { Meta, StoryObj } from '@storybook/react';
import { SnomedConceptDropdown } from '@/components/index/SnomedConceptDropdown/SnomedConceptDropdown';
import { GetSnomedConceptResultsMock } from '@tests/data';

const meta = {
	title: 'Common/Render/ResultDropdown',
	component: SnomedConceptDropdown,
	args: {},
} satisfies Meta<typeof SnomedConceptDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		results: GetSnomedConceptResultsMock,
		highlightTerm: 'Res',
	},
};

export const Empty: Story = {
	args: {
		results: [],
		highlightTerm: '',
	},
};

export const WithEmptyHighlight: Story = {
	args: {
		results: GetSnomedConceptResultsMock,
		highlightTerm: '',
	},
};
