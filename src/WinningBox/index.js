import React, { Component } from "react";

class WinningBox extends Component {
  render() {
    let winningBox = <div className="winningBox"></div>;

    if (!this.props.isOpen) {
      winningBox = null;
    }
    return <div>{winningBox}</div>;
  }
}
export default WinningBox;
