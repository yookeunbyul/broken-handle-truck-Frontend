import { useEffect, useState } from 'react';
import useTitleStore from '../../store/titleStore';
import Logo from '../../assets/images/pinkLogo.svg?react';
import NoReview from '../../components/NoReview';
import MessageSquare from '../../assets/images/messageSquare.svg?react';
import Comment from '../../components/Comment';
import useFadeNavigate from '../../hooks/useFadeNavigate';

export default function MyTruckPage() {
    const setTitle = useTitleStore((state) => state.setTitle);
    const navigate = useFadeNavigate();

    const size = 16;

    //우선 임시로 state 설정해놓겠습니다..
    const [hasStore] = useState(true);
    const [hasComments] = useState(false);

    useEffect(() => {
        setTitle('내 가게');
    }, []);

    return (
        <div className="h-full relative w-[calc(100%-45px)] sm:w-[calc(100%-150px)] mx-auto text-center flex flex-col justify-center">
            {hasStore ? (
                <>
                    <div className="flex flex-col justify-between h-full py-11">
                        <div>
                            <div className="flex justify-center mb-5 pt-8">
                                <Logo width={120} height={120} className="border-1 rounded-full border-category p-2" />
                            </div>
                            <div className="font-bold text-lg">example@google.com</div>
                            <div className="text-category pt-1 text-sm">푸드트럭 사장님</div>
                            <div className="pt-10 pb-8 flex gap-4 justify-center mb-3 sm:mb-5 w-[calc(100%-45px)] sm:w-[calc(100%-150px)] mx-auto">
                                <button
                                    className="bg-secondary text-base sm:text-lg text-black font-bold w-full py-5 rounded-lg"
                                    onClick={() => navigate(`/register`)}
                                >
                                    내 가게 수정하기
                                </button>
                                <button
                                    className="bg-primary text-base sm:text-lg text-white font-bold w-full py-5 rounded-lg"
                                    onClick={() => navigate(`/register`)}
                                >
                                    가게 삭제하기
                                </button>
                            </div>
                            <div className="flex justify-start items-center gap-x-1 text-base w-[calc(100%-45px)] sm:w-[calc(100%-150px)] mx-auto mb-3">
                                <MessageSquare width={size} height={size} />
                                <span className="tracking-tight">
                                    <strong>고객님</strong>이 남겨준 리뷰
                                </span>
                            </div>
                            {hasComments ? (
                                <div className="w-[calc(100%-45px)] sm:w-[calc(100%-150px)] mx-auto">
                                    <Comment />
                                    <Comment />
                                    <Comment />
                                </div>
                            ) : (
                                <div className="w-[calc(100%-45px)] sm:w-[calc(100%-150px)] mx-auto">
                                    <NoReview />
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="text-category underline text-sm mt-10">탈퇴하기</button>
                        </div>
                    </div>
                </>
            ) : (
                <>
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
                    <div className="pt-8 w-[calc(100%-100px)] sm:w-[calc(100%-300px)] mx-auto">
                        <button
                            className="bg-primary text-xl text-white font-bold w-full py-5 rounded-lg"
                            onClick={() => navigate(`/register`)}
                        >
                            내 가게 등록하기
                        </button>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform translate-x-[-50%] mb-5">
                        <button className="text-category underline text-sm">탈퇴하기</button>
                    </div>
                </>
            )}
        </div>
    );
}
