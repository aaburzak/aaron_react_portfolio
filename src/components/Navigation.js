import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';


function Navigation() {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Aaron Burzak</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">About Me</Nav.Link>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
}

export default Navigation;