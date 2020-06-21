import React from "react";
import avatar from "../../../assets/avatar.svg";
import Dropdown from "../Dropdown/Dropdown";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <img className="profile-img" src={avatar} alt="аватар" />
      <div className="profile-name">Никита Корочкин</div>
      <Dropdown />
    </div>
  );
};

export default Profile;
