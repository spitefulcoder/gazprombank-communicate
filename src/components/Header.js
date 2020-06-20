import React from "react";
import Logo from "./ui/Logo";
import Profile from "./ui/Profile";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <Logo />
      <Profile />
    </div>
  );
};

export default Header;
