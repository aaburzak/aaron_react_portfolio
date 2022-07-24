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
    </Container>
  );
};


export default Contact;