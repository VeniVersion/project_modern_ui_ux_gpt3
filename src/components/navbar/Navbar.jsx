import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="sv__navbar">
      <div className="sv__navbar-links">
        <div className="sv__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="sv__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#sv">Sports Vision</a></p>
          <p><a href="#possibility">Vizworld</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="sv__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="sv__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="sv__navbar-menu_container scale-up-center">
          <div className="sv__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#sv">Sports Vision</a></p>
            <p><a href="#possibility">Vizworld</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="sv__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
