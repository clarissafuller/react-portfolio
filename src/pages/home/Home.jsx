import Portfolio from "../../components/portfolio/Portfolio";
import About from "../../components/about/About";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="main">
        <div className="title-container">
          <h1>Hi I'm</h1>
          <h2>CLARISSA</h2>
          <h1>i build things for the web</h1>
        </div>
        <div className="button-box">
          <button
            href="https://clarissafuller.com/about"
            className="contact-button"
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
