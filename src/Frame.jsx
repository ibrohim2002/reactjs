import React, { Component } from "react";

export default class Frame extends Component {
  render() {
    return (
      <div style={{ padding: "10px", border: "1px solid red", margin: "10px" }}>
        {this.props.children}
      </div>
    );
  }
}
