import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from '../../assets/me.png';
import Socials from "./Socials";

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Deepen Timalsina</h1>
        <h5 className="text-light">FrontEnd Developer</h5>
        <CTA />
        <Socials/>
        <a href="#contact" className="scroll__down">Scroll down</a>
        <div className="me">
            <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
