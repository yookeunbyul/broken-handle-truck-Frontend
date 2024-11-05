import React, { useEffect } from 'react';
import useUserStore from '../../store/userStore';
import useFadeNavigate from '../../hooks/useFadeNavigate';
import MainPage from '../../pages/MainPage';
import { getAuthValidation } from '../../apis/auth';

export default function MainGuard(): React.ReactElement {
	const { setUser, user } = useUserStore();
	const navigate = useFadeNavigate();

	const validateAuth = async () => {
		const data = await getAuthValidation();
		if (data.msg === 'ok') {
			setUser(data.user);
		} else {
			setUser(null);
		}
	};

	useEffect(() => {
		if (!user) {
			validateAuth();
		} else {
			navigate('/map');
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return <MainPage />;
}
