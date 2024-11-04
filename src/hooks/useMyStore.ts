import { useQuery } from "@tanstack/react-query";
import { getMyStore } from "../apis/store.ts";
import type { StoreApiResponse } from "../types/store";

export default function useMyStore() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myStore"],
    queryFn: getMyStore,
    select: (data: StoreApiResponse) => ({
      store: data.store,
      comments: data.comments,
    }),
  });

  return { data, isLoading, refetch };
}
