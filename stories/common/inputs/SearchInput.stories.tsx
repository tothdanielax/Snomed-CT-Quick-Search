import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SearchInput } from '@/components/common/inputs/SearchInput';

const meta: Meta<typeof SearchInput> = {
	title: 'Common/Inputs/SearchInput',
	component: SearchInput,
	args: {
		model: 'SnomedConcept',
		onChange: fn(),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};

export const WithClear: Story = {
	render: () => {
		const [value, setValue] = useState<string>('');

		return (
			<SearchInput
				value={value}
				onChange={(e) => setValue(e.target.value)}
				model="SnomedConcept"
				allowReset
				onReset={() => setValue('')}
				defaultValue={value}
			/>
		);
	},
};
