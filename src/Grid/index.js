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
      let chosencell;
      do {
        let row = Math.floor(Math.random() * props.rows);
        let col = Math.floor(Math.random() * props.columns);
        chosencell = grid[row][col];
      } while (chosencell.value > 0);

      if (chosencell.value === 0) {
        chosencell.value = Math.floor(Math.random() * (2 - 1 + 1) + 1) * 2;
      }
    }

    return grid;
  };

  getEmptyGrid = () => {
    let grid = [];

    for (let i = 0; i < this.props.rows; i++) {
      grid.push([]);
      for (let j = 0; j < this.props.columns; j++) {
        grid[i].push({
          x: j,
          y: i,
          value: 0,
        });
      }
    }
    return grid;
  };

  componentDidMount() {
    document.onkeydown = this.onKeyPressed;
  }

  slide = (row) => {
    let array = [];
    for (let i = 0; i < 4; i++) {
      array[i] = row[i].value;
    }
    let arr = array.filter((val) => val);
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    for (let i = 0; i < 4; i++) {
      row[i].value = arr[i];
    }

    return row;
  };

  combine = (row) => {
    for (let i = 3; i >= 1; i--) {
      let a = row[i].value;
      let b = row[i - 1].value;
      if (a == b) {
        row[i].value = a + b;
        row[i - 1].value = 0;
      }
    }
    return row;
  };

  flip = (grid) => {
    for (let i = 0; i < 4; i++) {
      grid[i].reverse();
    }
    return grid;
  };

  rotate = (grid) => {
    let newGrid = this.getEmptyGrid();
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        newGrid[i][j] = grid[j][i];
      }
    }
    return newGrid;
  };  

  placeRandom = () => {
    let grid = this.state.rows;
    let row, col;
    let chosencell;
    do {
      row = Math.floor(Math.random() * this.props.rows);
      col = Math.floor(Math.random() * this.props.columns);
      chosencell = grid[row][col];
    } while (chosencell.value > 0);

    if (chosencell.value === 0) {
      chosencell.value = Math.floor(Math.random() * (2 - 1 + 1) + 1) * 2;
    }
    grid[row][col] = chosencell;
    this.setState({ rows: grid });
  };

  doSlide = (grid) => {
    for (let i = 0; i < 4; i++) {
      grid[i] = this.slide(grid[i]);
      grid[i] = this.combine(grid[i]);
      grid[i] = this.slide(grid[i]);
    }
    return grid;
  };

  keyEvents = (direction) => {
    let grid = this.state.rows;
    let flipped = false;
    let rotated = false;
    if (direction === "right") {
      grid = this.doSlide(grid);
    } else if (direction === "left") {
      grid = this.flip(grid);
      grid = this.doSlide(grid);

      flipped = true;
    } else if (direction === "down") {
      grid = this.rotate(grid);
      grid = this.doSlide(grid);

      rotated = true;
    } else if (direction === "up") {
      grid = this.rotate(grid);
      grid = this.flip(grid);
      grid = this.doSlide(grid);

      rotated = true;
      flipped = true;
    }

    if (flipped) {
      grid = this.flip(grid);
    }
    if (rotated) {
      grid = this.rotate(grid);
      grid = this.rotate(grid);
      grid = this.rotate(grid);
    }

    this.setState({ rows: grid });
    this.placeRandom();
  };

  onKeyPressed = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 39:
      case 68:
        this.keyEvents("right");
        break;
      case 37:
      case 65:
        this.keyEvents("left");
        break;
      case 40:
      case 83:
        this.keyEvents("down");
        break;
      case 38:
      case 87:
        this.keyEvents("up");
        break;
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
