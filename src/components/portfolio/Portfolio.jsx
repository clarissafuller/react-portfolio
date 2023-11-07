import React from "react";
import "../portfolio/portfolio.css";

const Portfolio = () => {
  const project = {
    title: "Top5",
    imageSrc: "src/assets/tr3trqtert.jpg",
    deployedLink: "https://top5-123-dd46eff5dfcf.herokuapp.com/",
    repositoryLink: "https://github.com/rossgilman402/Top5",
  };

  return (
    <div className="portfolio">
      <h1 className="my-projects">My Projects</h1>
      <div className="project">
        <h3>{project.title}</h3>
        <img className="port-img" src={project.imageSrc} alt={project.title} />
        <div>
          <a className="link" href={project.deployedLink}>
            Deployed Project
          </a>
          <a className="link" href={project.repositoryLink}>
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
