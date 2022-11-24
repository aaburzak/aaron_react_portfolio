import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" variant="light" fixed="top" className="shadow shadow-lg">
      <Container>
        <Navbar.Brand href="/">Aaron Burzak</Navbar.Brand>
        <Nav className="justify-content-end">
          {/* <Nav.Link href="/">About Me</Nav.Link> */}
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
