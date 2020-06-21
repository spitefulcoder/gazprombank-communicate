import React from "react";
import "./Item.css";
import like from "../../assets/like.svg";
import { Link } from "@holism/core";
import { LongArrowRightIcon } from "@holism/icons";

const itemStyle = {
  borderColor: "black",
};

const Item = (props) => {
  return (
    <div className="item" style={itemStyle}>
      <div className="tag">IT</div>
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      <div className="bottom">
        <div className="more">
          <Link>
            <span>Подробнее</span>
            <LongArrowRightIcon size={20} />
          </Link>
        </div>
        <div className="score">
          <div className="like">
            <img src={like} alt="За" />
            <span>{props.likes}</span>
          </div>
          <div className="dislike">
            <img src={like} alt="Против" />
            <span>{props.dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
