import React, { Component } from "react";

class Keypad extends Component {
  handlePasswordType = event => {
    console.log("Entering password...");
  };
  render() {
    return <input type="password" onKeyUp={this.handlePasswordType} />;
  }
}

export default Keypad;
