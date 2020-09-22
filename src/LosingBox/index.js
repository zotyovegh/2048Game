import React, { Component } from "react";

class LosingBox extends Component {
  render() {
    let losingBox = (
      <div>
        <div className="losingMain"> </div>
        <div className="losingContent">
          <h1>You win!</h1>
          <div id="buttonHolder">
            <button className="boxButton" onClick={this.props.onClose}>Keep going!</button>
            <button className="boxButton" onClick={this.props.onNewGame}>Try again!</button>
          </div>
        </div>
      </div>
    );

    if (!this.props.isOpen) {
      losingBox = null;
    }
    return <div>{losingBox}</div>;
  }
}
export default LosingBox;
