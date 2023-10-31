import PropTypes from "prop-types";

import Book from "./Book";

const BookTableBody = ({ books }) => {
  return (
    <tbody>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </tbody>
  );
};

BookTableBody.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookTableBody;
