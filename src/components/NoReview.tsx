import MessageSquare from "../assets/images/messageSquare.svg?react";

export default function NoReview() {
  const size = 20;

  return (
    <div className="mx-auto w-[calc(100%-100px)] sm:w-[calc(100%-200px)] flex flex-col gap-y-2.5">
      <div className="flex justify-start items-center gap-x-1 text-sm">
        <MessageSquare width={size} height={size} />
        <span>
          <strong>고객님</strong>이 남겨준 리뷰
        </span>
      </div>
      <div className="flex justify-center items-center bg-neutral-300 text-neutral-400 h-40 text-base rounded-2xl">
        리뷰가 없습니다.
      </div>
    </div>
  );
}
