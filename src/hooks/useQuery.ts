import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from '@/navigation';

/**
 * Hook to manage query parameters in the URL.
 */
export function useQuery() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const params = useMemo(() => new URLSearchParams(searchParams.toString()), [searchParams]);

	/**
	 * Set a query parameter by name.
	 */
	const set = useCallback(
		(name: string, value: string) => {
			params.set(name, value);
			router.push(`${pathname}?${params.toString()}`);
		},
		[params, pathname, router],
	);

	/**
	 * Reset a query parameter by name.
	 */
	const reset = useCallback(
		(name: string) => {
			params.delete(name);
			router.push(`${pathname}?${params.toString()}`);
		},
		[params, pathname, router],
	);

	/**
	 * Reset all query parameters.
	 */
	const resetAll = useCallback(() => {
		router.push(`${pathname}`);
	}, [pathname, router]);

	/**
	 * Get a query parameter by name.
	 */
	const get = useCallback((name: string) => searchParams.get(name), [searchParams]);

	const getAll = useCallback(
		(asString?: boolean) => {
			if (asString) {
				return searchParams.toString();
			}

			return searchParams;
		},
		[searchParams],
	);

	return {
		get,
		getAll,
		set,
		reset,
		resetAll,
	};
}
