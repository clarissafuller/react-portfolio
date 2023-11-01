import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <>
      <aside className="aside">
        <a href="#home" className="navLogo">
          <img src={Logo} alt="home logo" />
        </a>

        <nav className="nav">
          <div className="navMenu">
            <ul className="navList">
              <li className="navItem">
                <a href="#home" className="navLink">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="navItem">
                <a href="#about" className="navLink">
                  <i className="icon-user-following"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="navFooter">
          <span className="copyright">&copy; 2023 - 2024.</span>
        </div>
      </aside>

      <div className="navToggle">
        <i className="iconMenu"></i>
      </div>
    </>
  );
};

export default Sidebar;
