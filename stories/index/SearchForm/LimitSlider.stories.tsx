import type { Meta, StoryObj } from '@storybook/react';
import { LimitSlider } from '@/components/index/SearchForm/LimitSlider';
import { fn } from '@storybook/test';

const meta = {
	title: 'Index/SearchForm/LimitSlider',
	component: LimitSlider,
} satisfies Meta<typeof LimitSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LimitSliderStory: Story = {
	name: 'Default',
	args: {
		value: 10,
		onChange: fn(),
	},
};
