import React, { Component, createRef } from "react";
import Grid from "../../2048game/src/Grid";

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
    let newValue = this.state.score + value;
    this.setState({ score: newValue });
  };

  gameOver = () => {
    console.log("Game over");
    //Display stuff
  };

  gameWon = () => {
    console.log("Won");
    //Display stuff
  };

  resetGame = () => {
    this.gridRef.current.reset();
    this.setState({ score: 0 });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="score">
            <p id="scoreTitle">Score</p>
            <p id="scoreNum">{this.state.score} </p>
          </div>
          <div className="newGame">
            <button id="newGameButton">New game</button>
          </div>
        </div>
        <div>
          <Grid
            ref={this.gridRef}
            score={this.setScore.bind(this)}
            gameOver={this.gameOver.bind(this)}
            gameWon={this.gameWon.bind(this)}
            rows={this.state.rows}
            columns={this.state.columns}
          />
        </div>
      </div>
    );
  }
}
/**/
export default App;
