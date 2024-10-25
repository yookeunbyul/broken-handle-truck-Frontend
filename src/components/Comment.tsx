import Delete from '../assets/images/delete.svg?react';

export default function Comment() {
    return (
        <div className="bg-white mx-auto w-[calc(100%-50px)] sm:w-[calc(100%-300px)] tracking-tighter">
            <div className="flex justify-between py-3 text-xs ">
                <div className="font-bold text-black">익명</div>
                <div className="flex gap-x-2 align-middle">
                    <div className="text-category">YYYY-MM-DD</div>
                    <button>
                        <Delete width={15} height={15} />
                    </button>
                </div>
            </div>
            <div className="py-5 text-base text-black">내용</div>
        </div>
    );
}
