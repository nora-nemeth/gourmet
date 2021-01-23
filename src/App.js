import React, { Component } from "react";
import HeaderNavBar from "./components/navbar";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeaderNavBar />
        <h1>Hello, I am Gourmet!</h1>
        <button className="btn btn-secondary btn-sm">
          Bootstrap integration test
        </button>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
