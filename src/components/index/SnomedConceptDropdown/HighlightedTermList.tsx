import type { SnomedConcept } from '@/models/SnomedConcept';
import { Highlight, List, Text } from '@mantine/core';
import { motion } from 'framer-motion';

/**
 * Props for the {@link HighlightedTermList} component.
 */
export type HighlightedTermListProps = Readonly<{
	/**
	 * Term to highlight.
	 */
	highlightTerm: string;

	/**
	 * List of results.
	 */
	results: SnomedConcept[];

	/**
	 * Callback when a row is clicked. The row and the matched description.term (full one, not the highlightTerm) are passed as arguments.
	 */
	onRowClick: (row: SnomedConcept, matchedTerm: string) => void;
}>;

/**
 * List with highlighted terms.
 */
export function HighlightedTermList({
	results,
	onRowClick,
	highlightTerm,
}: HighlightedTermListProps) {
	return (
		<List listStyleType="disc">
			{results.map((snomedConceptType, mainIndex) => (
				<List.Item key={snomedConceptType.id} mb={20}>
					<motion.div
						initial={{ opacity: 0, x: '-10vw' }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2, delay: mainIndex * 0.1 }}
					>
						<Text fw={600}>ID {snomedConceptType.id} </Text>
						<List withPadding listStyleType="disc">
							{snomedConceptType.descriptions.items.map((description) => (
								<List.Item
									className="cursor-pointer"
									onClick={() => onRowClick(snomedConceptType, description.term)}
									key={description.id}
									pl={10}
								>
									<Highlight
										highlight={highlightTerm}
										highlightStyles={{
											fontWeight: 'bold',
										}}
									>
										{String(description.term)}
									</Highlight>
								</List.Item>
							))}
						</List>
					</motion.div>
				</List.Item>
			))}
		</List>
	);
}
