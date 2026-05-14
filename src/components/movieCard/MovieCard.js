import { Card, Button, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";

const MovieCard = ({ id, title, img, rating, onBook, watchlist, onShowDescription, onToggleFavorite, price }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const found = watchlist?.find(item => item.title === title);
    setLiked(!!found);
  }, [watchlist, title]);

  const handleBooking = () => {
    if (onBook) {
      onBook(title, id);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  const handleLike = () => {
    if (onToggleFavorite) {
      onToggleFavorite({ id, title, img, rating, price });
    }
  };

  return (
    <>
      <Card className="movie-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          ⭐ Рейтинг: {rating}
          </Card.Text>

          <Card.Text>
            💰 Ціна: {price} грн
          </Card.Text>
          
          <Button 
            variant="danger" 
            onClick={() => onBook(title, id)}   // ← передаємо id
          >
            Купити квиток
          </Button>

        <Button
          variant="info"
          className="mt-2"
          onClick={onShowDescription}
        >
          Переглянути опис
        </Button>
          <span
            onClick={handleLike}
            style={{
              cursor: "pointer",
              fontSize: "24px",
              marginLeft: "10px"
            }}
          >
            {liked ? "❤️" : "🤍"}
          </span>

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