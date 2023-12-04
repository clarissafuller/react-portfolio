import React from "react";
import "./services.css";

const Services = () => {
  const services = [
    {
      name: "Front End Development",
      description:
        "Implementing the client-side of websites, which involves coding and developing the visual aspects that users interact with directly. This includes working with HTML, CSS, and JavaScript frameworks like React",
    },
    {
      name: "Back End Development",
      description:
        "Building the server-side of websites, managing databases, and handling server logic. Back-end developers often work with server-side programming languages and frameworks such as Node.js, Django, Flask, or Ruby on Rails",
    },
    {
      name: "Web Design",
      description:
        "Designing the visual layout and user interface (UI) of websites. This involves creating an aesthetically pleasing and user-friendly experience, often using design tools like Adobe XD, Figma, or Sketch.",
    },
    {
      name: "Web Application Development",
      description:
        "Creating dynamic and interactive web applications that go beyond traditional websites. Web applications often involve complex functionality and may utilize frameworks like React, Angular, or Vue.js",
    },
  ];
  return (
    <>
      <div className="services-card">
        {services.map((services, index) => (
          <div key={index} className="card-text">
            <h3 className="service-name">{services.name}</h3>
            <p>{services.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
