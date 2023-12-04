import React from "react";
import "./about.css";
import Github from "../github/Github";

const About = () => {
  return (
    <div className="about">
      <div className="top-container">
        <div className="text container">
          <h2 className="name-text">Clarissa Fuller</h2>
          <p className="about-text">
            I am a passionate developer with a love for coding. I enjoy creating
            web applications and contributing to open-source projects.
          </p>
        </div>
        <img className="pic" src="/images/polaroid.png" alt="clarissa image" />
      </div>
      <div className="bottom-container">
        <img className="pic2" src="/images/squiggly.png" alt="clarissa image" />
        <div className="github-stats">
          <Github />
        </div>
      </div>
    </div>
  );
};

export default About;
