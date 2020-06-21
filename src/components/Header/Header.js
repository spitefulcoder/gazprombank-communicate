import React from "react";
import Logo from "../ui/Logo/Logo";
import Profile from "../ui/Profile/Profile";
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
