import { useState } from "react";

import { Button } from "react-bootstrap";

import Header from "./components/Header";
import ModalContainer from "./components/ModalContainer";

function App() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="main-container">
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <Button variant="primary" onClick={openModal}>
              Add book
            </Button>
            <ModalContainer show={showModal} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
