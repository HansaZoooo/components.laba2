import './App.css';
import { Container, Row, Col, Alert } from "react-bootstrap";
import Menu from "./components/menu/Menu";
import MovieCard from "./components/movieCard/MovieCard.js";
import BookingModal from "./components/bookingModal/BookingModal.js";
import avatarImg from "./assets/avatar.jpg";
import inceptionImg from "./assets/inception.jpg";
import interstellarImg from "./assets/interstellar.jpg";

function App() {
  return (
    <>
      <Menu />
      <Container className="mt-4">
        <Alert variant="success">
          Вітаємо у системі бронювання кіно!
        </Alert>

        <Row className="justify-content-center">
          <Col md="auto">
            <MovieCard
              title="Avatar"
              img={avatarImg}
            />
          </Col>

          <Col md="auto">
            <MovieCard
              title="Inception"
              img={inceptionImg}
            />
          </Col>

          <Col md="auto">
            <MovieCard
              title="Interstellar"
              img={interstellarImg}
            />
          </Col>
        </Row>

        <div className="mt-4">
          <BookingModal />
        </div>

      </Container>
    </>
  );
}


export default App;