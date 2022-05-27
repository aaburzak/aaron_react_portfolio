import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
import MyResume from "../components/MyResume";

function Resume(){
    return(
      <Container >
      <Row>
        <Col className="portHead">
          <h3>My Resume</h3>
          <p>For those interested in my professional experience in and out of coding</p>
        </Col>
      </Row>
      <div class="col projectCard">
        <Card>
          <MyResume/>
        </Card>
      </div>
      </Container>
    );
};


export default Resume;