import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const links = ["home", "about", "portfolio", "services", "skills", "contact"];
const Menu = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu_bar">
      <div className="menu" onClick={() => setOpen(!open)}>
        <h2>MENU</h2>
        <MdMenu className="menu_icon" />
      </div>
      {open && (
        <div className="links">
          <MdOutlineClose className="close" onClick={() => setOpen(!open)} />
          <p className="menu_title">Menu</p>
          <ul>
            {links.map((link) => (
              <li className="link" key={link}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
          <div className="socials">
            {data &&
              data.social_handles.map((social) => (
                <div className="social" key={social._id}>
                  <a href={social?.url}>
                    <img
                      src={social?.image?.url}
                      alt=""
                      className="social_icon"
                    />
                  </a>
                </div>
              ))}
          </div>
          <p className="footer">
            Developed by <span>John </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Menu;
