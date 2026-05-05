import "./MoviesPage.css";

import { Row, Col, Card, Button, Form, Badge } from "react-bootstrap";
import { useState } from "react";
import MoviePageCard from "../moviesPageCard/MoviePageCard";


const MoviesPage = (props) => {

  const [tickets, setTickets] = useState({});
  const [selectedId, setSelectedId] = useState(null); 

  const handleChange = (id, value) => {
    setTickets({
      ...tickets,
      [id]: value
    });
  };

  const handleBooking = (movie) => {
    const count = tickets[movie.id] || 0;
    alert(`Ви забронювали ${count} квитків на ${movie.title}`);
  };

  return (
    <>
      <h2 className="mb-4 text-center">Актуальні фільми</h2>

      <Row className="movies-container">
        {props.movies.map((movie) => (
        <Col md={3} sm={4} xs={6} key={movie.id}>
          <MoviePageCard
            movie={movie}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            tickets={tickets}
            handleChange={handleChange}
            handleBooking={handleBooking} 
          />
        </Col>
      ))}
    </Row>
    </>
  );
};

export default MoviesPage;