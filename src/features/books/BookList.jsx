import { Table, Spinner } from "react-bootstrap";
import BookTableHead from "./BookTableHead";
import BookTableBody from "./BookTableBody";
import { useBooks } from "./useBooks";

const BookList = () => {
  const { isLoading, books, error } = useBooks();
  if (isLoading) {
    return <Spinner animation="grow" />;
  }

  if (error) {
    return <p>failed {error.message}</p>;
  }
  if (!books.length) {
    return (
      <section className="card my-4">
        <p className="m-auto">Please add some books</p>
      </section>
    );
  }

  return (
    <section className="card my-4">
      <div>
        <Table>
          <BookTableHead />
          <BookTableBody books={books} />
        </Table>
      </div>
    </section>
  );
};

export default BookList;
