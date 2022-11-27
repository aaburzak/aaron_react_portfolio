import React from "react";
import GitHubPic from "../components/GitHubPic";
import LinkedinPic from "../components/LinkedinPic";
import EmailPic from "../components/EmailPic";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-light text-center">
      <h1 id="contact" className="mt-4">
        Contact Me
      </h1>
      <Row className="mt-3 mb-3 p-3">
        <Col className="d-flex align-items-center justify-content-center">
          <a title="Github Profile" href="https://github.com/aaburzak">
            <GitHubPic />
          </a>
          <a
            title="LinkedIn Profile"
            href="https://www.linkedin.com/in/aaron-burzak-53187654/"
          >
            <LinkedinPic />
          </a>
          <a
            title="aaron.j.burzak@gmail.com"
            href="mailto:aaron.j.burzak@gmail.com"
          >
            <EmailPic />
          </a>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#09182a", padding: "1rem 0" }}>
        <p className="mb-0">
          © 2022 Built By Aaron Burzak &nbsp;|&nbsp; Powered by React &
          Bootstrap
        </p>
      </Row>
    </footer>
  );
};

export default Footer;
