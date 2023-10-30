import { useState } from "react";
import { Button } from "react-bootstrap";

import { useSelector } from "react-redux";

import Header from "./Header";
import ModalContainer from "./ModalContainer";
import BookList from "./BookList";

function App() {
  const books = useSelector((state) => state.books.bookList);
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
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
