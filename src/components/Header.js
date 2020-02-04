import React from "react";
import Logo from "../logo.png";

function Header() {
  return (
    <img id="logo" style={{ height: 150 }} src={Logo} alt="Website Logo"></img>
  );
}

export default Header;
