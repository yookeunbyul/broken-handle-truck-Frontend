import { http } from "./apiClient";
import type { BaseApiResponse } from "../types/response";
import type {
  ICommentPost,
  GetCommentApiParams,
  CommentApiResponse,
  PostCommentApiParams,
  DeleteCommentApiParams,
} from "../types/comment";

// 댓글 조회
export const getComment = async ({
  storeId,
}: GetCommentApiParams): Promise<CommentApiResponse> =>
  await http.get<CommentApiResponse, GetCommentApiParams>(`/comment`, {
    storeId,
  });

// 댓글 등록(post)
export const postComment = async ({
  content,
  storeId,
}: PostCommentApiParams): Promise<ICommentPost> =>
  await http.post<ICommentPost, PostCommentApiParams>(`/comment`, {
    content,
    storeId,
  });

// 댓글 삭제
export const deleteComment = async ({ commentId }: DeleteCommentApiParams) => {
  await http.delete<BaseApiResponse>(`/comment/${commentId}`);
};
