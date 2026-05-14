import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Menu = ({ currentUser, onNavigate, onLoginClick, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand 
          onClick={() => onNavigate("home")}
          style={{ cursor: "pointer" }}
        >
          NeoCinema
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => onNavigate("home")}>Головна</Nav.Link>
            <Nav.Link onClick={() => onNavigate("about")}>Про кінотеатр</Nav.Link>
            <Nav.Link onClick={() => onNavigate("watchlist")}>Список бажаного</Nav.Link>
            <Nav.Link onClick={() => onNavigate("contacts")}>Контакти</Nav.Link>
          </Nav>

          <Nav>
            {currentUser ? (
              <div className="d-flex align-items-center gap-3">
                <span className="text-light">
                  Привіт, <strong>{currentUser.name.split(" ")[0]}</strong>
                </span>
                <Button variant="outline-danger" size="sm" onClick={onLogout}>
                  Вийти
                </Button>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Button 
                  variant="outline-light" 
                  size="sm"
                  onClick={onLoginClick}
                >
                  Увійти
                </Button>
                <Button 
                  variant="danger" 
                  size="sm"
                  onClick={onLoginClick}
                >
                  Зареєструватися
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;