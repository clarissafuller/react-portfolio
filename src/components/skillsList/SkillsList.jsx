import React from "react";
import "./skillsList.css";

const SkillsList = () => {
  const codingSkills = [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "MERN Stack",
  ];
  const thirdPartyAPIs = [
    "jQuery",
    "Bootstrap",
    "Stripe",
    "Shopify",
    "OAuth",
    "Socket.IO",
    "Spotify",
  ];
  const serverSideAPIs = [
    "RESTful APIs",
    "GraphQL",
    "Amazon Web Services",
    "MySQL",
    "NoSQL",
    "MongoDB",
  ];

  return (
    <aside className="skills-aside">
      <h2>My Coding Skills</h2>
      <ul>
        {codingSkills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>Version Control: Git</p>
      <p>Problem Solving, Algorithms, and Data Structures</p>
      <p>Third Party APIs:</p>
      <ul>
        {thirdPartyAPIs.map((apis, index) => (
          <li key={index}>{apis}</li>
        ))}
      </ul>
      <p>Server Side APIs</p>
      <ul>
        {serverSideAPIs.map((apis, index) => (
          <li key={index}>{apis}</li>
        ))}
      </ul>
      <p>Unit Testing</p>
      <p>Deployment: Netlify, Heroku</p>
      <p>Progressive Web Apps</p>
      <p>Express.js Servers</p>
      <p>ORM: Sequelize</p>
      <p>MVC Frameworks: Handlebars.js</p>
    </aside>
  );
};

export default SkillsList;
