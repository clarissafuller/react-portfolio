import React from "react";
import "./app.css";
import Portfolio from "./components/portfolio/Portfolio";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <main className="main">
        <Header />
        <Portfolio />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default App;
