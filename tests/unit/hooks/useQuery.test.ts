import { renderHook, act } from '@tests/unit/testing-utils';
import { useQuery } from '@/hooks/useQuery';
import { describe, expect, test, beforeEach, vi } from 'vitest';

// Use vi.hoisted to create mock implementations
const mocks = vi.hoisted(() => ({
	searchParamsToStringMock: vi.fn(),
	searchParamsGetMock: vi.fn(),
	routerPushMock: vi.fn(),
}));

vi.mock('next/navigation', () => ({
	useSearchParams: vi.fn().mockReturnValue({
		toString: mocks.searchParamsToStringMock,
		get: mocks.searchParamsGetMock,
	}),
}));

vi.mock('@/navigation', () => ({
	useRouter: vi.fn().mockReturnValue({
		push: mocks.routerPushMock,
	}),
	usePathname: vi.fn().mockReturnValue('/test-path'),
}));

describe('useQuery', () => {
	beforeEach(() => {
		mocks.searchParamsToStringMock.mockReturnValue('term=test&limit=10');
		mocks.searchParamsGetMock.mockImplementation((name: string) => {
			const params = new URLSearchParams('term=test&limit=10');
			return params.get(name);
		});
		mocks.routerPushMock.mockClear();
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	test('should get a query parameter by name', () => {
		const { result } = renderHook(() => useQuery());
		expect(result.current.get('term')).toBe('test');
		expect(result.current.get('limit')).toBe('10');
		expect(result.current.get('foo')).toBeNull(); // 'foo' is not present in the initial params
	});

	test('should set a query parameter by name', () => {
		const { result } = renderHook(() => useQuery());
		act(() => {
			result.current.set('baz', 'qux');
		});
		expect(mocks.routerPushMock).toHaveBeenCalledWith('/test-path?term=test&limit=10&baz=qux');
	});

	test('should reset a query parameter by name', () => {
		const { result } = renderHook(() => useQuery());
		act(() => {
			result.current.reset('term');
		});
		expect(mocks.routerPushMock).toHaveBeenCalledWith('/test-path?limit=10');
	});

	test('should reset all query parameters', () => {
		const { result } = renderHook(() => useQuery());
		act(() => {
			result.current.resetAll();
		});
		expect(mocks.routerPushMock).toHaveBeenCalledWith('/test-path');
	});
});
