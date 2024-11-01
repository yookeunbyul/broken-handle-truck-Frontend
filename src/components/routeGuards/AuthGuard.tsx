import React, { useEffect } from 'react';
import useUserStore from '../../store/userStore';
import useFadeNavigate from '../../hooks/useFadeNavigate';
import { Outlet } from 'react-router-dom';
import useAuthValidation from '../../hooks/useAuthValidation';

export default function AuthGaurd(): React.ReactElement {
	const { setUser, user } = useUserStore();
	const navigate = useFadeNavigate();
	const { data, isLoading } = useAuthValidation();

	useEffect(() => {
		if (!user) {
			if (!isLoading) {
				if (data?.user) {
					setUser(data.user);
				} else {
					navigate('/login');
				}
			}
		}
	}, [isLoading, user, navigate, setUser, data?.user]);

	return <Outlet />;
}
