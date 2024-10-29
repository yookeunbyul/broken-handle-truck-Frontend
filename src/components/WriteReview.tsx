import Lock from '../assets/images/Lock.svg?react';

export default function WriteReview() {
    return (
        <div className="border-t-1 bottom-0 w-full sticky z-2 bg-white border-comment">
            <div className="w-[calc(100%-140px)] sm:w-[calc(100%-240px)] mx-auto py-5">
                <textarea
                    className="w-full p-3 outline-none border-1 border-comment rounded-lg bg-form h-28 tracking-tighter"
                    placeholder="리뷰를 작성해주세요"
                />
                <div className="flex justify-between">
                    <div className="relative input--password">
                        <input
                            id="password"
                            className="p-3 outline-none border-1 border-comment rounded-lg tracking-tighter"
                            type="password"
                            placeholder=" "
                        />
                        <label htmlFor="password" className="absolute top-1/2 left-0 -translate-y-1/2 text-gray pl-3">
                            <div className="flex items-center gap-x-1">
                                <Lock width={16} height={16} />
                                <div className="tracking-tighter text-placeholder">비밀번호</div>
                            </div>
                        </label>
                    </div>

                    <button className="bg-primary py-3 px-5 rounded-lg font-bold text-white tracking-tighter">
                        등록
                    </button>
                </div>
            </div>
        </div>
    );
}
