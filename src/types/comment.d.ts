import type { BaseApiResponse } from "./response";
import type { IStore } from "./store";

interface IAuthor {
  _id: string;
  nickname: string;
}

interface IComment {
  _id: string;
  storeId: string;
  content: string;
  createdAt: string;
  authorId: IAuthor;
}

interface IMyComment {
  _id: string;
  authorId: string;
  storeId: Pick<IStore, "category" | "name" | "_id">;
  content: string;
  createdAt: string;
}

interface ICommentPost {
  _id: string;
  storeId: string;
  content: string;
  createdAt: string;
  authorId: string;
}

// Get /comment?storeId={}
interface GetCommentApiParams {
  storeId: string;
}

// res 값
interface CommentApiResponse extends BaseApiResponse {
  comments: IComment[];
}
interface MyCommentApiResponse extends BaseApiResponse {
  comments: IMyComment[];
}

// Post /comment
interface PostCommentApiParams {
  content: string;
  storeId: string;
}

// Delete /comment
interface DeleteCommentApiParams {
  commentId: string;
}

export type {
  IComment,
  IMyComment,
  ICommentPost,
  GetCommentApiParams,
  CommentApiResponse,
  MyCommentApiResponse,
  PostCommentApiParams,
  DeleteCommentApiParams,
};
