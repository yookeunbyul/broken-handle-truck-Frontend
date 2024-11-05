import { create } from "zustand";

interface MapLocationState {
  lat: number | null;
  lon: number | null;
  setLocation: (lon: number, lat: number) => void;
}

const useMapLocationStore = create<MapLocationState>((set) => ({
  lon: null,
  lat: null,
  setLocation: (lon, lat) => set((state) => ({ ...state, lon, lat })),
}));

export default useMapLocationStore;

// longitude, latitude
