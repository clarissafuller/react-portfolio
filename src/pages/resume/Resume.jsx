import React from "react";
import SkillsList from "../../components/skillsList/SkillsList";
import Services from "../../components/services/Services";
import CodeHighlights from "../../components/codeHighlights/CodeHighlights";
import Education from "../../components/education/Education";
import "./resume.css";

const Resume = () => {
  return (
    <div className="resume-box">
      <SkillsList />
      <div className="top-box">
        <Services />
        <Education />
        <CodeHighlights />
      </div>
    </div>
  );
};

export default Resume;
