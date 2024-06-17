import type { Meta, StoryObj } from '@storybook/react';
import { SliderInput } from '@/components/common/inputs/SliderInput';

const meta = {
	title: 'Common/Inputs/SliderInput',
	component: SliderInput,
} satisfies Meta<typeof SliderInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
	args: {
		sliderLabel: 'Slider Label',
	},
};
