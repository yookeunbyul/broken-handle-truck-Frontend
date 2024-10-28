import Delete from '../assets/images/delete.svg?react';

export default function Comment() {
    return (
        <div className="bg-white tracking-tighter border-b-1 border-comment">
            <div className="flex justify-between py-3 text-xs ">
                <div className="font-bold text-black">익명</div>
                <div className="flex gap-x-2 align-middle">
                    <div className="text-category">YYYY-MM-DD</div>
                    <button>
                        <Delete width={15} height={15} />
                    </button>
                </div>
            </div>
            <div className="py-5 text-sm text-black text-left">내용</div>
        </div>
    );
}
