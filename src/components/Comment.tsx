import { toast } from "react-toastify";
import { deleteComment } from "../apis/comment.ts";
import useUserStore from "../store/userStore.ts";
import useComment from "../hooks/useComment.ts";
import Delete from "../assets/images/delete.svg?react";

interface CommentProps {
  id: string;
  authorId: string;
  // 댓글 삭제 시 refetch를 보낼 target Id ({storeId} | 'me')
  targetId: string;
  name: string;
  content: string;
  createdAt: string;
}

export default function Comment({
  id,
  authorId,
  targetId,
  name,
  createdAt,
  content,
}: CommentProps) {
  const { user } = useUserStore();
  const { refetch } = useComment(targetId);

  const handleDeleteComment = () => {
    deleteComment({ commentId: id }).then((data) => {
      if (data.msg === "ok") {
        refetch().then(() => {
          toast.success("삭제되었습니다.");
        });
      } else {
        toast.error(data.msg);
      }
    });
  };

  return (
    <div className="bg-white tracking-tighter border-b-1 border-comment">
      <div className="flex justify-between py-3 text-xs ">
        <div className="font-bold text-black">{name}</div>
        <div className="flex gap-x-2 align-middle">
          <div className="text-category">{createdAt}</div>
          {user?._id === authorId && (
            <button onClick={handleDeleteComment}>
              <Delete width={15} height={15} />
            </button>
          )}
        </div>
      </div>
      <div className="py-5 text-sm text-black text-left">{content}</div>
    </div>
  );
}
