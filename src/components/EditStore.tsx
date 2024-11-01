export default function EditStore() {
    return (
        <div className="border-t-1 bg-white border-comment">
            <div className="w-[calc(100%-80px)] sm:w-[calc(100%-250px)] mx-auto pt-5 pb-5 flex gap-x-5">
                <button className="bg-secondary flex-1 p-5 rounded-lg tracking-tighter font-semibold">
                    내 가게 수정하기
                </button>
                <button className="border-1 border-placeholder text-placeholder flex-1 p-5 rounded-lg tracking-tighter font-semibold">
                    가게 삭제하기
                </button>
            </div>
        </div>
    );
}
