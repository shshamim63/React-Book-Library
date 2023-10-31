import PropTypes from "prop-types";

import { Form } from "react-bootstrap";

import { BOOK_STATUS } from "../../utils/books";

const BookForm = ({ onHandleSubmit, dispatch, state }) => {
  function handleTextChange(e) {
    dispatch({
      type: "HANDLE_INPUT_TEXT",
      field: e.target.name,
      payload:
        e.target.name === "pages" ? Number(e.target.value) : e.target.value,
    });
  }

  function handleOnSelect(e) {
    dispatch({
      type: "HANDLE_SELECT",
      payload: Number(e.target.value),
    });
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    onHandleSubmit();
  }

  return (
    <Form className="mt-1" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter Title"
          value={state.title}
          onChange={(e) => handleTextChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          name="author"
          value={state.author}
          placeholder="Enter Author's Name"
          onChange={(e) => handleTextChange(e)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Pages</Form.Label>
        <Form.Control
          type="number"
          name="pages"
          min={0}
          value={state.pages}
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
