import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import cinemaImg from "../../assets/neocinema.jpg";

const AboutCinema = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center pt-5 mt-5 mb-5 display-4">Про кінотеатр NeoCinema</h1>
      
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image 
            src={cinemaImg} 
            fluid 
            alt="NeoCinema"
            className="shadow"
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">Кінокраїна, де кожна історія стає реальністю</h2>
          <p className="lead">
            NeoCinema — <strong>найбільший кінотеатр Івано-Франківська</strong> та один з найкращих на заході України.
          </p>
          <p>
            Ми розташовані на 3-му поверсі ТРЦ <strong>"A7"</strong> і пропонуємо 
            <strong> 3 сучасних зали </strong> загальною місткістю <strong>580 місць</strong>.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Card className="p-4 shadow-sm">
            <h3>Чому обирають NeoCinema?</h3>
            <Row className="mt-4">
              <Col md={4} className="mb-4">
                <h5>🎬 Сучасне обладнання</h5>
                <p>Найновіші лазерні проектори, Dolby Atmos та преміум звук у всіх залах.</p>
              </Col>
              <Col md={4} className="mb-4">
                <h5>🛋 Комфортні крісла</h5>
                <p>Збільшена відстань між рядами, просторі сидіння з регулюванням.</p>
              </Col>
              <Col md={4} className="mb-4">
                <h5>🍿 Преміум сервіс</h5>
                <p>Великий вибір попкорну, снегів та напоїв. Зручна онлайн-бронь.</p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <h3 className="text-center mb-4">Наші зали</h3>
      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <h5>Великий зал (VIP)</h5>
              <p>Найкраща якість зображення та звуку. Ідеально для блокбастерів.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <h5>Зал Comfort</h5>
              <p>Максимальний комфорт для довгих сеансів.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <h5>Зал для сімейного перегляду</h5>
              <p>Спеціальні сеанси для дітей та сімей.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-5">
        <p className="fs-5">
          📍 <strong>Адреса:</strong>  вул. Галицька, 57, ТРЦ "A7", 3-й поверх<br />
          ☎ <strong>Телефон:</strong> +38 099 15 62 666<br />
          🕒 <strong>Режим роботи:</strong> 10:00 — 23:00 щодня
        </p>
      </div>
    </Container>
  );
};

export default AboutCinema;