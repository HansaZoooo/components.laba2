import { Modal, Button } from "react-bootstrap";

const SuccessModal = ({ show, onHide, message }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Body className="text-center p-5">
        <div className="mb-4">
          <span style={{ fontSize: "5rem" }}>🎟️</span>
        </div>
        <h3 className="mb-3 text-success">Успішно!</h3>
        <p className="text-muted mb-4 fs-5">{message}</p>
        
        <Button variant="danger" size="lg" onClick={onHide} className="px-5">
          Чудово!
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default SuccessModal;