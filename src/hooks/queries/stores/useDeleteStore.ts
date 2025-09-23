import { PUBLIC_URL } from "@/config/url.config";
import { storeService } from "@/services/store.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";
import toast from "react-hot-toast";

export function useDeleteStore() {
  const params = useParams<{ storeId: string }>();
  const router = useRouter();

  const { data: store } = useQuery({
    queryKey: ["store", params.storeId],
    queryFn: () => storeService.getById(params.storeId),
  });

  const { mutate: deleteStore, isPending: isLoadingDelete } = useMutation({
    mutationKey: ["delete store"],
    mutationFn: () => storeService.delete(params.storeId),
    onSuccess(store) {
      toast.success("Store deleted");
      router.push(PUBLIC_URL.home());
    },
    onError() {
      toast.error("Error during delete");
    },
  });

  return useMemo(
    () => ({ deleteStore, isLoadingDelete }),
    [deleteStore, isLoadingDelete]
  );
}
