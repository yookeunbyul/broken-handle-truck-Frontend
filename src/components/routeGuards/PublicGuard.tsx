import { Outlet, useLocation } from 'react-router-dom';
import useUserStore from '../../store/userStore';
import useFadeNavigate from '../../hooks/useFadeNavigate';
import { useEffect } from 'react';
import useAuthValidation from '../../hooks/useAuthValidation';

export default function PublicGuard(): React.ReactElement {
	const { setUser } = useUserStore();
	const navigate = useFadeNavigate();
	const location = useLocation();
	const { data, isLoading } = useAuthValidation();

	useEffect(() => {
		if (!isLoading) {
			if (data?.user) {
				setUser(data.user);
				navigate('/map');
			} else if (location.pathname === 'login' || location.pathname === '/signup') {
				navigate('/login');
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.user, isLoading]);

	return <Outlet />;
}
