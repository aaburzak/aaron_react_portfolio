import React from "react";
import { Card, Container, Row, Col } from 'react-bootstrap';
// import MyResume from "../components/MyResume";
import ProfilePic from "../components/ProfilePic";

function Resume(){
    return(
      <Container >
      <Row>
        <Col className="portHead">
          <h3>My Resume</h3>
          <p>For those interested in my professional experience in and out of web development</p>
        </Col>
      </Row>
      <div className="col projectCard">
        <Card>
          {/* <MyResume/> */}
          <a href="aaronResume.pdf" download>
            <ProfilePic/>
  {/* <img src="/images/myw3schoolsimage.jpg" alt="download"> */}
</a>
        </Card>
      </div>
      </Container>
    );
};


export default Resume;