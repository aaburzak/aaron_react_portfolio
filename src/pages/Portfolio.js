import React from "react";
import Project from "../components/Project";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center text-light mb-3">Portfolio</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="md-auto bg-light p-5 text-center mb-5 shadow">
          <p>Here you can find small sampling of my abilities. </p>
          <p>
            All projects displayed are collaborative efforts in which I was
            fortunate enough to work alongside incredibly talented individuals.
            I am quite proud of the work we accomplished together, and I hope
            you enjoy taking these applications for a spin!
          </p>
          <p className="mb-0">
            You can find more of my developmental work, both collaborative and
            independent, by visiting my{" "}
            <a className="linkStyle" href="https://github.com/aaburzak">
              gitHub
            </a>
            , and more on my past professional experience by reviewing my{" "}
            <a
              className="linkStyle"
              href="https://www.linkedin.com/in/aaron-burzak-53187654/"
            >
              Linkedin
            </a>{" "}
            or{" "}
            <a className="linkStyle" href="/resume">
              resume
            </a>
            .
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center picCol mb-5">
          <Project />
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
