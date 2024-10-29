import Button from "../components/button";
import MessageSquare from "../assets/images/messageSquare.svg?react";
import { useState } from "react";
import Comment from "../components/Comment";
import NoReview from "../components/NoReview";
import WriteReview from "../components/WriteReview";
import { Map } from "react-kakao-maps-sdk";

export default function DetailPage() {
  const [hasComments] = useState(true);
  return (
    <div className="relative">
      <div className="pb-11 mb-5">
        <div className="bg-review h-64 rounded-b-3xl">
          <Map
            className="w-full h-full rounded-b-3xl"
            center={{ lat: 37.5533, lng: 126.97381 }}
            level={5}
          />
          <div className="w-[calc(100%-140px)] sm:w-[calc(100%-240px)] mx-auto h-full py-8 flex justify-end items-end"></div>
        </div>
        <div className="w-[calc(100%-45px)] flex flex-col gap-y-5 mx-auto my-10">
          <div className="w-[calc(100%-100px)] sm:w-[calc(100%-200px)] mx-auto">
            <label className="text-xs text-white/50 mix-blend-difference tracking-tight">
              카테고리
            </label>
            <div className="mt-2 w-full outline-none border-none rounded-lg bg-form p-3">
              붕어빵
            </div>
          </div>
          <Button />
        </div>
        <div className="w-[calc(100%-140px)] sm:w-[calc(100%-240px)] flex justify-start items-center gap-x-1 text-base mx-auto mb-3 pt-11">
          <MessageSquare width={16} height={16} />
          <span className="tracking-tight">
            리뷰<strong className="text-primary"> 0</strong>개
          </span>
        </div>
        {hasComments ? (
          <div className="w-[calc(100%-140px)] sm:w-[calc(100%-240px)] mx-auto">
            <Comment />
          </div>
        ) : (
          <div className="w-[calc(100%-140px)] sm:w-[calc(100%-240px)] mx-auto">
            <NoReview />
          </div>
        )}
      </div>
      <WriteReview />
    </div>
  );
}
