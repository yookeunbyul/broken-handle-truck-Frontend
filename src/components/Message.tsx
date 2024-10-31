import { useState } from 'react';
import Menu from '../assets/images/defaultMenu.svg?react';

export default function Message() {
    const [isRead] = useState(true);
    return (
        <div className="flex items-center py-5 px-8 bg-white drop-shadow-lg rounded-lg cursor-pointer">
            <Menu width={70} height={70} />
            <div className="flex-1 flex flex-col pl-5 whitespace-nowrap tracking-tighter">
                <div>풀빵트럭이 영업을 시작했습니다.</div>
                <div className="text-sm text-category">2023-09-01 12:00</div>
            </div>
            <div className="flex-1 flex justify-end">
                <div className={`w-2 h-2 rounded-full ${isRead ? 'bg-category' : 'bg-success'}`}></div>
            </div>
        </div>
    );
}
