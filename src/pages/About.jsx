import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";

const App = () => {
  return (
    <>
      <main className="main">
        <Header />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default App;
