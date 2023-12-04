import Location from "../../components/location/Location";
import Github from "../../components/github/Github";
import SocialLinks from "../../components/socialLinks/SocialLinks";
import "./about.css";

const App = () => {
  return (
    <div className="about">
      <div className="top-container">
        <div className="text container">
          <h2 className="name-text">Clarissa Fuller</h2>
          <p className="about-text">
            I am a passionate developer with a love for coding. I enjoy creating
            web applications and contributing to open-source projects.
          </p>
        </div>
        <img className="pic" src="/images/polaroid.png" alt="clarissa image" />
      </div>
      <div className="bottom-container">
        {/* <img className="pic2" src="/images/squiggly.png" alt="clarissa image" /> */}
        <div className="github-stats"></div>
        <Location />
      </div>
      <SocialLinks />
    </div>
  );
};

export default App;
