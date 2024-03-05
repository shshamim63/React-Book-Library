import PropTypes from "prop-types";

import { Form } from "react-bootstrap";

import { BOOK_STATUS } from "../../utils/books";
import { useForm } from "react-hook-form";

const BookForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form className="mt-1" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-2">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Book Title"
          {...register("title", { required: true })}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          {...register("author", { required: true })}
          placeholder="Author's Name"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Pages</Form.Label>
        <Form.Control type="number" {...register("pages", { min: 0 })} />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Book Read Status</Form.Label>
        <Form.Select
          aria-label="Default select example"
          {...register("status")}
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
