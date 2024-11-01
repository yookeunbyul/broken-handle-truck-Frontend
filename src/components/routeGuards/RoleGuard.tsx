import { Outlet } from 'react-router-dom';
import useUserStore from '../../store/userStore';
import useFadeNavigate from '../../hooks/useFadeNavigate';
import { useEffect } from 'react';

interface RoleGuardProps {
	requiredRole: string;
	redirectUrl: string;
}

export default function RoleGuard({ requiredRole, redirectUrl }: RoleGuardProps): React.ReactElement {
	const { user } = useUserStore();
	const navigate = useFadeNavigate();

	useEffect(() => {
		if (user && user.role !== requiredRole) {
			navigate(redirectUrl);
		}
	}, [user, requiredRole, navigate, redirectUrl]);

	return <Outlet />;
}
