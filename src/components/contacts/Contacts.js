import { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Modal } from "react-bootstrap";
import cinemaContactImg from "../../assets/Cinema.jpg";

const Contacts = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center pt-5 mt-5 mb-5 display-4">Зв'яжіться з нами</h2>

      <Row className="align-items-stretch g-0"> 
        <Col lg={6}>
          <div className="h-100 position-relative rounded-4 overflow-hidden shadow-lg">
            <img 
              src={cinemaContactImg} 
              alt="Зал кінотеатру"
              className="img-fluid w-100 h-100"
              style={{ 
                objectFit: "cover", 
                minHeight: "580px" 
              }} 
            />
            <div className="position-absolute bottom-0 start-0 end-0 p-4 bg-gradient">
              <h4 className="text-white mb-1">NeoCinema</h4>
              <p className="text-white-50 mb-0">Івано-Франківськ • ТРЦ A7</p>
            </div>
          </div>
        </Col>

        <Col lg={6}>
          <Card className="shadow h-100 border-0">
            <Card.Body className="p-5">
              <h3 className="mb-4">Напишіть нам</h3>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Ім'я та прізвище</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ваше ім'я" 
                    size="lg" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com" 
                    size="lg" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Телефон</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+380 XX XXX XX XX" 
                    size="lg" 
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Повідомлення</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    placeholder="Напишіть ваше повідомлення..." 
                    size="lg"
                    required 
                  />
                </Form.Group>

                <Button variant="danger" size="lg" className="w-100 py-3" type="submit">
                  Надіслати повідомлення
                </Button>
              </Form>

              <div className="mt-5 pt-4 border-top">
                <h5 className="mb-3">Наші контакти</h5>
                <p><strong>📍 Адреса:</strong> вул. Галицька, 57, ТРЦ "A7", 3-й поверх</p>
                <p><strong>☎ Телефон:</strong> +38 099 15 62 666</p>
                <p><strong>✉ Email:</strong> info@neocinema.if.ua</p>
                <p><strong>🕒 Графік роботи:</strong> 10:00 - 23:00 щодня</p>
              </div>         
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal 
        show={showSuccess} 
        onHide={() => setShowSuccess(false)} 
        centered 
        size="md"
      >
        <Modal.Body className="text-center p-5">
          <div className="mb-4">
            <span style={{ fontSize: "4.5rem" }}>🎟️</span>
          </div>
          <h3 className="mb-3 text-success">Повідомлення надіслано!</h3>
          <p className="text-muted mb-4">
            Дякуємо! Ми зв'яжемося з вами найближчим часом.
          </p>
          <Button 
            variant="danger" 
            size="lg" 
            onClick={() => setShowSuccess(false)}
          >
            Чудово, дякую!
          </Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Contacts;