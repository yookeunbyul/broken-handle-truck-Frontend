import { http } from "./apiClient.ts";
import type { BaseApiResponse } from "../types/response";
import type {
  PostStoreApiParams,
  PostStoreApiRequest,
  StoreApiResponse,
  StoreListApiParams,
  StoreListApiResponse,
} from "../types/store";

/**
 * 사용자 주변 가게 정보
 * @param lon 경도(longitude)
 * @param lat 위도(latitude)
 * @param category **optional** 카테고리
 * @param storeName **optional** 검색어(가게 이름)
 */
export const getStoreList = async ({
  lat,
  lon,
  category,
  storeName,
}: StoreListApiParams): Promise<StoreListApiResponse> =>
  await http.get<StoreListApiResponse, StoreListApiParams>(`/store/all`, {
    lat,
    lon,
    category,
    storeName,
  });

/**
 * 특정 매장 정보
 * @param id storeId
 */
export const getStore = async (id: string): Promise<StoreApiResponse> =>
  await http.get<StoreApiResponse>(`/store/${id}`);

/**
 * 등록한 매장(내 가게) 정보
 */
export const getMyStore = async (): Promise<StoreApiResponse> =>
  await http.get<StoreApiResponse>(`/store`);

/**
 * 매장 등록 / 수정
 * @param name 가게 이름
 * @param lon 경도(longitude)
 * @param lat 위도(latitude)
 * @param category 카테고리
 * @param paymentMethod 결제 방식
 * @param isOpen 오픈 상태 변경
 */
export const postStore = async ({
  name,
  lon,
  lat,
  category,
  paymentMethod,
  isOpen,
}: PostStoreApiParams): Promise<StoreApiResponse> =>
  await http.post<StoreApiResponse, PostStoreApiRequest>("/store", {
    name,
    coordinates: [lon, lat],
    category,
    paymentMethod,
    isOpen,
  });

/**
 * 매장 삭제
 */
export const deleteStore = async () =>
  await http.delete<BaseApiResponse>("/store");
