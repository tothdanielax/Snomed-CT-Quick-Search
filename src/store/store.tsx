import { type ConceptStore } from '@/store/slices/conceptStore';
import { useEffect, useState } from 'react';

/**
 * Type for the central store of the application ({@link useStore}).
 */
type Store = Readonly<ConceptStore>;

/**
 * Central store for the application.
 */
export const useStore = <T extends Store, F>(
	store: (callback: (state: T) => unknown) => unknown,
	callback: (state: T) => F,
) => {
	const result = store(callback) as F;
	const [data, setData] = useState<F>();

	// https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md#skiphydration
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		setData(result);
	}, [result]);

	return data;
};
