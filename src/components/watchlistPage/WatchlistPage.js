import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getUserFavorites, removeFromFavorites, getCurrentUser } from "../../utils/authUtils";

const WatchlistPage = ({ movies = [], onBook }) => {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);

    if (currentUser) {
      const favIds = getUserFavorites();
      setFavorites(favIds);
    }
  }, []);

  const handleRemove = (movieId) => {
    removeFromFavorites(movieId);
    setFavorites(prev => prev.filter(id => id !== movieId));
  };

  if (!user) {
    return (
      <Container className="mt-5 text-center py-5">
        <h3>Увійдіть в акаунт, щоб переглянути список бажаного</h3>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Мій список бажаного</h2>

      {favorites.length === 0 && (
        <p className="text-center text-muted fs-5 py-5">
          Список бажаного порожній. Додайте фільми на головній сторінці ❤️
        </p>
      )}

      {favorites.map((movieId) => {
        const movie = movies.find(m => m.id === Number(movieId)) || {
          id: movieId,
          title: `Фільм ID: ${movieId}`,
          img: "https://via.placeholder.com/85x120?text=🎬",
          rating: "—",
          price: "—"
        };

        return (
          <Card key={movieId} className="mb-3 shadow-sm">
            <Card.Body className="p-3">
              <Row className="align-items-center">
                
                <Col xs={12} sm="auto" className="text-center mb-3 mb-sm-0">
                  <img 
                    src={movie.img} 
                    alt={movie.title}
                    style={{ 
                      width: "85px", 
                      height: "120px",
                      borderRadius: "8px",
                      objectFit: "cover" 
                    }} 
                  />
                </Col>

                <Col xs={12} sm className="text-center text-sm-start">
                  <h5 className="mb-2">{movie.title}</h5>
                  
                  <div className="d-flex justify-content-center justify-content-sm-start align-items-center gap-2 mb-2">
                    <span className="fs-5">⭐</span>
                    <strong className="fs-5 text-warning">
                      {movie.rating || "—"}
                    </strong>
                    <span className="text-muted">/ 10</span>
                  </div>

                  <p className="text-muted mb-0 small">
                    Ціна квитка: <strong>
                      {movie.price ? `${movie.price} грн` : "—"}
                    </strong>
                  </p>
                </Col>

                <Col xs={12} sm="auto" className="mt-3 mt-sm-0 text-center d-flex flex-column gap-2">
                  <Button
                    variant="success"
                    className="w-100"
                    onClick={() => onBook && onBook(movie.title, movie.id)}
                  >
                    Перейти до бронювання
                  </Button>

                  <Button
                    variant="outline-danger"
                    className="w-100"
                    onClick={() => handleRemove(movieId)}
                  >
                    Видалити
                  </Button>
                </Col>

              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default WatchlistPage;