import apiClient from "../apiClient.ts";
import type { IStore } from "../../types/store.d.ts";

interface StoreApiData {
  store: IStore;
  comments: object[]; // CommentType 받은 이후 수정 필요
}

/**
 * 특정 매장 정보
 * @param id storeId
 */
const getStore = async <T = { msg: string } & StoreApiData>(
  id: string,
): Promise<T> => {
  const res = await apiClient.get<T>(`/store/${id}`);
  return res.data;
};

export { getStore };
