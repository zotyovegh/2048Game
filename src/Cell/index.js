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
      return "#E7C65E";
    case 256:
      return "#E8C350";
    case 512:
      return "#E8BE40";
    case 1024:
      return "#E7B723";
    case 2048:
      return "#C2B3A3";
  }
};

export default Cell;
