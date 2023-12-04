import React from "react";

function Header() {
  return (
    <header className="header">
      <nav>
        <div>
          <div className="nav-item">
            <a className="item" href="/">
              Home
            </a>
            <a className="item" href="/about">
              About
            </a>
            <a className="item" href="/portfolio">
              Portfolio
            </a>
            <a className="item" href="/resume">
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
