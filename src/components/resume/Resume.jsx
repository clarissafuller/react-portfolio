import React from "react";
import "./resume.css";

const Resume = () => {
  const services = [
    {
      name: "Front End Development",
      description:
        "Implementing the client-side of websites, which involves coding and developing the visual aspects that users interact with directly. This includes working with HTML, CSS, and JavaScript frameworks like React",
    },
    { name: "Back End Development" },
    { name: "Front End Development" },
  ];
  return (
    <>
      <div className="pricing-card">
        {services.map((services, index) => (
          <h3></h3>
        ))}
      </div>
    </>
  );
};

export default Resume;
