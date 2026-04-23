// import React from 'react';
// import { Navbar, Container } from "react-bootstrap";

// const Menu = () => {
//     return (
//         <Navbar>
//             <Container>
//                 <Navbar.Brand href="#home">Бронювання квитків на кіно</Navbar.Brand>
//                 <Navbar.Toggle />
//                 <Navbar.Collapse className="justify-content-end">
//                     <Navbar.Text>
//                         Signed in as: <a href="#login">Heitota Vitalyy</a>
//                     </Navbar.Text>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default Menu;

import { Navbar, Nav, Container } from "react-bootstrap";

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">CinemaBooking</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link href="#">Головна</Nav.Link>
            <Nav.Link href="#">Фільми</Nav.Link>
            <Nav.Link href="#">Контакти</Nav.Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Heitota Vitalyy</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;