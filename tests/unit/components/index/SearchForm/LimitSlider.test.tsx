import { render, screen } from '@tests/unit/testing-utils';
import { LimitSlider } from '@/components/index/SearchForm/LimitSlider';
import { describe, expect, test } from 'vitest';

describe('LimitSlider', () => {
	test('renders the slider with the correct label', () => {
		const handleChange = vi.fn();
		render(<LimitSlider onChange={handleChange} />);

		expect(screen.getByRole('slider')).toBeDefined();
		expect(screen.getByText(/Max/)).toBeDefined();
		expect(screen.getByText(/Max/)).toBeInTheDocument();
	});
});
