import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SnomedConceptSearchForm } from '@/components/index/SearchForm/SnomedConceptSearchForm';
import { useForm as originalUseForm, type UseFormInput } from '@mantine/form';

const useForm = (
	args:
		| UseFormInput<Record<string, any>, (values: Record<string, any>) => Record<string, any>>
		| undefined,
) => {
	const form = originalUseForm(args);
	return {
		...form,
		setFieldValue: fn(form.setFieldValue),
		reset: fn(form.reset),
		onSubmit: fn(form.onSubmit),
		onReset: fn(form.onReset),
	};
};

const meta = {
	title: 'Index/SearchForm/SnomedConceptSearchForm',
	component: SnomedConceptSearchForm,
} satisfies Meta<typeof SnomedConceptSearchForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const form = useForm({
			initialValues: {
				term: 'test',
				limit: 10,
			},
		});

		return <SnomedConceptSearchForm form={form} onSubmit={fn()} onReset={fn()} />;
	},
};
