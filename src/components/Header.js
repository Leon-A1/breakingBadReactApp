import React from "react";
import logo from "../Assets/img/logo.png";

const Header = () => {
  return (
    <header className="center">
      <img style={{ maxWidth: 100, marginBottom: 15 }} src={logo} alt="" />
    </header>
  );
};

export default Header;
