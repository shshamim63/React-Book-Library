import { useMutation, useQueryClient } from "react-query";
import { deleteBook as deleteBookApi } from "../../services/apiBooks";
import toast from "react-hot-toast";

export const useDeleteBook = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteBook, isLoading: isDeleteing } = useMutation({
    mutationFn: deleteBookApi,
    onSuccess: () => {
      toast.success("Successfully deleted data");
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteBook, isDeleteing };
};
