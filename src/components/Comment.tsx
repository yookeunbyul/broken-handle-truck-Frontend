import Delete from "../assets/images/delete.svg?react";
import { IComment } from "../types/comment";

type CommentProps = IComment;

export default function Comment({
  authorId,
  createdAt,
  content,
}: CommentProps) {
  return (
    <div className="bg-white tracking-tighter border-b-1 border-comment">
      <div className="flex justify-between py-3 text-xs ">
        <div className="font-bold text-black">{authorId.nickname}</div>
        <div className="flex gap-x-2 align-middle">
          <div className="text-category">{createdAt}</div>
          <button>
            <Delete width={15} height={15} />
          </button>
        </div>
      </div>
      <div className="py-5 text-sm text-black text-left">{content}</div>
    </div>
  );
}
