import React from "react";
import "./Feedback.css";
import FeedbackCard from "./FeedbackCard";
import FeedbackCardOpen from "./FeedbackCardOpen";

const Feedback = (props) => {
  return (
    <div className="feedback">
      <div className="header">Название проекта 1.</div>
      <FeedbackCard />
      <FeedbackCardOpen />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <div className="header">Название проекта 2.</div>
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
    </div>
  );
};
export default Feedback;
