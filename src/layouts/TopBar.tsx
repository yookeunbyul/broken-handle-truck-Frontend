import LeftArrowIcon from '../assets/images/leftArrow.svg?react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookMarkButton from '../components/BookMarkButton';

type TopBarProps = {
    title?: string;
};

export default function TopBar({ title }: TopBarProps) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const onClickLeft = () => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                navigate(-1);
            });
        } else {
            navigate(-1);
        }
    };

    const onClickRight = () => {};

    return (
        <div className="flex w-full bg-primary justify-center items-center px-4 py-5 sticky top-0 z-10">
            <div className="w-[calc(100%-50px)] sm:w-[calc(100%-100px)] flex">
                {(pathname === '/detail' || pathname === '/register') && (
                    <div className="flex items-center gap-4">
                        <div onClick={onClickLeft}>
                            <LeftArrowIcon width={20} height={20} className="fill-white cursor-pointer" />
                        </div>
                    </div>
                )}
                <p className="flex-1 text-center text-lg text-white font-bold">{title}</p>
                {pathname === '/detail' && (
                    <div className="flex justify-end items-center gap-spacing-05">
                        <BookMarkButton isBookmarked={false} onClick={onClickRight} size={30} />
                    </div>
                )}
            </div>
        </div>
    );
}
