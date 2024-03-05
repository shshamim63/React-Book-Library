import PropTypes from "prop-types";

import { Form } from "react-bootstrap";

import { BOOK_STATUS } from "../../utils/books";

const BookForm = () => {
  return (
    <Form className="mt-1">
      <Form.Group className="mb-2">
        <Form.Label>Book Name</Form.Label>
        <Form.Control type="text" name="title" placeholder="Enter Title" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          name="author"
          placeholder="Enter Author's Name"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Pages</Form.Label>
        <Form.Control
          type="number"
          name="pages"
          min={0}
          placeholder="Enter book pages"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Book Read Status</Form.Label>
        <Form.Select aria-label="Default select example">
          {BOOK_STATUS.map((option, index) => (
            <option key={index} value={index}>
              {option}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

BookForm.propTypes = {
  state: PropTypes.object.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default BookForm;
