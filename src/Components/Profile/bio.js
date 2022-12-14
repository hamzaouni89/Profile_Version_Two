import React, { Component } from "react";
class Bio extends Component {
  render() {
    const myStyle = { color: "blue", fontSize: "1.2rem", margin: "7px" };
    return (
      <div className="media">
        <div className="media-body">
          <h5
            className="mt-0"
            style={{ textTransform: "uppercase", margin: "10px" }}
          >
            {this.props.FullName}
          </h5>
          <span style={myStyle}>Age:</span> {this.props.Age} <br />
          <span style={myStyle}>Gender:</span>
          {this.props.Gender}
          <br />
          <span style={myStyle}>Interests:</span>
          {this.props.Interests}
          <br />
          <span style={myStyle}>Bio:</span>
          {this.props.FullName} is {this.props.Age} years old, I like{" "}
          {this.props.Interests}
        </div>
      </div>
    );
  }
}

export default Bio;
