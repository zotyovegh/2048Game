import React from "react";

const Cell = (props) => {
  let cell = () => {
    if (props.data.value !== 0) {
      return (
        <div
          className="cell"
          style={{
            color: getFontColor(props.data.value),
            background: getBackgroundColor(props.data.value),
          }}
        >
          {" "}
          {props.data.value}
        </div>
      );
    } else {
      return (
        <div
          className="cell"
          style={{
            background: "#cdc1b4",
          }}
        ></div>
      );
    }
  };
  return cell();
};

const getFontColor = (value) => {
  switch (value) {
    case 2:
    case 4:
      return "#776e65";
  }
  return "white";
};

const getBackgroundColor = (value) => {
  switch (value) {
    case 2:
      return "#EBDCD0";
    case 4:
      return "#E9DBBA";
    case 8:
      return "#E9A067";
    case 16:
      return "#F08151";
    case 32:
      return "#F2654F";
    case 64:
      return "#F1462C";
    case 128:
      return "#ecce72";
    case 256:
      return "#eccb61";
    case 512:
      return "#ecc750";
    case 1024:
      return "#ecc440";
    case 2048:
      return "#ecc12e";
    case 4096:
      return "#ef676c";
    case 8192:
      return "#ec4d58";
    case 16384:
      return "#e14339";
    case 32768:
      return "#71b4d5";
    case 65536:
      return "#5da0df";
    case 131072:
      return "#007cbe";
  }
};

export default Cell;
