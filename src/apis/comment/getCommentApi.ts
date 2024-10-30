import apiClient from "../apiClient";

// 댓글 조회
export const getComments = async (storeId: string) => {
  try {
    const res = await apiClient.get("/comment", { params: { storeId } });
    return res;
  } catch (err) {
    console.log(err);
  }
};
