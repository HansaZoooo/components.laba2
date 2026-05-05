import { useState } from "react";
import './App.css';
import { Container, Row, Col, Alert } from "react-bootstrap";

import Menu from "./components/menu/Menu";
import MovieCard from "./components/movieCard/MovieCard";
import BookingModal from "./components/bookingModal/BookingModal";
import Contacts from "./components/contacts/Contacts";
import MoviesPage from "./components/moviesPage/MoviesPage";
import MoviesPageCard from "./components/moviesPageCard/MoviePageCard";

import avatarImg from "./assets/avatar.jpg";
import inceptionImg from "./assets/inception.jpg";
import interstellarImg from "./assets/interstellar.jpg";

//масив фільмів
const movies = [
  { id: 1, title: "Avatar", img: avatarImg },
  { id: 2, title: "Inception", img: inceptionImg },
  { id: 3, title: "Interstellar", img: interstellarImg }
];

function App() {

  //яка сторінка зараз
  const [page, setPage] = useState("home");

  //обробник навігації
  const handleNavigate = (pageName) => {
    setPage(pageName);
  };

  const handleBooking = (title) => {
    alert("Ви обрали фільм: " + title);
  };

 return (
  <>
    <Menu onNavigate={handleNavigate} />

    <Container className="mt-4">
      {page === "home" && (
        <>
          <Alert variant="success">
            Вітаємо у системі бронювання кіно!
          </Alert>

          <Row className="justify-content-center">
            {movies.map((movie, index) => (
              <Col md="auto" key={index}>
                <MovieCard {...movie} onBook={handleBooking} />
              </Col>
            ))}
          </Row>

          <div className="mt-4">
            <BookingModal />
          </div>
        </>
      )}

      {page === "movies" && (
        <MoviesPage movies={movies} />
      )}

      {page === "contacts" && (
        <Contacts
          phone="+380991562666"
          email="heitota@gmail.com"
          address="м. Івано-Франківськ"
        />
      )}

    </Container>
  </>
);
}

export default App;