import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <main className="main">
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default App;
