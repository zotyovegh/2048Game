import React, { Component } from "react";
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
  }

  setScore = (value) => {
    let newValue = this.state.score + value;
    this.setState({ score: newValue });
  };

  render() {
    return (
      <div className="App">
        <div className="grid">
          <Grid
            score={this.setScore.bind(this)}
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
