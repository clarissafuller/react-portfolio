import Portfolio from "../components/portfolio/Portfolio";
import About from "../components/about/About";

const Home = () => {
  return (
    <>
      <main className="main">
        <About />
        <Portfolio />
      </main>
    </>
  );
};

export default Home;
