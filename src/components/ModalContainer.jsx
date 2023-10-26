import PropTypes from "prop-types";

import { Button, Modal } from "react-bootstrap";
import BookForm from "./BookForm";

const ModalContainer = ({ closeModal, show }) => {
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
        <BookForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary">Add</Button>
      </Modal.Footer>
    </Modal>
  );
};

ModalContainer.propTypes = {
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalContainer;
