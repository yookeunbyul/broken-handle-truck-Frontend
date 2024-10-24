export default function Card() {
    return (
        <div className="bg-black mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)] rounded-2xl p-8 flex flex-col gap-y-8">
            <div className="tracking-tight flex gap-x-6">
                <div className="flex-none border-2 flex items-center justify-center p-6">이미지</div>
                <div className="flex-1">
                    <div className="flex flex-col gap-y-1">
                        <div className="text-sm text-gray">카테고리</div>
                        <div className="text-lg text-white font-bold">이름</div>
                        <div className="text-sm text-gray">최근 방문 0명</div>
                    </div>
                </div>
                <div className="flex-1 text-right flex flex-col gap-y-1">
                    <div>북마크</div>
                    <div className="flex justify-end text-xs gap-x-1 text-white items-center">
                        <div className="w-2 h-2 rounded-full bg-success"></div>
                        <div>운영중</div>
                    </div>
                </div>
            </div>
            <div className="text-right">
                <button className="text-right bg-primary py-2 px-3 tracking-tight rounded-md text-white font-bold">
                    자세히 보기
                </button>
            </div>
        </div>
    );
}
