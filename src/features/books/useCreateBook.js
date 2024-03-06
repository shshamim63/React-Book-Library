import { useMutation, useQueryClient } from "react-query";

import { createBooks as createCabinApi } from "../../services/apiBooks";
import toast from "react-hot-toast";

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  const { mutate: createBook, isLoading: isCreating } = useMutation({
    mutationFn: createCabinApi,
    onSuccess: () => {
      toast.success("Successfully created new book");
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { createBook, isCreating };
};
