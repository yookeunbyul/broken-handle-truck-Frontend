import { useQuery } from "@tanstack/react-query";
import { getComment, getMyComment } from "../apis/comment.ts";
import type {
  CommentApiResponse,
  MyCommentApiResponse,
} from "../types/comment";

const getComments = (
  target: string,
): Promise<MyCommentApiResponse | CommentApiResponse> =>
  target === "me" ? getMyComment() : getComment({ storeId: target });

/**
 * 댓글 목록
 * @param target 댓글을 가져올 대상 ('me' | {storeId})
 */
export default function useComment<T>(target: "me" | string) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["comment", target],
    queryFn: () => getComments(target),
    select: (data) => ({ comments: data.comments as T[] }),
  });

  return { data, isLoading, refetch };
}
