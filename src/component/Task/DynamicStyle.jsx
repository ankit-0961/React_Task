import React, { Component } from "react";

export class DynamicStyle extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
    };
  }
  ChangeColour() {
    this.setState({ isClicked: !this.state.isClicked });
  }
  render() {
    return (
      <div>
        <button
          onClick={this.ChangeColour.bind(this)}
          style={{
            backgroundColor: this.state.isClicked ? "green" : "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default DynamicStyle;
