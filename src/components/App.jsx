import { Button } from "react-bootstrap";

import Header from "./Header";
import ModalContainer from "./ModalContainer";
import BookList from "../features/books/BookList";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";

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
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <Button variant="primary">Add book</Button>
              <ModalContainer />
            </div>
          </div>
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
