import { useEffect } from 'react';
import useTitleStore from '../../store/titleStore';

export default function RegisterPage() {
    const setTitle = useTitleStore((state) => state.setTitle);

    useEffect(() => {
        setTitle('가게 등록');
    }, []);

    return <div>Register</div>;
}
