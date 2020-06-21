import React from "react";
import "./Ideas.css";
import Item from "../../components/Item/Item";
import Filter from "../../components/FilteredSearch/Filter";
import Header from '../../components/Header/Header'

const Ideas = (props) => {
  return (
    <div>
      <Header/>
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
