import React from "react";
import "./about.css";

const About = () => {
  const yourName = "Clarissa Fuller";
  const imageUrl = "https://avatars.githubusercontent.com/u/141360959?v=4";
  const githubLink = "https://github.com/clarissafuller";
  const aboutText =
    "I am a passionate developer with a love for coding. I enjoy creating web applications and contributing to open-source projects.";

  return (
    <div className="about">
      <div className="top-container">
        <h2>{yourName}</h2>
        <img className="pic" src={imageUrl} alt={yourName} />
      </div>
      <p className="about-text">{aboutText}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
};

export default About;
