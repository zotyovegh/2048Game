import React from "react";

const GridRow = (props) => {
   let cells = props.cells.map((data, index) => {
    //return <GridCell key={index} data={data} />;
    return <div>p</div>
  });
 // {cells}

  return <div className="row">r</div>;
};

export default GridRow;
