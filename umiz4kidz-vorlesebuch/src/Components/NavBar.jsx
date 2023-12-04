import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className={`nav-items container ${isMenuOpen ? 'menu-open' : ''}`}>
          <div className="logo">
            <a href="/" className="zimu-class">
              <img src="https://umiz4kids.at/szimu%20klein.jpg" alt="Zimu" />
              <h4>UMIZ 4 KIDS</h4>
            </a>
          </div>
          <div className="burger-icon" onClick={toggleMenu}>
            {/* You can use an SVG icon or a Unicode character for the burger icon */}
            &#9776;
          </div>
          <ul className={isMenuOpen ? 'menu-open' : ''}>
            <li>
              <a href="/about">Das Projekt</a>
            </li>
            <li>
              <a href="/vorlesebuecher">Vorlesebücher</a>
            </li>
            <li>
              <a href="/mitlesebuecher">Mitlesebücher</a>
            </li>
            <li>
              <a href="/woerterbuecher">Wörterbücher</a>
            </li>
            <li>
              <a href="/vokabeltrainer/1">Vokabeltrainer</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
