import React from "react";
import Project from "../components/Project";
import { Container, Row, Col} from 'react-bootstrap';

function Portfolio(){
    return(
      <Container >
      <Row>
        <Col className="portHead">
          <h3>My Portfolio</h3>
          <p>Please enjoy a sampling of my work</p>
        </Col>
      </Row>
      <Project/>
      </Container>



    );
};




export default Portfolio;