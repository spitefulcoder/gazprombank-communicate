import React from "react";
import "./Filter.css";

const Filter = (props) => {
  return (
    <div>
      <div className="filter">
        <div className="functions">Функции</div>
        <div className="technologies">Технологии</div>
        <div className="block">Блок</div>
        <div className="departments">Департамент</div>
      </div>
    </div>
  );
};

export default Filter;
