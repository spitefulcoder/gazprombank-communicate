import React from "react";
import "./FeedbackCard.css";
import { ArrowDownIcon } from "@holism/icons";
import { COLORS, Textarea } from "@holism/core";

const FeedbackCardOpen = (props) => {
  return (
    <div className="feedbackcard feedbackcard-open">
      <div className="name">Мухамедеева Руслана</div>
      <div className="fd-tag">Marketing</div>
      <div className="drop-arrow">
        <ArrowDownIcon size={20} color={COLORS.black} />
      </div>
      <div>
        {" "}
        <Textarea placeholder="Сопроводительное письмо" />
      </div>
    </div>
  );
};
export default FeedbackCardOpen;
