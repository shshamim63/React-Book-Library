import { Form } from "react-bootstrap";

import { BOOK_SELECT_OPTION } from "../utils/books";

const BookForm = () => {
  return (
    <Form className="">
      <Form.Group className="mb-2">
        <Form.Control type="text" placeholder="Enter book title" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control type="text" placeholder="Enter book author name" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Control type="number" min={0} placeholder="Enter book pages" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Book Read Status</Form.Label>
        <Form.Select aria-label="Default select example">
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

export default BookForm;
