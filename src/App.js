import { useState } from "react";
import './App.css';
import { Container, Row, Col, Alert } from "react-bootstrap";

import Menu from "./components/menu/Menu";
import MovieCard from "./components/movieCard/MovieCard";
import BookingModal from "./components/bookingModal/BookingModal";
import Contacts from "./components/contacts/Contacts";

import avatarImg from "./assets/avatar.jpg";
import inceptionImg from "./assets/inception.jpg";
import interstellarImg from "./assets/interstellar.jpg";

//масив фільмів
const movies = [
  { title: "Avatar", img: avatarImg },
  { title: "Inception", img: inceptionImg },
  { title: "Interstellar", img: interstellarImg }
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
        {page === "contacts" && (
          <Contacts
            phone="+380991562666"
            email="heitota@gmail.com"
            address="м. Івано-Франківськ"
          />
        )}

        {(page === "home" || page === "movies") && (
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

      </Container>
    </>
  );
}

export default App;