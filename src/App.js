import { useState, useEffect } from "react";
import './App.css';
import { Container, Row, Col, Alert } from "react-bootstrap";

import Menu from "./components/menu/Menu";
import MovieCard from "./components/movieCard/MovieCard";
import BookingModal from "./components/bookingModal/BookingModal";
import Contacts from "./components/contacts/Contacts";
import MoviesPage from "./components/moviesPage/MoviesPage";
import WatchlistPage from "./components/watchlistPage/WatchlistPage";

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

  const [page, setPage] = useState(() => {
    return localStorage.getItem("currentPage") || "home";
  });

  useEffect(() => {
    localStorage.setItem("currentPage", page);
  }, [page]);
  
  //localstorage
  const [watchlist, setWatchlist] = useState(() => {
  const saved = localStorage.getItem("watchlist");
  return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
      }, 
    [watchlist]
  );
  
  
  //обробник навігації
  const handleNavigate = (pageName) => {
    setPage(pageName);
  };

  const handleBooking = (title) => {
    alert("Ви обрали фільм: " + title);
  };
  
  const removeFromWatchlist = (index) => {
    const newList = [...watchlist];
    newList.splice(index, 1);
    setWatchlist(newList);
  };

  const addToWatchlist = (movie) => {
  setWatchlist([...watchlist, movie]);
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
                <MovieCard   {...movie}
                  onBook={handleBooking}
                  onAddFavorite={addToWatchlist}
                />
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

      {page === "watchlist" && (
        <WatchlistPage
        items={watchlist}
        onRemove={removeFromWatchlist}
        />
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