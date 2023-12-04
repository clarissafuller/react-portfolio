import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Top5",
      projectImage: "image/top5.jpg",
      repoLink: "https://github.com/rossgilman402/Top5",
      deployLink: "https://top5-123-dd46eff5dfcf.herokuapp.com/",
    },
    {
      title: "ShapeUp",
      projectImage: "image/shapeup.png",
      repoLink: "https://github.com/clarissafuller/shape-up",
      deployLink: "https://shape-up-4300c0d6cf80.herokuapp.com/login",
    },
  ];

  return (
    <div className="portfolio-container">
      <h1 className="projects">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="card-content">
          <h3 className="title">{project.title}</h3>
          <img
            className="card-image"
            src={project.projectImage}
            alt="project image"
          />
          <div className="card-links">
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
