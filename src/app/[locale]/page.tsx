'use client';

import { useCallback, useState, useTransition } from 'react';
import type { SnomedConcept } from '@/models/SnomedConcept';
import { useQuery } from '@/hooks/useQuery';
import { SnomedConceptDropdown } from '@/components/index/SnomedConceptDropdown/SnomedConceptDropdown';
import { getSnomedConcepts } from '@/api/concepts.api';
import { Box, Flex, Skeleton } from '@mantine/core';
import { SnomedConceptSearchForm } from '@/components/index/SearchForm/SnomedConceptSearchForm';
import { useForm, zodResolver } from '@mantine/form';
import { GetSnomedConceptsFilterSchema } from '@/api/concepts.schema';

/**
 * Skeleton that is rendered during the loading of the dropdown.
 */
function DropdownSkeleton() {
	return (
		<Box h="full" w="full">
			<Skeleton height={8} radius="xl" />
			<Skeleton height={8} mt={6} radius="xl" />
			<Skeleton height={8} mt={6} width="70%" radius="xl" />
		</Box>
	);
}

/**
 * Home/Landing page of the app.
 */
export default function IndexPage() {
	const query = useQuery();

	const form = useForm({
		mode: 'controlled',
		initialValues: {
			term: query.get('term') ?? '',
			limit: query.get('limit') ? Number(query.get('limit')) : 5,
		},
		validate: zodResolver(GetSnomedConceptsFilterSchema),
	});

	const [searchResults, setSearchResults] = useState<SnomedConcept[] | undefined>();
	const [highlightTerm, setHighlightTerm] = useState<string | undefined>();
	const [isPending, startTransition] = useTransition();

	/**
	 * Handler for the search button. It fires when the user clicks the search button or presses enter.
	 * The terms are stored in query to ensure that the search results are preserved when the user navigates back to the page.
	 */
	const handleSubmit = async (values: { term: string; limit: number }) => {
		query.set('term', values.term);
		query.set('limit', values.limit.toString());

		startTransition(async () => {
			const apiResults = await getSnomedConcepts({
				term: values.term,
				limit: values.limit,
			});
			setSearchResults(apiResults);
			setHighlightTerm(values.term);
		});
	};

	/**
	 * Handler for the reset button. It resets the form and clears the query.
	 */
	const handleReset = useCallback(() => {
		form.reset();
		query.resetAll();
	}, [form, query]);

	return (
		<Flex className="items-center" direction="column" gap={{ base: 30, md: 50 }}>
			<SnomedConceptSearchForm onSubmit={handleSubmit} onReset={handleReset} form={form} />

			<Box w={{ base: '90%', md: '40%' }}>
				{isPending ? (
					<DropdownSkeleton />
				) : (
					searchResults &&
					highlightTerm && (
						<SnomedConceptDropdown results={searchResults} highlightTerm={highlightTerm} />
					)
				)}
			</Box>
		</Flex>
	);
}
