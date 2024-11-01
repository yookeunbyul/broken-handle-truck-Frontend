import { useEffect, useState } from 'react';
import useTitleStore from '../../store/titleStore';
import Logo from '../../assets/images/pinkLogo.svg?react';
import useFadeNavigate from '../../hooks/useFadeNavigate';
import { Map } from 'react-kakao-maps-sdk';
import Button from '../../components/button';
import MessageSquare from '../../assets/images/messageSquare.svg?react';
import NoReview from '../../components/NoReview';
import EditStore from '../../components/EditStore';

export default function MyTruckPage() {
    const setTitle = useTitleStore((state) => state.setTitle);
    const navigate = useFadeNavigate();

    // 우선 임시로 state 설정해놓겠습니다..
    const [hasStore] = useState(true);
    const [hasComments] = useState(false);

    useEffect(() => {
        if (hasStore) {
            setTitle('{가게이름}');
        } else {
            setTitle('내 가게');
        }
    }, []);

    return (
        <>
            {hasStore ? (
                <div className="relative h-full flex flex-col">
                    <div className="bg-review h-64 rounded-b-3xl">
                        <Map
                            className="w-full h-full rounded-b-3xl"
                            center={{ lat: 37.5533, lng: 126.97381 }}
                            level={5}
                        />
                    </div>
                    <div className="w-[calc(100%-80px)] sm:w-[calc(100%-250px)] mx-auto mt-10 mb-5">
                        <label className="text-xs text-white/50 mix-blend-difference tracking-tight">카테고리</label>
                        <div className="mt-2 w-full outline-none border-none rounded-lg bg-form p-3">붕어빵</div>
                    </div>
                    <Button />

                    <div className="flex w-[calc(100%-80px)] sm:w-[calc(100%-250px)] mx-auto items-center gap-x-1 pt-11 mb-3">
                        <MessageSquare width={16} height={16} />
                        <span className="tracking-tighter pb-1">
                            고객님이 남겨준 리뷰(<strong className="text-primary">0</strong>)
                        </span>
                    </div>
                    <div className="w-[calc(100%-80px)] sm:w-[calc(100%-250px)] mx-auto pb-11">
                        {hasComments ? <>{/* 코멘트 */}</> : <NoReview />}
                    </div>
                    <div className="sticky bottom-0 w-full bg-white z-10">
                        {' '}
                        {/* sticky로 변경 */}
                        <EditStore />
                    </div>
                </div>
            ) : (
                <div className="h-full relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="flex justify-center mb-5">
                            <Logo width={130} height={130} />
                        </div>
                        <div>
                            <div className="font-point text-2xl sm:text-3xl tracking-tighter whitespace-nowrap">
                                푸드트럭이 없습니다.
                            </div>
                            <div className="font-point text-2xl sm:text-3xl tracking-tighter whitespace-nowrap">
                                사장님, 가게를 <span className="text-primary font-point">등록</span>해주세요!
                            </div>
                        </div>
                        <div className="pt-8 w-full">
                            <button
                                className="bg-primary text-xl text-white font-bold w-full py-5 rounded-lg"
                                onClick={() => navigate(`/register`)}
                            >
                                내 가게 등록하기
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
