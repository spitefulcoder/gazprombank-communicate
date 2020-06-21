import "./FunctionIcon.css";
import React from 'react';

const FunctionIcon = (props) => {
  return (
    <div className="FunctionIcon" style={{...props.style}}>
        {props.name}
    </div>
  );
};

export default FunctionIcon;