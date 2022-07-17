import React from "react";
import ProfilePic from "../components/ProfilePic";
// import { Card } from 'react-bootstrap';
import { Container, Row, Col} from 'react-bootstrap';

function About(){
return(
  <div>
    
    
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
    <Row className="justify-content-md-center aboutRow">
      <Col className="md-auto aboutCol">
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      </Col>
    </Row>
  </Container>
  </div>


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