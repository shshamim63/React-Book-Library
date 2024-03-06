import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "react-bootstrap";

import { BOOK_STATUS } from "../../utils/books";
import { useDeleteBook } from "./useDeleteBook";
import { useUpdateBookStatus } from "./useUpdateBook";

const Book = ({ book }) => {
  const { deleteBook, isDeleteing } = useDeleteBook();
  const { updateBookStatus, isUpdating } = useUpdateBookStatus();

  const isLoading = isDeleteing || isUpdating;

  const handleDeleteBook = () => {
    deleteBook(book.id);
  };

  const handleUpdateBookStatus = () => {
    const updateData = {
      ...book,
      status: book.status === BOOK_STATUS.length - 1 ? 0 : book.status + 1,
    };
    updateBookStatus({ id: book.id, data: updateData });
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
            disabled={isLoading}
            onClick={handleUpdateBookStatus}
          >
            <FontAwesomeIcon icon={faDice} /> Change status
          </button>
          <button
            type="button"
            className="btn btn-sm btn-danger deletebtn"
            disabled={isLoading}
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
