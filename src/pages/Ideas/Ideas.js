import React from "react";
import "./Ideas.css";
import Item from "../../components/Item/Item";
import Filter from "../../components/FilteredSearch/Filter";

const Ideas = (props) => {
  return (
    <div>
      <Filter />
      <div className="ideas">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Ideas;
