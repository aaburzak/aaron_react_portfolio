import React from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';


function Navigation() {
    return(
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/">Aaron Burzak</Navbar.Brand>
        <Nav className="justify-content-end">
          {/* <Nav.Link href="/">About Me</Nav.Link> */}
          <Nav.Link href="/portfolio">Portfolio &diams;</Nav.Link>
          <Nav.Link href="/contact">Contact &diams;</Nav.Link> 
          <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    );
}

export default Navigation;