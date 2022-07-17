import React from "react";
import Project from "../components/Project";
import { Container, Row, Col} from 'react-bootstrap';

function Portfolio(){
    return(
      <div>
      <Container className="containerStyle" >
      <Row>
        <Col className="portHead">
          <h1>My Portfolio</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <Project/>
        </Col>
      </Row>
      </Container>
      </div>


    );
};




export default Portfolio;