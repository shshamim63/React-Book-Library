import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "react-bootstrap";

import { BOOK_STATUS } from "../../utils/books";
import { useDeleteBook } from "./useDeleteBook";

const Book = ({ book }) => {
  const { deleteBook, isDeleteing } = useDeleteBook();

  const handleDeleteBook = () => {
    deleteBook(book.id);
  };

  return (
    <tr
      className={
        book.status === 0
          ? "bg-danger"
          : book.status === 1
          ? "bg-success"
          : "bg-info"
      }
    >
      <th className="bg-transparent" scope="row">
        {book.id}
      </th>
      <td className="bg-transparent">{book.title}</td>
      <td className="bg-transparent">{book.author}</td>
      <td className="bg-transparent">{book.pages}</td>
      <td className="bg-transparent">{BOOK_STATUS[book.status]}</td>
      <td className="bg-transparent">
        <Stack direction="horizontal" gap={1}>
          <button
            type="button"
            className="btn btn-sm btn-warning"
            disabled={isDeleteing}
          >
            <FontAwesomeIcon icon={faDice} /> Change status
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger deletebtn"
            disabled={isDeleteing}
            onClick={handleDeleteBook}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </Stack>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
  }),
};

export default Book;
