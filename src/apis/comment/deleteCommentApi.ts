import apiClient from "../apiClient";

// 댓글 삭제
export const deleteComment = async (commentId: string) => {
  try {
    const res = await apiClient.delete("/comment", {
      data: {
        commentId,
      },
      withCredentials: true,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
