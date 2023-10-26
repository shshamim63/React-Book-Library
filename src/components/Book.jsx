import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Stack } from "react-bootstrap";

const Book = ({ book }) => {
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
      <th scope="row">{book.id}</th>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.pages}</td>
      <td>{book.status}</td>
      <td>
        <Stack direction="horizontal" gap={1}>
          <button type="button" className="btn btn-sm btn-warning">
            <FontAwesomeIcon icon={faDice} /> Change status
          </button>
          <button type="button" className="btn btn-sm btn-danger deletebtn">
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
