import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import CreateBookForm from "./CreateBookForm";
import { useState } from "react";

const AddBook = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Row>
      <Container className="d-flex justify-content-center mb-3">
        <Button variant="primary" onClick={handleOpen}>
          Add book
        </Button>
      </Container>
      <Col md={{ span: 4, offset: 4 }}>
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
            <CreateBookForm handleClose={handleClose} />
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
};

export default AddBook;
