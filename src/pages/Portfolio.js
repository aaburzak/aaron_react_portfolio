import React from "react";
import Project from "../components/Project";
import { Container, Row, Col} from 'react-bootstrap';

function Portfolio(){
    return(
      <Container className="containerStyle">
      <Row>
          <Col className="portHead">
            <h1>My Portfolio</h1>
          </Col>
        </Row>
      <Row className="picRow">
        <Col className="text-center picCol">
            <Project/>
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


    );
};




export default Portfolio;