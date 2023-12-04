import React from "react";
import "./skillsList.css";

const SkillsAside = () => {
  const codingSkills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    // Add more skills as needed
  ];

  return (
    <aside className="skills-aside">
      <h2>My Coding Skills</h2>
      <ul>
        {codingSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </aside>
  );
};

export default SkillsAside;
