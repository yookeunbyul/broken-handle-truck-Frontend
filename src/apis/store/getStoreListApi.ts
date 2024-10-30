import apiClient from "../apiClient.ts";
import { IStore } from "../../types/store.ts";

interface StoreListApiParams {
  lat: number;
  lon: number;
  category?: string;
  storeName?: string;
}

interface StoreListApiData {
  stores: IStore[];
}

/**
 * 사용자 주변 가게 정보
 * @param lon 경도(longitude)
 * @param lat 위도(latitude)
 * @param category **optional** 카테고리
 * @param storeName **optional** 검색어(가게 이름)
 */
const getStoreList = async <T = { msg: string } & StoreListApiData>({
  lat,
  lon,
  category,
  storeName,
}: StoreListApiParams): Promise<T> => {
  const res = await apiClient.get<T>(`/store/all`, {
    params: {
      lat,
      lon,
      category,
      storeName,
    },
  });
  return res.data;
};

export { getStoreList };
