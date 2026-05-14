import { Card, Button, Container, Row, Col } from "react-bootstrap";

const WatchlistPage = ({ items, onRemove, onBook }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Мій список бажаного</h2>

      {items.length === 0 && (
        <p className="text-center text-muted fs-5 py-5">
          Список бажаного порожній
        </p>
      )}

      {items.map((movie, index) => (
        <Card key={index} className="mb-3 shadow-sm">
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
                  onClick={() => onBook(movie.title, movie.id)}
                >
                  Перейти до бронювання
                </Button>

                <Button
                  variant="outline-danger"
                  className="w-100"
                  onClick={() => onRemove(index)}
                >
                  Видалити
                </Button>
              </Col>

            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default WatchlistPage;