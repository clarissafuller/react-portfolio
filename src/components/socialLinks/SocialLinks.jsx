import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <div className="social-links">
      {/* GitHub */}
      <a
        className="social"
        href="https://github.com/clarissafuller"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>

      {/* Medium */}
      <a
        className="social"
        href="https://medium.com/@clarissafuller5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon" icon={faMedium} />
      </a>

      {/* LinkedIn */}
      <a
        className="social"
        href="https://www.linkedin.com/in/clarissa-fuller-360096109/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </a>
    </div>
  );
};

export default SocialLinks;
