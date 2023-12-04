import React from "react";
import "./education.css";

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="highlight-text">Education</h1>
      <div className="ed-container">
        <h2 className="highlight-text">
          Columbia University Full-Stack Coding Bootcamp
        </h2>
        <p>August 2023 - November 2023</p>
        <p>Full-Stack Coding Certificate</p>
        <img
          className="bootcamp-pic"
          src="/images/bootcampbadge.png"
          alt="bootcamp badge"
        />
      </div>
      <div className="ed-container">
        <h2 className="highlight-text">University of Maryland</h2>
        <p>August 2015 - May 2019</p>
        <p>Bachelors of Science in Chemistry</p>
        <img className="maryland-pic" src="/images/umd.png" alt="umd badge" />
      </div>
    </div>
  );
};

export default Education;
