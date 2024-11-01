import { StoreListApiParams } from "../types/store";
import { create } from "zustand";

interface StoresState extends StoreListApiParams {
  setCategory: (category: StoreListApiParams["category"]) => void;
  setSearchTerm: (name: StoreListApiParams["name"]) => void;
  setLocation: (lon: number, lat: number) => void;
}

const defaultCoord = { lat: 37.5563, lon: 126.99581 };
// [126.99581, 37.5563]

const useStoresStore = create<StoresState>((set) => ({
  category: "",
  name: "",
  ...defaultCoord,
  setCategory: (category) => set((state) => ({ ...state, category })),
  setSearchTerm: (name) => set((state) => ({ ...state, name })),
  setLocation: (lon, lat) => set((state) => ({ ...state, lon, lat })),
}));

export default useStoresStore;
