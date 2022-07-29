import React from "react";
import MyResume from "../components/MyResume";
import {Container, Row, Col } from 'react-bootstrap';
import DownloadPic from "../components/DownloadPic";


function Resume(){




    return(
      <Container className="containerStyle ">
      <Row>
      <Col className="portHead">
        <h1>Resume</h1>
      </Col>
    </Row>
    <MyResume/>

      <Row className="justify-content-md-center botRow">
      <Col className="md-auto text-center botCol">
      <a href="aaronResume.pdf" download>
            <DownloadPic/>
          </a>
          <p>Download</p>
      </Col>
    </Row>

      {/* <Row className="portHead">
        <Col className="text-center">
        <a href="aaronResume.pdf" download>
            <DownloadPic/>
          </a>
          <p>Download</p>
        </Col>
      </Row> */}

      </Container>
    );
};


export default Resume;