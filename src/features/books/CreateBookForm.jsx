import PropTypes from "prop-types";

import { Button, Form, Modal } from "react-bootstrap";

import { BOOK_STATUS } from "../../utils/books";
import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import { useCreateBook } from "./useCreateBook";

const CreateBookForm = ({ handleClose }) => {
  const { register, handleSubmit, reset, formState } = useForm();

  const { errors } = formState;

  const { createBook, isCreating } = useCreateBook();

  const onSubmit = (data) => {
    createBook(data, {
      onSuccess: () => {
        reset();
        handleClose();
      },
    });
  };

  return (
    <Form className="mt-1" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Book Name" error={errors?.title?.message}>
        <Form.Control
          type="text"
          name="title"
          {...register("title", { required: "Title is required" })}
          placeholder="Book Title"
        />
      </FormRow>
      <FormRow label="Author Name" error={errors?.author?.message}>
        <Form.Control
          type="text"
          name="author"
          {...register("author", { required: "Author name is required" })}
          placeholder="Author's Name"
        />
      </FormRow>
      <FormRow label="Pages" error={errors?.pages?.message}>
        <Form.Control
          type="number"
          name="pages"
          defaultValue={0}
          min={0}
          {...register("pages", {
            min: { value: 0, message: "Pages must have positive number" },
          })}
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
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" disabled={isCreating} type="submit">
          Add
        </Button>
      </Modal.Footer>
    </Form>
  );
};

CreateBookForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CreateBookForm;
