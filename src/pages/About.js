import React from "react";
import ProfilePic from "../components/ProfilePic";
// import { Card } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';

function About(){
return(
    
    
  <Container className="containerStyle">
  <Row>
      <Col className="portHead">
        <h1>About Me</h1>
      </Col>
    </Row>
  <Row className="picRow">
    <Col className="text-center picCol">
        <ProfilePic/>
    </Col>
    </Row>
    <Row className="justify-content-md-center botRow">
      <Col className="md-auto botCol text-center">
      
      
      <p>Hi, I'm Aaron a recent graduate of the University of New Hampshire's M.E.R.N. fullstack web development program. 
      </p>
      <p>After spending the better part of the last decade in Chicago, pursuing the dreams of a younger man, I have relocated back to New England to spend time with family and shift my focus on new endeavors.  I have since discovered a passion for coding, specifically client side development and hope to create a career of contributing to innovative and intuitive user interfaces</p>
      <p>
        Feel free to stay awhile, have a look around. 
      </p>
      </Col>
    </Row>
  </Container>
  


  //   <Card style={{ width: '18rem' }}>
  //   <Card.Body className="aboutCard">
  //     <Card.Title>Card Title</Card.Title>
  //     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
  //     <Card.Text>
  //       Some quick example text to build on the card title and make up the bulk of
  //       the card's content.
  //     </Card.Text>
  //     <Card.Link href="#">Card Link</Card.Link>
  //     <Card.Link href="#">Another Link</Card.Link>
  //   </Card.Body>
  // </Card>
);

};

export default About;