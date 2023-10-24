import PropTypes from "prop-types";

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
        <button type="button" className="btn btn-sm btn-warning statusbtn">
          <i className="bi bi-dice-4-fill"></i> Change status
        </button>
        <button type="button" className="btn btn-sm btn-danger deletebtn">
          <i className="bi bi-trash3"></i>
        </button>
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
