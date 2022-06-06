import React from "react";

import { Container, Row, Col, Button, Form } from "react-bootstrap";


const Contact = () => {

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center contactHead">Contact</h3>
        </Col>
      </Row>
    <div class="bg-dark p-5 rounded-lg m-3 contactForm">
      <Form>
      <p className="text-center">Please reach out if you have interest in my work</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="string" placeholder="Your Name Here" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required placeholder="email@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Subject</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
    </Container>
  );
};


export default Contact;