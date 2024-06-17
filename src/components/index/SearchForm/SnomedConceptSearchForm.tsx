import { SnomedConceptSearch } from '@/components/index/SearchForm/SnomedConceptSearch';
import { LimitSlider } from './LimitSlider';
import { type UseFormReturnType } from '@mantine/form';
import { type GetSnomedConceptsFilter } from '@/api/concepts.schema';

/**
 * Props for the {@link SnomedConceptSearchForm} component.
 */
type SnomedConceptSearchFormProps = Readonly<{
	/**
	 * The JS form component itself, returned by the {@link useForm} hook.
	 */

	form: UseFormReturnType<GetSnomedConceptsFilter>;
	/**
	 * Function to call when the form is submitted.
	 */
	onSubmit: (values: GetSnomedConceptsFilter) => void;

	/**
	 * Function to call when the form is reset.
	 */
	onReset: () => void;
}>;

/**
 * Form for searching for SNOMED CT concepts.
 */
export function SnomedConceptSearchForm({ onSubmit, onReset, form }: SnomedConceptSearchFormProps) {
	return (
		<form
			className="relative flex flex-col items-center justify-center gap-5 p-10"
			onSubmit={form.onSubmit(onSubmit)}
			onReset={onReset}
		>
			<SnomedConceptSearch key={form.key('term')} {...form.getInputProps('term')} />
			<LimitSlider key={form.key('limit')} {...form.getInputProps('limit')} />
		</form>
	);
}
