import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  const project = {
    title: "Top5",
    imageSrc: "src/assets/tr3trqtert.jpg",
    deployedLink: "https://top5-123-dd46eff5dfcf.herokuapp.com/",
    repositoryLink: "https://github.com/rossgilman402/Top5",
  };

  return (
    <div className="portfolio">
      <div className="project">
        <img src={project.imageSrc} alt={project.title} />
        <h3>{project.title}</h3>
        <div>
          <a href={project.deployedLink}>Deployed Project</a>
          <a href={project.repositoryLink}>Repository</a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
