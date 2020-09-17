import React, { Component } from "react";
import Grid from "../../2048game/src/Grid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      rows: 9,
      columns: 9,
    };
  }

  render() {
    return (
      <div className="App">
        <div>
          <Grid rows={this.state.rows} columns={this.state.columns} />
        </div>
      </div>
    );
  }
}

export default App;
