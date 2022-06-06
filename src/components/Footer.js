import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <ul class="nav justify-content-center text-center">
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://www.linkedin.com/in/aaron-burzak-53187654"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://github.com/aaburzak"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
      <p className="text-center">Powered by React</p>
    </footer>
  );
};

export default Footer;
