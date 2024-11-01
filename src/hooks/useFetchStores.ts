import { useQuery } from "@tanstack/react-query";
import { getStoreList } from "../apis/store.ts";
import useStoresStore from "../store/storesStore.ts";
import { StoreListApiResponse } from "../types/store";

export default function useFetchStores() {
  const { category, name, lat, lon } = useStoresStore();
  const { data, isLoading } = useQuery({
    queryKey: ["stores", { category, name, lat, lon }],
    queryFn: () => getStoreList({ category, name, lat, lon }),
    select: (data: StoreListApiResponse) => data.stores,
  });

  return { data, isLoading };
}
