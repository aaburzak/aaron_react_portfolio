import React from "react";
import ProfilePic from "../components/ProfilePic";
// import { Card } from 'react-bootstrap';
import { Container, Row, Col } from "react-bootstrap";
import MyResume from "../components/MyResume";
import DownloadPic from "../components/DownloadPic";

function About() {
  return (
    <Container>
      <Row className="bg-light p-5 shadow shadow-lg mb-5">
        <Col md="3">
          <ProfilePic />
        </Col>
        <Col>
          <h1>About Me</h1>
          <hr />
          <p>
            Hi, I'm Aaron, a recent graduate of the University of New
            Hampshire's M.E.R.N. fullstack web development program.
          </p>
          <p>
            After spending the better part of the last decade in Chicago,
            pursuing the dreams of a younger man, I have relocated back to New
            England to spend time with family and shift my focus on new
            endeavors. I have since discovered a passion for coding,
            specifically client side development and hope to create a career of
            contributing to innovative and intuitive user interfaces
          </p>
          <p>Feel free to stay awhile, have a look around.</p>
        </Col>
      </Row>

      <Row className="bg-light shadow shadow-lg mb-5">
        <MyResume />
        <Col>
          <hr />
        </Col>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <a href="/aaronResume.pdf" download>
            <DownloadPic />
          </a>
          <p className="mt-3">Download</p>
        </div>
      </Row>
    </Container>
  );
}

export default About;
