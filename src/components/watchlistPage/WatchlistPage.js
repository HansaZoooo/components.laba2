import { Card, Button, Container, Row, Col } from "react-bootstrap";

const WatchlistPage = ({ items, onRemove }) => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Мій список</h2>

      {items.length === 0 && (
        <p className="text-center text-muted">Список порожній</p>
      )}

      {items.map((movie, index) => (
        <Card key={index} className="mb-3 p-3 shadow-sm">
          <Row className="align-items-center">
            <Col xs={12} sm="auto" className="text-center mb-3 mb-sm-0">
              <img 
                src={movie.img} 
                alt={movie.title}
                style={{ 
                  width: "80px", 
                  height: "auto", 
                  borderRadius: "8px",
                  objectFit: "cover" 
                }} 
              />
            </Col>

            <Col xs={12} sm className="text-center text-sm-start">
              <h5 className="mb-1">{movie.title}</h5>
              <p className="text-muted small mb-0">Рейтинг: {movie.rating || "N/A"}</p>
            </Col>

            <Col xs={12} sm="auto" className="mt-3 mt-sm-0 text-center">
              <Button
                variant="outline-danger"
                className="w-100 w-sm-auto"
                onClick={() => onRemove(index)}
              >
                Видалити
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default WatchlistPage;