import React from "react";
import avatar from "../../assets/avatar.svg";
import { ArrowDownIcon } from "@holism/icons";
import { COLORS } from "@holism/core";
import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <img className="profile-img" src={avatar} alt="аватар" />
      <div className="profile-name">Никита Корочкин</div>
      <div className="profile-arrow">
        <ArrowDownIcon size={20} color={COLORS.black} />
      </div>
    </div>
  );
};

export default Profile;
