import { Group, Slider, type SliderProps } from '@mantine/core';

/**
 * Properties for {@link SliderInput}.
 */
export type SliderInputProps = Readonly<
	SliderProps & {
		/**
		 * The label to display above the slider.
		 */
		sliderLabel: string;
	}
>;

/**
 * Simple slider input component with label and marks.
 */
export function SliderInput({ sliderLabel, ...props }: SliderInputProps) {
	return (
		<Group>
			<label htmlFor="slider">
				{sliderLabel}
				<Slider
					id="slider"
					name=""
					size="lg"
					w={220}
					marks={[
						{ value: 5, label: '5' },
						{ value: 25, label: '25' },
						{ value: 50, label: '50' },
					]}
					step={5}
					max={50}
					min={5}
					{...props}
				/>
			</label>
		</Group>
	);
}
