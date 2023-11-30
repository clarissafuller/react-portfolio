import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <div className="main-home">
        <div className="title-container">
          <h1>Hi I'm</h1>
          <h1>CLARISSA</h1>
          <h3>i build things for the web</h3>
          <div className="social-links">
            {/* GitHub */}
            <a
              href="https://github.com/clarissafuller"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faGithub} />
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/@clarissafuller5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faMedium} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/clarissa-fuller-360096109/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
            </a>
          </div>
          <div className="button-box">
            <a
              href="https://clarissafuller.com/about"
              className="contact-button"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
