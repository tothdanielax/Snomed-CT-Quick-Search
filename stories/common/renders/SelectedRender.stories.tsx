import type { Meta, StoryObj } from '@storybook/react';
import { SelectedRender } from '@/components/common/SelectedRender';

const meta = {
	title: 'Common/Render/SelectedRender',
	component: SelectedRender,
	args: {
		modelName: 'SnomedConcept',
		children: 'Select something...',
	},
} satisfies Meta<typeof SelectedRender>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
