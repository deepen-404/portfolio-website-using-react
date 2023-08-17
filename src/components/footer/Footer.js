import React from "react";
import './Footer.css'
import { SiFacebook } from "react-icons/si";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Deepen
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <SiFacebook />
        </a>
        <a href="https://instagram.com">
          <PiInstagramLogoDuotone />
        </a>
        <a href="https://twitter.com">
          <FaTwitterSquare />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy;Deepen Timalsina. All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
