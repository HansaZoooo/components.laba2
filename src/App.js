import { useState, useEffect } from "react";
import './App.css';
import { Container, Row, Col, Alert, Modal, Button} from "react-bootstrap";

import Menu from "./components/menu/Menu";
import MovieCard from "./components/movieCard/MovieCard";
import Contacts from "./components/contacts/Contacts";
import WatchlistPage from "./components/watchlistPage/WatchlistPage";
import SeatPicker from "./components/seatPicker/SeatPicker";
import AboutCinema from "./components/aboutCinema/AboutCinema.js";
import AuthModal from "./components/authModal/AuthModal.js";
import SuccessModal from "./components/successModal/SuccessModal.js";

import avatarImg from "./assets/avatar.jpg";
import inceptionImg from "./assets/inception.jpg";
import interstellarImg from "./assets/interstellar.jpg";
import batmanImg from "./assets/batman.jpg";
import jockerImg from "./assets/jocker.jpg";
import titanicImg from "./assets/titanic.jpg";

// масив фільмів
const movies = [
  {
    id: 1,
    title: "Avatar",
    img: avatarImg,
    rating: 8.5,
    price: 220,
    date: "2026-05-01",
    hall: "Зал Vip",
    description: "Епічна науково-фантастична історія про планету Пандора, де людство намагається добути цінні ресурси, вступаючи в конфлікт із корінним народом На’ві. Фільм поєднує технологічний прогрес, природу та питання виживання цивілізацій."
  },
  {
    id: 2,
    title: "Inception",
    img: inceptionImg,
    rating: 9.1,
    price: 250,
    date: "2026-04-15",
    hall: "Зал Comfort",
    description: "Інтелектуальний трилер про крадіжку ідей через проникнення у сни. Команда спеціалістів занурюється у багаторівневу структуру підсвідомості, де межа між реальністю та сном поступово зникає."
  },
  {
    id: 3,
    title: "Interstellar",
    img: interstellarImg,
    rating: 9.3,
    price: 270,
    date: "2026-05-10",
    hall: 'Зал "Сімейний"',
    description: "Космічна одіссея про подорож крізь червоточину для пошуку нового дому для людства. Фільм досліджує теми часу, гравітації, любові та виживання цивілізації."
  },
  {
    id: 4,
    title: "Titanic",
    img: titanicImg,
    rating: 8.0,
    price: 180,
    date: "2026-03-20",
    hall: "Зал Comfort",
    description: "Романтична історія на фоні трагедії легендарного лайнера Титанік. Кохання двох людей з різних соціальних світів розгортається на тлі катастрофи, яка змінює історію."
  },
  {
    id: 5,
    title: "Joker",
    img: jockerImg,
    rating: 8.8,
    price: 230,
    date: "2026-02-11",
    hall: "Зал Vip",
    description: "Психологічна драма про становлення Джокера — людини, яку суспільство ігнорує та відштовхує. Поступова трансформація в символ хаосу та анархії."
  },
  {
    id: 6,
    title: "The Batman",
    img: batmanImg,
    rating: 9.7,
    price: 260,
    date: "2026-01-05",
    hall: 'Зал "Сімейний"',
    description: "Темна історія про Бетмена на початку його кар’єри як захисника Ґотема. Він розслідує серію злочинів і стикається з корупцією та загадковими ворогами."
  }
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
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showSeats, setShowSeats] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [selectedMovieDesc, setSelectedMovieDesc] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

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

  const handleSeatBook = (seats) => {
    alert(
      `Ви забронювали місця ${seats.join(", ")} на фільм ${selectedMovie}`
    );

    setShowSeats(false);
  };

  const handleShowDescription = (movie) => {
    setSelectedMovieDesc(movie);
    setShowDescription(true);
  };
  
  const currentMovie = movies.find(m => m.id === selectedMovieId);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Menu 
        currentUser={currentUser}
        onNavigate={setCurrentPage}
        onLoginClick={() => setShowAuthModal(true)}
        onLogout={handleLogout}
      />

      <main className="flex-grow-1">
        <Container className="mt-4">
          
          {currentPage === "home" && (
            <>
              <div style={{ paddingTop: '70px' }}> 
                <Alert variant="success" className="mb-3">
                  Вітаємо у системі бронювання кіно!
                </Alert>
              </div>

              <div className="d-flex justify-content-end align-items-center mb-3">
                <span className="me-2 fw-bold">Відсортувати за:</span>
                <select
                  className="form-select w-auto"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <option value="new">Новизною</option>
                  <option value="old">Старизною</option>
                </select>
              </div>

              <div className="carousel-wrapper">
                <button 
                  className="arrow-btn left" 
                  onClick={() => setCurrentIndex(prev => Math.max(prev - 1, 0))}
                >
                  ❮
                </button>

                <Row className="justify-content-center g-4">
                  {sortedMovies.slice(currentIndex, currentIndex + 4).map((movie) => (
                    <Col md="auto" key={movie.id} className="mb-4">
                      <MovieCard
                        {...movie}
                        onShowDescription={() => handleShowDescription(movie)}
                        onBook={(title, id) => {
                          setSelectedMovie(title);
                          setSelectedMovieId(id);
                          setShowSeats(true);
                        }}
                      />
                    </Col>
                  ))}
                </Row>

                <button 
                  className="arrow-btn right" 
                  onClick={() => setCurrentIndex(prev => Math.min(prev + 1, sortedMovies.length - 4))}
                >
                  ❯
                </button>
              </div>
            </>
          )}

            {currentPage === "watchlist" && (
              <WatchlistPage
                movies={movies}                   
                onBook={(title, id) => {
                  setSelectedMovie(title);
                  setSelectedMovieId(id);
                  setShowSeats(true);
                }}
              />
            )}
          {currentPage === "contacts" && (
            <Contacts
              phone="+380991562666"
              email="heitota@gmail.com"
              address="м. Івано-Франківськ"
            />
          )}

          {currentPage === "about" && <AboutCinema />}

          {/* Модальні вікна */}
          <Modal
            show={showDescription}
            onHide={() => setShowDescription(false)}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>{selectedMovieDesc?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedMovieDesc?.description}</p>
              <strong>Рейтинг:</strong> {selectedMovieDesc?.rating}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDescription(false)}>
                Закрити
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal 
            show={showSeats} 
            onHide={() => setShowSeats(false)} 
            size="xl" 
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Бронювання квитків — {selectedMovie}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             <SeatPicker 
                onBook={handleSeatBook} 
                movieId={selectedMovieId} 
                // Знаходимо назву залу у твоєму масиві фільмів
                hallName={movies.find(m => m.id === selectedMovieId)?.hall}
                maxSeats={6}
              />
            </Modal.Body>
          </Modal>

          <AuthModal 
            show={showAuthModal} 
            onHide={() => setShowAuthModal(false)} 
            onLoginSuccess={handleLoginSuccess} 
          />

        </Container>
      </main>

      <footer className="bg-dark text-light text-center p-4 mt-5">
        <h4>Про нас</h4>
        <p>NeoCinema — сучасна система бронювання квитків у кінотеатр.</p>
        <p className="mb-0">© 2026 NeoCinema</p>
      </footer>
    </div>
  );
  }
  
  export default App;