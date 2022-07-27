import React from "react";
import {Container, Row, Col } from 'react-bootstrap';
import MyResume from "../components/MyResume";
import ProfilePic from "../components/ProfilePic";


function Resume(){




    return(
      <Container className="containerStyle">
      {/* <Row>
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
      </Row> */}

      <Row>
        <Col className="text-center portHead">
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
        <Col>
        <h1 className="text-center">Professional Experience</h1>
        <h4>SMS Assist - Chicago, IL</h4>
        <p>Operations Specialist | February 2017 - June 2021</p>
        <ul>
          <li>Maintain a nationwide portfolio of single family homes to oversee, coordinate, and facilitate the resolution of time sensitive maintenance requests while
communicating critical updates and realistic expectations to an array of unique clientele.</li>
          <li>Build rapport and relationships with partnered affiliates and provide instructional documentation for teammates on SMS portal to improve communications based on
affiliate preferences.</li>
          <li>Develop and present cultural initiatives to Senior Leadership and C-Suite executives acting as a representative of my peers within the SMS Council.</li>
          <li>Produce and implement instructional coaching sessions on standard operations with a focus on the education and empowerment of newly hired employees</li>
        </ul>
        </Col>
      </Row>
      <Row>
        <Col>
        <h4>Avant - Chicago, IL</h4>
        <p>Team Lead | January 2015 - August 2016</p>
        <ul>
          <li>Lead a team of five to six employees, effectively communicate and train company policy, and delegate responsibilities pending company needs</li>
          <li>Maintain client accounts through the resolution of escalated and time sensitive issues, and perform final review of financial documents to determine funding of loan
applicants.</li>
          <li>Conduct interviews and evaluate potential candidates for employment.</li>
          <li>Audit employee performance and provide weekly feedback to identify areas of improvement and maximize efficiency</li>
        </ul>
        <p>Customer Specialist | August 2014 - January 2015</p>
        <ul>
          <li>Verify customer credentials and financial records to expedite and facilitate the application process</li>
          <li>Receive and resolve a wide spectrum of customer inquiries, requests, and concerns with an empathetic and professional demeanor.</li>
        </ul>
        </Col>
      </Row>
      <Row className="text-center">
      <h1>Education</h1>
        <Col>
        <p>University of New Hampshire, Durham, NH
          M.E.R.N. Full Stack Web Development
        </p>
        <p>Coding Dojo, Chicago, IL
        Python Web Development
        </p>
        <p>Drexel University, Philadelphia, PA
        Bachelor of Science: Music Industry
        </p>
        </Col>
    
        <Col>
        <p>December 2021 - June 2022</p>
        <p>October 2020 - January 2021</p>
        <p>September 2008 - June 2012</p>
        </Col>
      </Row>


{/* 
      <Row>
        <Col className="text-center">
          <MyResume/>
        </Col>
      </Row> */}
      </Container>
    );
};


export default Resume;