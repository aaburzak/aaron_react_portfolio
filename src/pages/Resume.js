import React from "react";
import {Container, Row, Col } from 'react-bootstrap';
import MyResume from "../components/MyResume";
import ProfilePic from "../components/ProfilePic";


function Resume(){




    return(
      <Container >
      <Row>
        <Col className="portHead">
          <h1>Resume</h1>
          <p>For those interested in my professional experience in and out of web development</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <a href="aaronResume.pdf" download>
            <ProfilePic/>
          </a>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
        <h1>Aaron Burzak</h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <p>9 Carriage Lane</p>
        <p>Salem, NH 03079</p>
        </Col>
        <Col className="text-center">
        <p>T: 603.818.141.</p>
        <p>E: aaron.j.burzak@gmail.com</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <h2>Summary</h2>
        <p>Front-end web developer with a resolute understanding of the imperative need for an enjoyable and intuitive user experience. Forged in a history of entertainment and customer
        service, and recently certified full stack development through the University of New Hampshire with freshly required skills in Javascript, CSS, React.js, and responsive web design.
        Known for critical thinking, communication, and penchant for design, my goal is to improve myself with each project as I strive to create innovative and captivating user interfaces.
        I am passionate and excited to leverage my skills as part of a team of quality oriented collaborators who share in these ambitions.</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <h2>Skills</h2>
        <p>MySQL, MongoDB, Mongoose, Node.js, Express, React, React-Bootstrap, Bootstrap, Handlebars, HTML, CSS, JavaScript, jQuery, Bootstrap, Heroku, Git, APIs, JSON, Ajax, Python,
        Django, Public Speaking, Communication, Project Management, Microsoft Office Suite, Google Documents</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <h2 className="text-center">Projects</h2>
        <h3>Magic: Trading Block</h3>
        <p>Dedicated to the popular trading card game Magic: The Gathering. Where collectors can advertise, connect, and coordinate trades.</p>
        <p>GitHub: <a href="https://github.com/MaxFrank13/MtG-Trading-Block">https://github.com/MaxFrank13/MtG-Trading-Block </a>| Project: <a href="https://immense-garden-06811.herokuapp.com">https://immense-garden-06811.herokuapp.com</a></p>
        <p>Role: Managed client side development, architect of UI/UX experience
        </p>
        <p>Tools/Languages: HTML, CSS, JavaScript React, React-Bootstrap, MongoDB, Mongoose, Node.js, Socket.IO, Scryfall API</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3>Trivia Challenge</h3>
        <p>A website where users can hone their knowledge with daily trivia challenges and earn top spot on the leaderboard.</p>
        <p>GitHub: <a href="https://github.com/dpmurphy11/trivia-challenge">https://github.com/dpmurphy11/trivia-challenge </a>| Project: <a href="https://boiling-reaches-95982.herokuapp.com/">https://boiling-reaches-95982.herokuapp.com/</a></p>
        <p>Role: Managed client side development, architect of UI/UX experience
        </p>
        <p>Tools/Languages: HTML, CSS, JavaScript, Bootstrap, Handlebars, Node.js, mySQL, Sequelize, Express, Axios, TriviaDB API</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3>Trivia Challenge</h3>
        <p>A website where users can hone their knowledge with daily trivia challenges and earn top spot on the leaderboard.</p>
        <p>GitHub: <a href="https://github.com/dpmurphy11/trivia-challenge">https://github.com/dpmurphy11/trivia-challenge </a>| Project: <a href="https://boiling-reaches-95982.herokuapp.com/">https://boiling-reaches-95982.herokuapp.com/</a></p>
        <p>Role: Managed client side development, architect of UI/UX experience
        </p>
        <p>Tools/Languages: HTML, CSS, JavaScript, Bootstrap, Handlebars, Node.js, mySQL, Sequelize, Express, Axios, TriviaDB API</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3>Cinema Buff</h3>
        <p>A simple client side only application that allows fans of cinema to look up movies and their corresponding reviews</p>
        <p>GitHub: <a href="https://github.com/aguasvivasjc/Cinema-Buff">https://github.com/aguasvivasjc/Cinema-Buff </a>| Project: <a href="https://aguasvivasjc.github.io/Cinema-Buff/">https://aguasvivasjc.github.io/Cinema-Buff//</a></p>
        <p>Role: Developed the code necessary to integrate and display API calls from the OMDbAPI
        </p>
        <p>Tools/Languages: HTML, CSS, JavaScript, jQuery, Foundation, OMDbAPI, NYTimes API</p>
        </Col>
      </Row>



      <Row>
        <Col className="text-center">
          <MyResume/>
        </Col>
      </Row>
      </Container>
    );
};


export default Resume;