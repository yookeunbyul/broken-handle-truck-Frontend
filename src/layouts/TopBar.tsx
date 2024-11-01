import LeftArrowIcon from '../assets/images/leftArrow.svg?react';
import { useLocation } from 'react-router-dom';
import BookMarkButton from '../components/BookMarkButton';
import useFadeNavigate from '../hooks/useFadeNavigate';
import { useMemo } from 'react';

type TopBarProps = {
    title?: string;
};

export default function TopBar({ title }: TopBarProps) {
    const navigate = useFadeNavigate();
    const { pathname: _pathname } = useLocation();

    const pathname = useMemo(() => `/${_pathname.split('/')[1]}`, [_pathname]);

    const onClickLeft = () => {
        if (document.startViewTransition) {
            document.startViewTransition(() => {
                navigate(-1);
            });
        } else {
            navigate(-1);
        }
    };

    return (
        <>
            <div className="flex w-full bg-primary justify-center items-center px-4 py-5 sticky top-0 z-10">
                <div className="w-[calc(100%-50px)] sm:w-[calc(100%-100px)] flex items-center">
                    <div className="flex-1 flex items-center">
                        {(pathname === '/detail' || pathname === '/register' || pathname === `/my-truck`) && (
                            <div onClick={onClickLeft}>
                                <LeftArrowIcon width={25} height={25} className="fill-white cursor-pointer" />
                            </div>
                        )}
                    </div>
                    <p className="flex-1 text-center text-lg text-white font-bold">{title}</p>
                    <div className="flex-1 flex items-center justify-end">
                        {pathname === '/detail' && <BookMarkButton isBookmarked={false} onClick={() => {}} size={30} />}
                    </div>
                </div>
            </div>
        </>
    );
}
