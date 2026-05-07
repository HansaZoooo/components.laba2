import "./MoviesPage.css";
import SeatPicker from "../seatPicker/SeatPicker";

import { Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import { useState } from "react";


const MoviesPage = (props) => {

  const [tickets, setTickets] = useState({});
  const [selectedId, setSelectedId] = useState(null); 
  const [selectedMovie, setSelectedMovie] = useState("");
  const [showSeats, setShowSeats] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleChange = (id, value) => {
    setTickets({
      ...tickets,
      [id]: value
    });
  };

  const handleBooking = (movie) => {
    setSelectedMovie(movie.title);
    setSelectedMovieId(movie.id);
    setShowSeats(true);
  };
  
  const handleSeatBook = (seats) => {
    alert(
      `Ви забронювали місця ${seats.join(", ")} на ${selectedMovie}`
    );

    setShowSeats(false);
  };

  return (
    <>
      <h2 className="mb-4 text-center">Актуальні фільми</h2>

      <Row className="movies-container">
        {props.movies.map((movie) => (
        <Col md={3} sm={4} xs={6} key={movie.id}>
      
      <Card 
        className={`mb-4 movie-card-custom ${selectedId === movie.id ? "selected" : ""}`}
        onClick={() => setSelectedId(movie.id)}
      >
        <Card.Img 
          src={movie.img} 
          className="movie-img"
        />

        <Card.Body>
          <Card.Title className="movie-title">
            {movie.title}
          </Card.Title>

          {selectedId === movie.id && (
            <span className="badge bg-success">Обрано</span>
          )}

          <Form.Group className="mt-2">
            <Form.Control
              type="number"
              min="1"
              placeholder="К-сть"
              value={tickets[movie.id] || ""}
              onChange={(e) =>
                handleChange(movie.id, e.target.value)
              }
            />
          </Form.Group>

          <Button
            variant="success"
            size="sm"
            className="movie-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleBooking(movie);
            }}
          >
            Забронювати
          </Button>

        </Card.Body>
      </Card>
    </Col>
    ))}
    </Row>

    {showSeats && (
      <div className="mt-4 p-4 border rounded text-center">

        <h4 className="mb-3">
          Фільм: {selectedMovie}
        </h4>

        <SeatPicker
          onBook={handleSeatBook}
          maxSeats={tickets[selectedMovieId] || 1}
        />
      </div>
    )}
    </>
  );
};

export default MoviesPage;