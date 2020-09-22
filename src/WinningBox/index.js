import React, { Component } from "react";
import "./index.css";

class WinningBox extends Component {
  render() {
    let winningBox = (
      <div>
        <div className="winningMain"> </div>
        <div className="winningContent">
          <h1>You win!</h1>
          <div id="buttonHolder">
            <button className="boxButton" onClick={this.props.onClose}>Keep going!</button>
            <button className="boxButton" onClick={this.props.onNewGame}>Try again!</button>
          </div>
        </div>
      </div>
    );

    if (!this.props.isOpen) {
      winningBox = null;
    }
    return <div>{winningBox}</div>;
  }
}
export default WinningBox;
