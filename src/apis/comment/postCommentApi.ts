import apiClient from "../apiClient";

// 댓글 등록
export const postComment = async (content: string, storeId: string) => {
  try {
    const res = await apiClient.post(
      "/comment",
      {
        content,
        storeId,
      },
      {
        withCredentials: true,
      }
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
