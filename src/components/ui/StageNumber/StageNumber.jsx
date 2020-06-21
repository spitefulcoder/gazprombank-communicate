import "./StageNumber.css";
import React from 'react';

const StageNumber = (props) => {
  return (
    <div className="StageNumber" style={props.status == "sleep" ? {backgroundColor: "#C4C4C4"} : {backgroundColor: "#0D356C"}}>
        {props.status == "completed" ?
            <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 11.5L14.5 23" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M35.4319 4.39619C36.203 3.60532 36.1869 2.33909 35.3961 1.56799C34.6052 0.796894 33.339 0.812927 32.5679 1.6038L35.4319 4.39619ZM13.068 21.6038C12.2969 22.3947 12.3129 23.6609 13.1038 24.432C13.8947 25.2031 15.1609 25.1871 15.932 24.3962L13.068 21.6038ZM32.5679 1.6038L13.068 21.6038L15.932 24.3962L35.4319 4.39619L32.5679 1.6038Z" fill="white"/>
            </svg>
            :
            props.children
        }
    </div>
  );
};

export default StageNumber;