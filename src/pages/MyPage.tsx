import { useEffect, useRef, useState } from 'react';
import useTitleStore from '../store/titleStore';
import useFadeNavigate from '../hooks/useFadeNavigate';
import Comment from '../components/Comment.tsx';
import NoReview from '../components/NoReview.tsx';
import LogoIcon from '../assets/images/pinkLogo.svg?react';
import MessageSquareIcon from '../assets/images/messageSquare.svg?react';
import EditIcon from '../assets/images/edit2.svg?react';
import CheckIcon from '../assets/images/check.svg?react';
import type { IUser } from '../types/auth';
import type { IComment } from '../types/comment';
import Truck from '../assets/images/truck.svg?react';
import { logout, withdraw } from '../apis/auth.ts';
import useUserStore from '../store/userStore.ts';
import useNotificationStore from '../store/notificationStore.ts';
import { toast } from 'react-toastify';
import useStoresStore from '../store/storesStore.ts';

export default function MyPage() {
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const setTitle = useTitleStore((state) => state.setTitle);
    const { setCategory } = useStoresStore();
    const navigate = useFadeNavigate();
    const { setUser } = useUserStore();
    const [userInfo] = useState<IUser>({
        _id: '111',
        role: '',
        nickname: '닉네임',
    });
    const [comments] = useState<IComment[]>([
        // {
        //   _id: "1",
        //   createdAt: "YYYY-MM-DD",
        //   storeId: "222",
        //   content: "test",
        //   authorId: { _id: "111", nickname: "닉네임" },
        // },
    ]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [nickname, setNickname] = useState('');
    const { closeSocket } = useNotificationStore();

    const handleLogoutClick = async () => {
        // 로그아웃 버튼 클릭
        const response = await logout();

        if (response.msg === 'ok') {
            setUser(null);
            closeSocket();
            setCategory('');
            toast.success('로그아웃이 완료되었습니다.');

            //상태 변화가 반영된 후에 navigate가 실행
            setTimeout(() => {
                navigate('/login');
            }, 0);
        }
    };

    const handleAccountDeletion = async () => {
        // 회원 탈퇴 버튼 클릭
        const response = await withdraw();

        if (response.msg === 'ok') {
            setUser(null);
            closeSocket();
            setCategory('');
            toast.success('회원탈퇴가 완료되었습니다.');

            //상태 변화가 반영된 후에 navigate가 실행
            setTimeout(() => {
                navigate('/');
            }, 0);
        }
    };
    const handleEditNickname = () => {
        // 닉네임 수정 버튼 클릭
        if (isEditMode) {
            // 저장 후 EditMode 종료
            setIsEditMode(false);
        } else {
            // EditMode가 변경된 이후 focus (disabled 상태에서 focus 작동 안함)
            new Promise((resolve) => {
                setIsEditMode(true);
                resolve(true);
            }).then(() => {
                if (nicknameRef.current) {
                    nicknameRef.current.focus();
                }
            });
        }
    };

    useEffect(() => {
        setTitle('마이페이지');
        setNickname(userInfo.nickname);
    }, []);

    return (
        <div className="px-8 sm:px-0 max-w-lg mx-auto h-full flex flex-col gap-8 sm:gap-12 pt-[50px] sm:pt-[60px]">
            <div className="flex justify-between items-center gap-4">
                <div className="flex justify-center">
                    <LogoIcon
                        width={80}
                        height={80}
                        className="border-1 rounded-full border-category p-2 fill-logo-violet"
                    />
                </div>
                <div className="flex-1 flex items-center gap-1 relative">
                    <div className="flex flex-col gap-y-1">
                        <div>
                            <span>{nickname}</span>
                            <input
                                ref={nicknameRef}
                                className="outline-none absolute left-0 bg-transparent w-full"
                                type="text"
                                value={nickname}
                                onChange={({ target }) => setNickname(target.value)}
                                disabled={!isEditMode}
                            />
                            <button className="relative" onClick={handleEditNickname}>
                                {isEditMode ? (
                                    <CheckIcon width={16} height={16} />
                                ) : (
                                    <EditIcon
                                        className="duration-300 stroke-gray hover:stroke-primary"
                                        width={16}
                                        height={16}
                                    />
                                )}
                            </button>
                        </div>
                        <div className="text-sm text-category tracking-tighter">푸드트럭 발견가</div>
                    </div>
                </div>
                <button
                    className="border-1 text-sm border-category text-category px-4 py-1.5 rounded-lg duration-300 hover:border-primary hover:text-primary"
                    onClick={handleLogoutClick}
                >
                    로그아웃
                </button>
            </div>
            <button
                className="text-xl text-primary border-1 border-primary font-bold tracking-tight w-full py-6 rounded-lg drop-shadow-lg bg-white"
                onClick={() => navigate(`/my-truck`)}
            >
                <div className="flex gap-x-2 justify-center items-center">
                    내 가게 관리하기
                    <Truck width={23} height={23} className="pt-1" />
                </div>
            </button>
            <div className="flex-1">
                <div className="flex justify-start items-center gap-x-1 text-base mb-3 pt-2">
                    <MessageSquareIcon width={16} height={16} />
                    <span className="tracking-tight">
                        내가 남긴 리뷰 (<strong className="text-primary">{comments.length}</strong>)
                    </span>
                </div>
                {comments.length === 0 ? (
                    <div className="h-full">
                        <NoReview />
                    </div>
                ) : (
                    <div>
                        {comments.map((comment) => (
                            <Comment key={`my_comment_${comment._id}`} {...comment} />
                        ))}
                    </div>
                )}
            </div>
            <button className="self-center text-category underline text-sm pt-6 pb-4" onClick={handleAccountDeletion}>
                탈퇴하기
            </button>
        </div>
    );
}
