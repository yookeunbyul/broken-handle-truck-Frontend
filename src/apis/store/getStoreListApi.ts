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

const getStoreList = async <T = { msg: string } & StoreListApiData>({
  lat,
  lon,
  category,
  storeName,
}: StoreListApiParams): Promise<T> => {
  const res = await apiClient.get<T>(
    `/store/all?lat=${lat}&lon=${lon}${category ? `&category=${category}` : ""}${storeName ? `&storeName=${storeName}` : ""}`,
  );
  return res.data;
};

export { getStoreList };
