import { fireEvent, render, screen } from '@tests/unit/testing-utils';
import { SnomedConceptSearchForm } from '@/components/index/SearchForm/SnomedConceptSearchForm';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useForm } from '@mantine/form';

const onSubmit = vi.fn();
const onReset = vi.fn();

vi.mock('@mantine/form', () => ({
	useForm: () => ({
		values: {},
		errors: {},
		touched: {},
		handleChange: vi.fn(),
		handleBlur: vi.fn(),
		handleSubmit: vi.fn(),
		handleReset: vi.fn(),
		key: vi.fn(),
		getInputProps: vi.fn(),
		onSubmit,
		onReset,
	}),
}));

describe('SnomedConceptSearchForm', () => {
	beforeEach(() => {
		const form = useForm({
			initialValues: {
				term: '',
				limit: 10,
			},
		});

		render(<SnomedConceptSearchForm onSubmit={onSubmit} form={form} onReset={onReset} />);
	});

	it('renders the form with the correct inputs', () => {
		expect(screen.getByLabelText(/Search/)).toBeInTheDocument();
		expect(screen.getByText(/Max/)).toBeInTheDocument();
	});

	it('calls the onSubmit function when the form is submitted', () => {
		fireEvent.submit(screen.getByTestId('search-button'));
		expect(onSubmit).toHaveBeenCalled();
	});

	it('calls the onReset function when the form is reset', () => {
		fireEvent.reset(screen.getByTestId('clear-button'));
		expect(onReset).toHaveBeenCalled();
	});
});
