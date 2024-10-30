import { IStore } from "../../types/store.ts";
import apiClient from "../apiClient.ts";
import { IStore } from "../../types/store.d.ts";

interface PostStoreApiParams {
  name: string;
  lon: number;
  lat: number;
  category: string;
  paymentMethod: string[];
  isOpen: boolean;
}

interface PostStoreApiData {
  store: IStore;
  comments: object[]; // CommentType 받은 이후 수정 필요
}

/**
 * 매장 등록 / 수정
 * @param name 가게 이름
 * @param lon 경도(longitude)
 * @param lat 위도(latitude)
 * @param category 카테고리
 * @param paymentMethod 결제 방식
 * @param isOpen 오픈 상태 변경
 */
const postStore = async <T = { msg: string } & PostStoreApiData>({
  name,
  lon,
  lat,
  category,
  paymentMethod,
  isOpen,
}: PostStoreApiParams): Promise<T> => {
  const res = await apiClient.post(
    "/store",
    {
      name,
      coordinates: [lon, lat],
      category,
      paymentMethod,
      isOpen,
    },
    {
      withCredentials: true,
    },
  );
  return res.data;
};

export { postStore };
