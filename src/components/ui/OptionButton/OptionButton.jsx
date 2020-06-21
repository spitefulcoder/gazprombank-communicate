import "./OptionButton.css"
import React from 'react'

const OptionButton = (props) => {
  return (
    <div className={"OptionButton " + props.type}>
        {props.name}
    </div>
  );
};

export default OptionButton;