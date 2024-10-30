import apiClient from "../apiClient.ts";

/**
 * 매장 삭제
 */
const deleteStore = async <T = { msg: string }>(): Promise<T> => {
  const res = await apiClient.delete<T>("/store", {
    withCredentials: true,
  });
  return res.data;
};

export { deleteStore };
