import { Card, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const MovieCard = ({ title, img }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleBooking = () => {
    setShowAlert(true);
    
    // Автоматично приховуємо алерт через 4 секунди
    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  return (
    <>
      <Card className="movie-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Button variant="primary" onClick={handleBooking}>
            Забронювати
          </Button>
        </Card.Body>
      </Card>

      <Alert 
        show={showAlert} 
        variant="success" 
        className="mt-3"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        <strong>Бронювання успішне!</strong><br />
        Ви забронювали квиток на фільм: <strong>{title}</strong>
      </Alert>
    </>
  );
};

export default MovieCard;