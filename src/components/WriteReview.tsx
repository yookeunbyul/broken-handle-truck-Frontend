import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { postComment } from "../apis/comment.ts";
import useComment from "../hooks/useComment.ts";
import Edit from "../assets/images/edit.svg?react";

export default function WriteReview() {
  const { id: storeId } = useParams<{ id: string }>();
  const { refetch } = useComment(storeId!);
  const [content, setContent] = useState("");

  const handlePostComment = () => {
    if (content.trim() === "") {
      toast.error("리뷰 내용을 작성해주세요.");
      return;
    }
    if (storeId) {
      postComment({ content, storeId }).then(() => {
        refetch().then(() => {
          toast.success("리뷰가 등록되었습니다.");
          setContent("");
        });
      });
    }
  };

  return (
    <div className="border-t-1 bottom-0 w-full sticky z-2 bg-white border-comment">
      <div className="w-[calc(100%-140px)] sm:w-[calc(100%-240px)] mx-auto pt-3 pb-8 flex gap-x-5">
        <textarea
          className="w-full pt-3 px-3 outline-none border-1 border-comment rounded-lg bg-form tracking-tighter resize-none"
          placeholder="리뷰를 작성해주세요"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <button onClick={handlePostComment}>
          <Edit width={30} height={30} />
        </button>
      </div>
    </div>
  );
}
