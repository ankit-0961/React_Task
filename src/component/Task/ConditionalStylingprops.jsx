import React, { Component } from "react";

class ConditionalStylingprops extends Component {
  constructor() {
    super();
  }
  render() {
    const { Status } = this.props;
    let style = {};

    if (Status === "success") {
      style = { color: "green" };
    } else if (Status === "error") {
      style = { color: "red" };
    } else if (Status === "pending") {
      style = { color: "orange" };
    } else {
      style = { color: "black" };
    }

    return (
      <div>
        <h3 style={style}>Current Status :{Status}</h3>
      </div>
    );
  }
}

export default ConditionalStylingprops;
