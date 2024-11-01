import { useEffect, useState } from "react";
import useTitleStore from "../store/titleStore";
import useFadeNavigate from "../hooks/useFadeNavigate";
import Comment from "../components/Comment.tsx";
import NoReview from "../components/NoReview.tsx";
import LogoIcon from "../assets/images/pinkLogo.svg?react";
import MessageSquareIcon from "../assets/images/messageSquare.svg?react";
import EditIcon from "../assets/images/edit2.svg?react";
import type { IUser } from "../types/auth";
import type { IComment } from "../types/comment";

export default function MyPage() {
  const setTitle = useTitleStore((state) => state.setTitle);
  const navigate = useFadeNavigate();
  const [userInfo] = useState<IUser>({
    _id: "111",
    role: "",
    nickname: "닉네임",
  });
  const [comments] = useState<IComment[]>([]);

  const handleLogoutClick = () => {
    // 로그아웃 버튼 클릭
  };
  const handleAccountDeletion = () => {
    // 회원 탈퇴 버튼 클릭
  };
  const handleEditNickname = () => {
    // 닉네임 수정 버튼 클릭
  };

  useEffect(() => {
    setTitle("마이페이지");
  }, []);

  return (
    <div className="w-[calc(100%-45px)] sm:w-[calc(100%-150px)] mx-auto flex flex-col gap-8 sm:gap-12 pt-[22.5px] sm:pt-[75px]">
      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-center">
          <LogoIcon
            width={80}
            height={80}
            className="border-1 rounded-full border-category p-2 fill-logo-violet"
          />
        </div>
        <div className="flex-1 flex items-center gap-1">
          <p>{userInfo.nickname}</p>
          <button onClick={handleEditNickname}>
            <EditIcon
              className="duration-300 stroke-gray hover:stroke-primary"
              width={16}
              height={16}
            />
          </button>
        </div>
        <button
          className="border-1 border-category text-category px-4 py-1.5 rounded-lg duration-300 hover:border-primary hover:text-primary"
          onClick={handleLogoutClick}
        >
          로그아웃
        </button>
      </div>
      <button
        className="bg-primary text-xl text-white font-bold tracking-tight w-full py-5 rounded-lg"
        onClick={() => navigate(`/my-truck`)}
      >
        내 가게 보기
      </button>
      <div className="flex-1">
        <div className="flex justify-start items-center gap-x-1 text-base mb-3">
          <MessageSquareIcon width={16} height={16} />
          <span className="tracking-tight">
            내가 남긴 리뷰 (
            <strong className="text-primary">{comments.length}</strong>)
          </span>
        </div>
        {comments.length === 0 ? (
          <div>
            <NoReview />
          </div>
        ) : (
          <div>
            {comments.map((comment) => (
              <Comment key={`my_comment_${comment._id}`} {...comment} />
            ))}
          </div>
        )}
      </div>
      <div className="flex items-end justify-center pb-5">
        <button
          className="text-category underline text-sm absolute bottom-24"
          onClick={handleAccountDeletion}
        >
          탈퇴하기
        </button>
      </div>
    </div>
  );
}
