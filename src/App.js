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
  { id: 1, title: "Avatar", img: avatarImg, date: "2026-05-01" },
  { id: 2, title: "Inception", img: inceptionImg, date: "2026-04-15"},
  { id: 3, title: "Interstellar", img: interstellarImg, date: "2026-05-10"}
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

  const [sortOrder, setSortOrder] = useState("new");

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

const toggleFavorite = (movie) => {
  const exists = watchlist.find(item => item.title === movie.title);

  let updated;

  if (exists) {
    updated = watchlist.filter(item => item.title !== movie.title);
  } else {
    updated = [...watchlist, movie];
  }

  setWatchlist(updated);
  localStorage.setItem("watchlist", JSON.stringify(updated));
};

const sortedMovies = [...movies].sort((a, b) => {
  if (sortOrder === "new") {
    return new Date(b.date) - new Date(a.date);
  } else {
    return new Date(a.date) - new Date(b.date);
  }
});

 return (
  <>
    <Menu onNavigate={handleNavigate} />

    <Container className="mt-4">
      {page === "home" && (
        <>
          <Alert variant="success">
            Вітаємо у системі бронювання кіно!
          </Alert>

      <div className="d-flex justify-content-end align-items-center">
  
      <span className="me-2 fw-bold">
        Відсортувати за:
      </span>

      <select
        className="form-select w-auto"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="new">Новизною</option>
        <option value="old">Старизною</option>
      </select>

</div>
      
          <Row className="justify-content-center">
            {sortedMovies.map((movie, index) => (
              <Col md="auto" key={index}>
              <MovieCard
                {...movie}
                onBook={handleBooking}
                watchlist={watchlist}
                onToggleFavorite={toggleFavorite}
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