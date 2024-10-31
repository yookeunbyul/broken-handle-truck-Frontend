import type { BaseApiResponse } from "./response";

interface IStore {
  _id: string;
  name: string;
  ownerId: string;
  coordinates: [number, number];
  isOpen: boolean;
  category: string;
  paymentMethod: string[];
  createdAt: string;
  updatedAt: string;
}

// GET store/all
interface StoreListApiParams {
  lat: number;
  lon: number;
  category?: string;
  storeName?: string;
}

interface StoreListApiResponse extends BaseApiResponse {
  stores: IStore[];
}

// GET store/:storeId, GET store, POST store
interface StoreApiResponse extends BaseApiResponse {
  store: IStore;
  comments: object[]; // CommentType 받은 이후 수정 필요
}

// POST store
interface PostStoreApiParams {
  name: string;
  lon: number;
  lat: number;
  category: string;
  paymentMethod: string[];
  isOpen: boolean;
}

interface PostStoreApiRequest extends Omit<PostStoreApiParams, "lon" | "lat"> {
  coordinates: [number, number];
}

export type {
  IStore,
  StoreListApiParams,
  StoreListApiResponse,
  StoreApiResponse,
  PostStoreApiParams,
  PostStoreApiRequest,
};
