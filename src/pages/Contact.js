import React from "react";
import GitHubPic from "../components/GitHubPic";
import LinkedinPic from "../components/LinkedinPic";
import EmailPic from "../components/EmailPic";

import { Container, Row, Col, Button, Form } from "react-bootstrap";


const Contact = () => {

  return (
    <Container className="containerStyle">
      <Row>
        <Col className="portHead">
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row className="contactRow">
      {/* <p className="text-center">Please reach out if you have interest in my work</p>
      <p className="text-center">I would love to connect</p> */}
    <Col className="contactBox text-center">
    
                <a  href="mailto:aaron.j.burzak@gmail.com"><EmailPic/></a>{' '}
                <p className="contactText">E-mail</p>
                <a href="https://github.com/aaburzak"><GitHubPic/></a>{' '}
                <p className="contactText">GitHub</p>
                <a href="https://www.linkedin.com/in/aaron-burzak-53187654/"><LinkedinPic/></a>{' '}
                <p className="contactText">LinkedIn</p>
  
    </Col>
    </Row>
    <Row className="justify-content-md-center botRow">
      <Col className="md-auto botCol">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </Col>
    </Row>
    </Container>
  );
};


export default Contact;