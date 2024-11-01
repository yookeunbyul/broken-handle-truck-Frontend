import React, { useEffect } from 'react';
import useUserStore from '../../store/userStore';
import useFadeNavigate from '../../hooks/useFadeNavigate';
import { Outlet, useLocation } from 'react-router-dom';
import useAuthValidation from '../../hooks/useAuthValidation';

export default function AuthGaurd(): React.ReactElement {
	const { setUser, user } = useUserStore();
	const navigate = useFadeNavigate();
	const location = useLocation();
	const { data, isLoading } = useAuthValidation();

	useEffect(() => {
		if (!user) {
			if (!isLoading) {
				if (data?.user) {
					setUser(data.user);
					if (location.pathname === '/login' || location.pathname === '/signup') {
						navigate('/map');
					}
				} else {
					if (!user) {
						navigate('/login');
					}
				}
			}
		}
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading, data?.user]);

	return <Outlet />;
}
