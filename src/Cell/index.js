import React from "react";

const Cell = (props) => {
  let cell = () => {
    if (props.data.value !== 0) {
      return <div className="cell"> {props.data.value}</div>;
    }else{
      return <div className="cell"></div>
    }
  };
  return cell();
};

export default Cell;
