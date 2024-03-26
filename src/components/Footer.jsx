import React from "react";
import { BsArrowUp } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="relative pl-10">
        <p className="border-line"></p>
        <a href="#home">
          <BsArrowUp className="arrow-icons up-arrow" />
        </a>
      </div>
      <div className="footer_section" id="footer">
        <p className="footer">Copyright © 2023. All rights reserved.</p>
        <p className="footer">
          Developed by <span>John doe </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
