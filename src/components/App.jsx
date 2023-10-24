import { useState } from "react";

import { Button } from "react-bootstrap";

import Header from "./Header";
import ModalContainer from "./ModalContainer";
import BookList from "./BookList";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [books, setBooks] = useState([]);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function addBook(book) {
    setBooks(book);
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
            <ModalContainer
              show={showModal}
              closeModal={closeModal}
              addBook={addBook}
            />
          </div>
        </div>
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
