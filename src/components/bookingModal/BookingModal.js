import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const BookingModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Button className="custom-booking-btn" variant="primary" onClick={() => setShow(true)}>
          Відкрити бронювання
        </Button>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Бронювання квитка</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Ви хочете забронювати квиток 
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Закрити
          </Button>
          <Button variant="primary">
            Підтвердити
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingModal;