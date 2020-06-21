import "./CreateIdeaOption.css"
import React from 'react'

const CreateIdeaOption = (props) => {
  return (
    <div className={"CreateIdeaOption" + (props.values.includes(props.id) ? "checkedOption" : "")}>
        {props.name}
    </div>
  );
};

export default CreateIdeaOption;