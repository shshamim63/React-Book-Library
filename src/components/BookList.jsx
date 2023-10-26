import PropTypes from "prop-types";

import { Table } from "react-bootstrap";
import BookTableHead from "./BookTableHead";
import BookTableBody from "./BookTableBody";

const BookList = ({ books }) => {
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

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
