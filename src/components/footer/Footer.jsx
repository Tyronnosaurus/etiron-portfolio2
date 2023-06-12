import React from "react";
import "./footer.css";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {

  return (
    <footer>

      <span>&copy; {new Date().getFullYear()} Eduard Tiron. All Rights Reserved.</span>

      {/* <div className="footer__socials">
        <a href="https://facebook.com" target="blank"><FaFacebook /></a>
        <a href="https://instagram.com" target="blank"><FaInstagram /></a>
        <a href="https://twitter.com" target="blank"><FaTwitter /></a>
      </div> */}

    </footer>
  );
};

export default Footer;
