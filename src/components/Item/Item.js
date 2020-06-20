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
      <div className="title">
        Название проекта название проекта название длинное
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
        tincidunt massa, at rhoncus quam. Vestibulum ut tincidunt massa. Nunc
        eget accumsan magna, et auctor odio.
      </div>
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
            <span>56</span>
          </div>
          <div className="dislike">
            <img src={like} alt="Против" />
            <span>31</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
