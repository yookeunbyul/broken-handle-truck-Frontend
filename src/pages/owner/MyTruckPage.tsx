import { useEffect } from 'react';
import useTitleStore from '../../store/titleStore';
import { useNavigate } from 'react-router-dom';

export default function MyTruckPage() {
    const setTitle = useTitleStore((state) => state.setTitle);
    const navigate = useNavigate();

    useEffect(() => {
        setTitle('내 가게');
    }, []);

    return (
        <div>
            <button onClick={() => navigate(`/register`)}>내 가게 등록하기</button>
        </div>
    );
}
