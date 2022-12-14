import React, { Component } from "react";
import "./style.css";
import FullName from "./Components/Profile/fullName";
import Bio from "./Components/Profile/bio";
import Profession from "./Components/Profile/profession";
import HandleName from "./Components/Profile/handleName";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    firstName: "Hamza",
    lastName: "OUNI",
    fullName: "Hamza OUNI",
    age: 33,
    Gender: "Male",
    Interests: "Learning, Watching TV , Eating and Plaping",
  };

  render() {
    return (
      <>
        <body style={{ margin: "150px 100px", fontSize: "1.2rem" }}>
          <h1>Self-Profile </h1>
          <FullName
            firstName={this.state.firstName}
            lastName={this.state.lastName}
          >
            <p style={{ color: "#FFC300" }}>Glad to know you</p>
          </FullName>
          <br />
          <div style={{ border: "black double", marginTop: "20px" }} id="about">
            <Bio
              FullName={this.state.fullName}
              Age={this.state.age}
              Gender={this.state.Gender}
              Interests={this.state.Interests}
            />
          </div>
          <br />
          <div
            style={{ border: "black double", marginTop: "20px" }}
            id="profession"
          >
            <Profession />
          </div>
          <HandleName />
        </body>
        <footer id="contact"></footer>
      </>
    );
  }
}
Component.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  Gender: PropTypes.string,
  Interests: PropTypes.string,
  FullName: PropTypes.string,
};
export default App;
