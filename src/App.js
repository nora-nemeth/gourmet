import React, { Component } from "react";
import NavBar from "./components/navbar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <h1>Hello, I am Gourmet!</h1>
        <button className="btn btn-secondary btn-sm">
          Bootstrap integration test
        </button>
      </React.Fragment>
    );
  }
}

export default App;
