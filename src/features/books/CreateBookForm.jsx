import PropTypes from "prop-types";

import { Button, Form } from "react-bootstrap";

import { BOOK_STATUS } from "../../utils/books";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import { useCreateBook } from "./useCreateBook";

const CreateBookForm = ({ handleClose }) => {
  const { register, handleSubmit } = useForm();
  const { createBook, isCreating } = useCreateBook();

  const onSubmit = (data) => {
    createBook(data, { onSuccess: () => { } });
  };

  return (
    <Form className="mt-1" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Book Name">
        <Form.Control
          type="text"
          {...register("Book Title", { required: true })}
          placeholder="Book Title"
        />
      </FormRow>
      <FormRow label="Author Name">
        <Form.Control
          type="text"
          {...register("author", { required: true })}
          placeholder="Author's Name"
        />
      </FormRow>
      <FormRow label="Pages">
        <Form.Control
          type="number"
          min={0}
          {...register("pages", { min: 0 })}
        />
      </FormRow>
      <FormRow label="Book Read Status">
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
      </FormRow>
      <FormRow>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" disabled={isCreating} type="submit">
          Add
        </Button>
      </FormRow>
    </Form>
  );
};

CreateBookForm.propTypes = {
  state: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default CreateBookForm;
