import Header from "../ui/Header";
import BookList from "../features/books/BookList";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import AddBook from "../features/books/AddBook";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main-container">
        <div className="container">
          <Header />
          <AddBook />
          <BookList />
        </div>
      </div>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-300)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
