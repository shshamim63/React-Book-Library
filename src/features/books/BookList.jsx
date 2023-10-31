import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import BookTableHead from "./BookTableHead";
import BookTableBody from "./BookTableBody";

const BookList = () => {
  const books = useSelector((state) => state.books.bookList);

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
