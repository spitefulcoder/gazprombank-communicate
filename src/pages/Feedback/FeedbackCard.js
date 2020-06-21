import React from "react";
import "./FeedbackCard.css";
import { ArrowDownIcon } from "@holism/icons";
import { COLORS } from "@holism/core";

const FeedbackCard = (props) => {
  return (
    <div className="feedbackcard">
      <div className="name">Мухамедеева Руслана</div>
      <div className="fd-tag">Marketing</div>
      <div className="drop-arrow">
        <ArrowDownIcon size={20} color={COLORS.black} />
      </div>
    </div>
  );
};

export default FeedbackCard;
