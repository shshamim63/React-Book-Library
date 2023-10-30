import PropTypes from "prop-types";

import { Form } from "react-bootstrap";

import { BOOK_SELECT_OPTION } from "../utils/books";

const BookForm = ({ onHandleSubmit, dispatch }) => {
  function handleTextChange(e) {
    console.log(e.target.value);
    dispatch({
      type: "HANDLE_INPUT_TEXT",
      filed: e.target.name,
      payload: e.target.value,
    });
  }

  function handleOnSelect(e) {
    dispatch({
      type: "HANDLE_SELECT",
      payload: e.target.value,
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    onHandleSubmit();
  }

  return (
    <Form className="mt-1" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter Title"
          onChange={(e) => handleTextChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          name="author"
          placeholder="Enter Author's Name"
          onChange={(e) => handleTextChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control
          type="number"
          name="pages"
          min={0}
          placeholder="Enter book pages"
          onChange={(e) => handleTextChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Book Read Status</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleOnSelect(e)}
        >
          {BOOK_SELECT_OPTION.map((option) => (
            <option key={option.value} value={option.value}>
              {option.context}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  );
};

BookForm.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default BookForm;
