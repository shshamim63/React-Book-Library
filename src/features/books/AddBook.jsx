import { Button, Col, Modal, Row } from "react-bootstrap";

import CreateBookForm from "./CreateBookForm";
import { useState } from "react";

const AddBook = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        <Button variant="primary" onClick={handleOpen}>
          Add book
        </Button>
        <Modal
          show={show}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Book
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateBookForm />
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
};

export default AddBook;
