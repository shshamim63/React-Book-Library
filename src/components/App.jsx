import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Header from "./Header";
import ModalContainer from "./ModalContainer";
import BookList from "../features/books/BookList";
import { useDispatch } from "react-redux";
import { load } from "../features/books/BookSlice";

function App() {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    dispatch(load());
  }, [dispatch]);

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
        <BookList />
      </div>
    </div>
  );
}

export default App;
