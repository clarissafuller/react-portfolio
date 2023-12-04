import React from "react";
import SkillsList from "../../components/skillsList/SkillsList";
import Services from "../../components/services/Services";
import "./resume.css";

const Resume = () => {
  return (
    <>
      <div className="top-box">
        <SkillsList />
        <Services />
      </div>
    </>
  );
};

export default Resume;
