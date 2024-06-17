import type { SnomedConcept } from '@/models/SnomedConcept';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const SELECTED_CONCEPT_LOCAL_STORAGE_KEY = 'selectedConcept';

/**
 * Utility function to check if the code is running in the browser.
 */
const isBrowser = () => typeof window !== 'undefined';

/**
 * Retrieves the initial state from local storage.
 */
const getInitialState = (): {
	selectedConcept: (Partial<SnomedConcept> & { id: string }) | undefined;
	matchedTerm: string | undefined;
} => {
	if (!isBrowser()) return { selectedConcept: undefined, matchedTerm: undefined };

	const storedState = localStorage.getItem(SELECTED_CONCEPT_LOCAL_STORAGE_KEY);
	if (storedState) {
		try {
			const parsedState = JSON.parse(storedState) as { id: string; term: string };
			return {
				selectedConcept: { id: parsedState.id },
				matchedTerm: parsedState.term,
			};
		} catch (error) {
			console.error('Failed to parse stored state from local storage:', error);
		}
	}
	return { selectedConcept: undefined, matchedTerm: undefined };
};

const initialState = getInitialState();

/**
 * Slice associated with {@link SnomedConcept} model.
 */
export type ConceptStore = {
	selectedConcept: (Partial<SnomedConcept> & { id: string }) | undefined;
	resetSelectedConcept: () => void;
	matchedTerm: string | undefined;
	resetMatchedTerm: () => void;
	setSelectedConceptWithMatchedTerm: (result: SnomedConcept, term: string) => void;
};

/**
 * Creates a slice for the {@link SnomedConcept} model.
 */
export const useConceptStore = create<ConceptStore>()(
	persist(
		(set) => ({
			selectedConcept: initialState.selectedConcept,
			resetSelectedConcept: () => {
				set({ selectedConcept: undefined });
				if (isBrowser()) {
					localStorage.removeItem(SELECTED_CONCEPT_LOCAL_STORAGE_KEY);
				}
			},
			matchedTerm: initialState.matchedTerm,
			resetMatchedTerm: () => {
				set({ matchedTerm: undefined });
				if (isBrowser()) {
					localStorage.removeItem(SELECTED_CONCEPT_LOCAL_STORAGE_KEY);
				}
			},
			setSelectedConceptWithMatchedTerm: (result, term) => {
				set({ selectedConcept: result, matchedTerm: term });
				if (isBrowser()) {
					localStorage.setItem(
						SELECTED_CONCEPT_LOCAL_STORAGE_KEY,
						JSON.stringify({ id: result.id, term }),
					);
				}
			},
		}),
		{
			name: SELECTED_CONCEPT_LOCAL_STORAGE_KEY,
			skipHydration: true,
		},
	),
);
