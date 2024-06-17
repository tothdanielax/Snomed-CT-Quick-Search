import { SliderInput, type SliderInputProps } from '../../common/inputs/SliderInput';
import { useTranslations } from 'next-intl';

/**
 * Props for {@link LimitSlider}.
 */
export type LimitSliderProps = Omit<SliderInputProps, 'sliderLabel'>;

/**
 * Slider for setting a limit. Used in the {@link SnomedConceptSearchForm}.
 */
export function LimitSlider({ ...props }: LimitSliderProps) {
	const t = useTranslations('inputs.LimitSlider');

	return <SliderInput sliderLabel={t('sliderLabel')} {...props} />;
}
