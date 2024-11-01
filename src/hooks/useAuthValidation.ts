import { useQuery } from '@tanstack/react-query';
import { getAuthValidation } from '../apis/auth';

export default function useAuthValidation() {
	const { data, isLoading } = useQuery({
		queryKey: ['user'],
		queryFn: getAuthValidation,
		staleTime: 30 * 60 * 60,
		refetchInterval: 30 * 60 * 60,
	});

	return { data, isLoading };
}
