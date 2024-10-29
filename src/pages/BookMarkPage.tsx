import { useEffect } from 'react';
import useTitleStore from '../store/titleStore';
import Card from '../components/Card';
import Heart from '../assets/images/heart.svg?react';
import myBookMark from '../mocks/myBookMark.json';
import NoBookMark from '../components/bookmark/NoBookMark';

console.log(myBookMark);

export default function BookMarkPage() {
    const setTitle = useTitleStore((state) => state.setTitle);

    useEffect(() => {
        setTitle('북마크');
    }, []);

    return (
        <div className="flex py-11 flex-col gap-y-8 mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)]">
            {myBookMark.length >= 1 ? (
                <>
                    <p className="flex items-center">
                        <Heart width={18} height={18} />
                        <strong className="px-1 tracking-tight text-lg">나만의 푸드트럭</strong>
                        <strong className="text-primary text-lg">{myBookMark.length}</strong>
                        <span className="text-lg">개</span>
                    </p>
                    {myBookMark.map((data) => (
                        <div key={data.id} className="flex flex-col">
                            <Card isOpen={data.isContinue} info={data} bg="white" />
                        </div>
                    ))}
                </>
            ) : (
                <NoBookMark />
            )}
        </div>
    );
}
