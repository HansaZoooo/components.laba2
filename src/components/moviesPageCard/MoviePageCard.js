import { Card, Button, Form } from "react-bootstrap";

const MoviePageCard = ({ 
  movie, 
  selectedId, 
  setSelectedId, 
  tickets, 
  handleChange, 
  handleBooking 
}) => {
  
  const { id, img, title } = movie;

  return (
    <Card 
      className={`mb-4 movie-card-custom ${selectedId === id ? "selected" : ""}`}
      onClick={() => setSelectedId(id)}
    >
      <Card.Img 
        src={img} 
        className="movie-img"
      />

      <Card.Body>
        <Card.Title className="movie-title">
          {title}
        </Card.Title>

        {selectedId === id && (
          <span className="badge bg-success mb-2 d-inline-block">Обрано</span>
        )}

        <Form.Group className="mt-2">
          <Form.Control
            type="number"
            min="1"
            placeholder="К-сть"
            value={tickets[id] || ""}
            onChange={(e) => handleChange(id, e.target.value)}
          />
        </Form.Group>

        <Button
          variant="success"
          size="sm"
          className="movie-btn mt-2"
          onClick={(e) => {
            e.stopPropagation(); 
            handleBooking(movie);
          }}
        >
          Забронювати
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MoviePageCard;