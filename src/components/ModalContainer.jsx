import PropTypes from "prop-types";
import { useReducer } from "react";
import { useDispatch } from "react-redux";

import { Button, Modal } from "react-bootstrap";

import { add } from "../features/books/BookSlice";

import BookForm from "../features/books/BookForm";

const initialFormState = {
  title: "",
  author: "",
  pages: 0,
  status: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_TEXT":
      return { ...state, [action.field]: action.payload };
    case "HANDLE_SELECT":
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

const ModalContainer = ({ closeModal, show }) => {
  const [state, dispatch] = useReducer(reducer, initialFormState);

  const reduxDispatch = useDispatch();

  function onHandleSubmit() {
    closeModal();
    reduxDispatch(add(state));
  }

  return (
    <Modal
      show={show}
      onHide={closeModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookForm
          onHandleSubmit={onHandleSubmit}
          dispatch={dispatch}
          state={state}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={onHandleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalContainer.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalContainer;
