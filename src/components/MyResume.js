import React from "react";

import {Row, Col } from 'react-bootstrap';

import MySqlPic from "../components/MySqlPic";
import MongoPic from "../components/MongoPic";
import MongoosePic from "../components/MongoosePic";
import NodePic from "../components/NodePic";
import ExpressPic from "../components/ExpressPic";
import ReactPic from "../components/ReactPic";
import ReactBootstrapPic from "../components/ReactBootstrapPic";
import BootstrapPic from "../components/BootstrapPic";
import HandlebarsPic from "../components/HandlebarsPic";
import HtmlPic from "../components/HtmlPic";
import CssPic from "../components/CssPic";
import JsPic from "../components/JsPic";
import JquereyPic from "../components/JquereyPic";
import HerokuPic from "../components/HerokuPic";
import GitPic from "../components/GitPic";
import ApiPic from "../components/ApiPic";
import JsonPic from "../components/JsonPic";
import AjaxPic from "../components/AjaxPic";
import PythonPic from "../components/PythonPic";
import DjangoPic from "../components/DjangoPic";
import OfficePic from "../components/OfficePic";
import GsuitePic from "../components/GsuitePic";


function MyResume(){
    return( 
        <div>
        <Row className="resStart">
        <Col className="text-center portHead">
        <h1>Aaron Burzak</h1>
        Salem, NH 03079
        <p>aaron.j.burzak@gmail.com</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <h2>Summary</h2>
        <p className ="resStyle">Front-end web developer committed to creating enjoyable and intuitive user experiences. Accomplished in
communication and entertainment and recently certified in full stack development through the University of New
Hampshire acquiring skills in Javascript, CSS, React.js, and responsive web design. Known for critical
thinking, and penchant for design, my goal is to improve myself with each project. Passionate and excited to
leverage my skills as part of a team of quality oriented collaborators who share in these ambitions.
</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
        <h2 className="resTitle">Skills</h2>
        <p>Public Speaking, Communications, Project Management</p>
        <p className="resStyle"><MySqlPic/> <MongoPic/> <MongoosePic/> <NodePic/> <ExpressPic/> <ReactPic/> <ReactBootstrapPic/> <BootstrapPic/> <HandlebarsPic/> <HtmlPic/> <CssPic/> <JsPic/> <JquereyPic/> <HerokuPic/> <GitPic/> <ApiPic/> <JsonPic/> <AjaxPic/> <PythonPic/> <DjangoPic/> <OfficePic/> <GsuitePic/>
        </p>
        </Col>
      </Row>
      
      <Row>
        <Col>
        <h2 className="text-center resTitle">Projects</h2>
        <h3 className="resProjectStyle">Magic: Trading Block</h3>
        <p className="resStyle">Dedicated to the popular trading card game Magic: The Gathering. Where collectors can advertise, connect, and coordinate trades.</p>
        <p className="resStyle">GitHub: <a className="linkStyle" href=" https://bit.ly/mtb_code"> https://bit.ly/mtb_code </a>| Project: <a className="linkStyle" href="https://bit.ly/magic_tradingblock ">https://bit.ly/magic_tradingblock </a></p>
        <p className="resStyle">Role: Managed client side development, architect of UI/UX experience
        </p>
        <p className="resStyle">Tools/Languages: HTML, CSS, JavaScript React, React-Bootstrap, MongoDB, Mongoose, Node.js, Socket.IO, Scryfall API</p>
        </Col>
      </Row>
      
      <Row>
        <Col>
        <h3 className="resProjectStyle">Trivia Challenge</h3>
        <p className="resStyle">A website where users can hone their knowledge with daily trivia challenges and earn top spot on the leaderboard.</p>
        <p className="resStyle">GitHub: <a className="linkStyle" href="https://bit.ly/triviachallenge_code">https://bit.ly/triviachallenge_code </a>| Project: <a className="linkStyle" href=" https://bit.ly/trivia_challenge_app"> https://bit.ly/trivia_challenge_app</a></p>
        <p className="resStyle">Role: Managed client side development, architect of UI/UX experience
        </p>
        <p className="resStyle">Tools/Languages: HTML, CSS, JavaScript, Bootstrap, Handlebars, Node.js, mySQL, Sequelize, Express, Axios, TriviaDB API</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3 className="resProjectStyle">Cinema Buff</h3>
        <p className="resStyle">A simple client side only application that allows fans of cinema to look up movies and their corresponding reviews</p>
        <p className="resStyle">GitHub: <a className="linkStyle" href="https://bit.ly/cinemabuff_code">https://bit.ly/cinemabuff_code	 </a>| Project: <a className="linkStyle" href="https://bit.ly/cinema_buff	">https://bit.ly/cinema_buff</a></p>
        <p className="resStyle">Role: Developed the code necessary to integrate and display API calls from the OMDbAPI
        </p>
        <p className="resStyle">Tools/Languages: HTML, CSS, JavaScript, jQuery, Foundation, OMDbAPI, NYTimes API</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <h2 className="text-center resTitle">Professional Experience</h2>
        <h4 className="resProjectStyle">SMS Assist - Chicago, IL</h4>
        <p className="resStyle">Operations Specialist | February 2017 - June 2021</p>
        <ul className="resListStyle">
          <li>Oversee a nationwide portfolio of single family homes, coordinating efforts necessary to resolve time
sensitive maintenance requests while communicating critical updates and expectations.
</li>
          <li>Build rapport and relationships with partnered affiliates and instruct them on process.</li>
          <li>Develop cultural initiatives channeled through senior leadership and C-Suite while acting as a
representative of my colleagues within the SMS Council.</li>
          <li>Produce and implement instructional coaching sessions on standard operations with a focus on the education and empowerment of newly hired employees</li>
        </ul>
        </Col>
      </Row>
      <Row>
        <Col>
        <h4 className="resProjectStyle">Avant - Chicago, IL</h4>
        <p className="resStyle">Team Lead | January 2015 - August 2016</p>
        <ul className="resListStyle">
          <li>Lead a team of five to six employees, effectively communicate and train company policy, and delegate responsibilities pending company needs</li>
          <li>Maintain client accounts through the resolution of escalated and time sensitive issues, and perform final review of financial documents to determine funding of loan
applicants.</li>
          <li>Conduct interviews and evaluate potential candidates for employment.</li>
          <li>Audit employee performance and provide weekly feedback to identify areas of improvement and maximize efficiency</li>
        </ul>
        <p className="resStyle">Customer Specialist | August 2014 - January 2015</p>
        <ul className="resListStyle">
          <li>Verify customer credentials and financial records to expedite and facilitate the application process</li>
          <li>Receive and resolve a wide spectrum of customer inquiries, requests, and concerns with an empathetic and professional demeanor.</li>
        </ul>
        </Col>
      </Row>
      <Row>
        <Col>
        <h4 className="resProjectStyle">KWC Marketing LLC - Salem, NH</h4>
        <p className="resStyle">Marketing Associate | April 2013 - May 2014</p>
        <ul className="resListStyle">
          <li> Initiate contact and present offers to potential clientele</li>
          <li>Coordinate appointments and travel for customers</li>
        </ul>
        </Col>
      </Row>
      <Row className="text-center resEnd">
      <h1 className="resTitle">Education</h1>
        <Col>
          University of New Hampshire, Durham, NH
          <p>M.E.R.N. Full Stack Web Development</p>
        
        Coding Dojo, Chicago, IL
        <p>Python Web Development
        </p>
        Drexel University, Philadelphia, PA
        <p>Bachelor of Science: Music Industry
        </p>
        </Col>
    
        <Col>
        <p>December 2021 - June 2022</p>
        <br></br>
        <p>October 2020 - January 2021</p>
        <br></br>
        <p>September 2008 - June 2012</p>
        </Col>
      </Row> 
      </div>
    )
}

export default MyResume