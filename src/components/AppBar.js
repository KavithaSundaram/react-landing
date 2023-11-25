import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {
  return (
    <Navbar bg="info" expand="lg"className='position-sticky' >
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="text-primary">
            <span>
              Pizza Shop
            </span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-start">
            <Nav.Link href="#home" className="fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#menu" className="fw-bold">
              Menu
            </Nav.Link>
            <Nav.Link href="#musttry" className="fw-bold">
              Special Menu
            </Nav.Link>
            <Nav.Link href="#contact" className="fw-bold">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;