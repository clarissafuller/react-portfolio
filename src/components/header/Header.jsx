import React from "react";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li className="nav-item">
            <a className="item" href="/">
              Home
            </a>
            <a className="item" href="/about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
