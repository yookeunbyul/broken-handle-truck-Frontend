import Edit from '../assets/images/edit.svg?react';

export default function WriteReview() {
    return (
        <div className="border-t-1 bottom-0 w-full sticky z-2 bg-white border-comment">
            <div className="w-[calc(100%-140px)] sm:w-[calc(100%-240px)] mx-auto pt-3 pb-8 flex gap-x-5">
                <textarea
                    className="w-full pt-3 px-3 outline-none border-1 border-comment rounded-lg bg-form tracking-tighter resize-none"
                    placeholder="리뷰를 작성해주세요"
                />
                <button>
                    <Edit width={30} height={30} />
                </button>
            </div>
        </div>
    );
}
