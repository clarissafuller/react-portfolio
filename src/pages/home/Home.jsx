import React from "react";
import "./home.css";
import SocialLinks from "../../components/socialLinks/SocialLinks";
import Contact from "../../components/contact/Contact";
import Date from "../../components/date/Date";

const Home = () => {
  return (
    <>
      <div className="main-home">
        <div className="title-container">
          <h1>Hi I'm</h1>
          <h1>CLARISSA</h1>
          <h3 className="third-line-text">i build things for the web</h3>
          <div className="date-time">
            <Date />
          </div>
          <SocialLinks />
        </div>
        {/* <div className="contact-box">
          <Contact />
        </div> */}
      </div>
    </>
  );
};

export default Home;
