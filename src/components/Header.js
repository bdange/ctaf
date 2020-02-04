import React from "react";
import Logo from "../logo.png";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <ul className="header">
      <li className="flex-item container">
        {/* <div className="social-left">
          <SocialIcon
            url="https://www.instagram.com/cestafric/"
            target="_blank"
          />
        </div>
        <div className="social">
          <SocialIcon
            url="https://www.facebook.com/cestafric/"
            target="_blank"
          />
        </div> */}
      </li>
      <li className="flex-item">
        <img
          id="logo"
          style={{ height: 150 }}
          src={Logo}
          alt="Website Logo"
        ></img>
      </li>
      <li className="flex-item right">{/* <h1>Links</h1> */}</li>
    </ul>
  );
}

export default Header;
