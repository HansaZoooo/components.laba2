import { Card, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const MovieCard = ({ title, img, onBook, onAddFavorite }) => {

  const [showAlert, setShowAlert] = useState(false);

  const handleBooking = () => {
    if (onBook) {
      onBook(title);
    }
  };

  const handleAddFavorite = () => {
    if (onAddFavorite) {
      onAddFavorite({ title, img });
    }
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

          <Button
            variant="warning"
            className="mt-2"
            onClick={handleAddFavorite}
          >
            В обране
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