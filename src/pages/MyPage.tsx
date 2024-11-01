import { useEffect } from 'react';
import useTitleStore from '../store/titleStore';
import useFadeNavigate from '../hooks/useFadeNavigate';

export default function MyPage() {
    const setTitle = useTitleStore((state) => state.setTitle);
    const navigate = useFadeNavigate();

    useEffect(() => {
        setTitle('마이페이지');
    }, []);
    return (
        <div>
            <button onClick={() => navigate(`/my-truck`)}>내 가게 보기</button>
        </div>
    );
}
