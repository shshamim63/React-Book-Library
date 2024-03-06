import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { updateBookStatus as updateBookStatusApi } from "../../services/apiBooks";

export const useUpdateBookStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: updateBookStatus, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, data }) => updateBookStatusApi(id, data),
    onSuccess: () => {
      toast.success("Status updated");
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
  });

  return { updateBookStatus, isUpdating };
};
