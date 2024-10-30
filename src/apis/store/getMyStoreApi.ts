import apiClient from "../apiClient.ts";
import { IStore } from "../../types/store.ts";

interface MyStoreApiData {
  store: IStore;
  comments: object[]; // CommentType 받은 이후 수정 필요
}

/**
 * 등록한 매장(내 가게) 정보
 */
const getMyStore = async <
  T = { msg: string } & MyStoreApiData,
>(): Promise<T> => {
  const res = await apiClient.get<T>(`/store`, {
    withCredentials: true,
  });
  return res.data;
};

export { getMyStore };
