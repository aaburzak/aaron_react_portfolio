import React from "react";
import Project from "../components/Project";
import { Container, Row, Col} from 'react-bootstrap';

function Portfolio(){
    return(
      <Container className="containerStyle">
      <Row>
          <Col className="portHead">
            <h1>Portfolio</h1>
          </Col>
        </Row>
      <Row className="picRow">
        <Col className="text-center picCol">
            <Project/>
        </Col>
        </Row>
        <Row className="justify-content-md-center botRow">
          <Col className="md-auto botCol text-center">
          <p>
          Here you can find small sampling of my abilities. </p>
          <p> All projects displayed are collaborative efforts in which I was fortunate enough to work alongside incredibly talented individuals.  I am quite proud of the work we accomplished together, and  I hope you enjoy taking these applications for a spin!
          </p>
          <p>
          You can find more of my developmental work, both collaborative and independent, by visiting my <a href="https://github.com/aaburzak">gitHub</a>, and more on my past professional experience by reviewing my <a href="https://www.linkedin.com/in/aaron-burzak-53187654/">Linkedin</a> or <a href="/resume">resume</a>.</p>
            
          </Col>
        </Row>
      </Container>


    );
};




export default Portfolio;