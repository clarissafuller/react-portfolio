import React from "react";
import "./about.css";

const About = () => {
  const yourName = "Clarissa Fuller";
  const imageUrl =
    "src/assets/6FFF57F2-FB0E-4D56-A00C-3E836792061F_1_105_c.jpeg";
  const githubLink = "https://github.com/clarissafuller";
  const aboutText =
    "I am a passionate developer with a love for coding. I enjoy creating web applications and contributing to open-source projects.";

  return (
    <div className="about">
      <h2>{yourName}</h2>
      <img className="pic" src={imageUrl} alt={yourName} />
      <p className="about-text">{aboutText}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  );
};

export default About;
