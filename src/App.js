import React, { Component, createRef } from "react";
import Grid from "../../2048game/src/Grid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      rows: 4,
      columns: 4,
      score: 0,
    };
    this.gridRef = createRef();
  }

  setScore = (value) => {
    console.log(value);
    let newValue = this.state.score + value;
    this.setState({ score: newValue });
  };

  gameOver = () => {
    //Display stuff
    // this.gridRef.current.reset();
    // this.setState({ score: 0 });
  };

  render() {
    return (
      <div className="App">
        <div className="grid">
          <Grid
            ref={this.gridRef}
            score={this.setScore.bind(this)}
            gameOver={this.gameOver.bind(this)}
            rows={this.state.rows}
            columns={this.state.columns}
          />
        </div>
        <div className="score">
          <p>{this.state.score} </p>
        </div>
      </div>
    );
  }
}

export default App;
