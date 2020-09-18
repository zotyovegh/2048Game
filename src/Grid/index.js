import React, { Component } from "react";
import GridRow from "../GridRow";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.createGrid(props),
    };
  }

  createGrid = (props) => {
    let grid = [];

    for (let i = 0; i < props.rows; i++) {
      grid.push([]);
      for (let j = 0; j < props.columns; j++) {
        grid[i].push({
          x: j,
          y: i,
          value: 0,
        });
      }
    }

    for (let i = 0; i < 2; i++) {
      this.placeRandom(props, grid);
    }

    return grid;
  };

  componentDidMount() {
    document.onkeydown = this.onKeyPressed;
  }

  onKeyPressed = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 39:
      case 68:
        console.log("RIGHT");
        break;
      case 37:
      case 65:
        console.log("LEFT");
        break;
      case 40:
      case 83:
        console.log("DOWN");
        break;
      case 38:
      case 87:
        console.log("UP");
        break;
    }
  };

  placeRandom = (props, grid) => {
    let chosencell;
    do {
      let row = Math.floor(Math.random() * props.rows);
      let col = Math.floor(Math.random() * props.columns);
      chosencell = grid[row][col];
    } while (chosencell.value > 0);

    if (chosencell.value === 0) {
      chosencell.value = Math.floor(Math.random() * (2 - 1 + 1) + 1) * 2;
    }
  };

  render() {
    let rows = this.state.rows.map((row, index) => {
      return <GridRow cells={row} key={index} />;
    });
    return <div className="grid">{rows}</div>;
  }
}

export default Grid;
