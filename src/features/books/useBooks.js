import { useQuery } from "react-query";
import { getBooks } from "../../services/apiBooks";

export function useBooks() {
  const {
    isLoading,
    data: books,
    error,
  } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  return { isLoading, books, error };
}
