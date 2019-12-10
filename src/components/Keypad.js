import React, { Component } from "react";

class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <input
        onKeyUp={() => {
          console.log("Entering password...");
        }}
        type="password"
      />
    );
  }
}

export default Keypad;
