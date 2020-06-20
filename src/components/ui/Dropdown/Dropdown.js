import React from "react";
import "./Dropdown.css";
import { ArrowDownIcon } from "@holism/icons";
import { COLORS } from "@holism/core";

function toggle() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log("1");
}

const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <div className="dropbtn profile-arrow" onClick={toggle}>
        <ArrowDownIcon size={20} color={COLORS.black} />
      </div>
      <div className="dropdown-content" id="myDropdown">
        <a href="/ideas">Профиль</a>
        <a href="/ideas">Мои отклики</a>
        <a href="/ideas">Мои проекты</a>
      </div>
    </div>
  );
};
export default Dropdown;
