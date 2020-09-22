import React, { Component, createRef } from "react";
import Grid from "../../2048game/src/Grid";
import WinningBox from "./WinningBox";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      rows: 4,
      columns: 4,
      score: 0,
      isWinningBox: false,
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
    this.setState({ isWinningBox: true });
  };

  resetGame = () => {
    this.gridRef.current.reset();
    this.setState({ score: 0, isWinningBox: false });
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
            <button id="newGameButton" onClick={this.resetGame}>
              New game
            </button>
          </div>
        </div>
        <div className="gridMain">
          <Grid
            ref={this.gridRef}
            score={this.setScore.bind(this)}
            gameOver={this.gameOver.bind(this)}
            gameWon={this.gameWon.bind(this)}
            rows={this.state.rows}
            columns={this.state.columns}
          />
          <WinningBox
            isOpen={this.state.isWinningBox}
            onClose={(e) => this.setState({ isWinningBox: false })}
            onNewGame={this.resetGame}
          ></WinningBox>
        </div>
      </div>
    );
  }
}
/**/
export default App;
