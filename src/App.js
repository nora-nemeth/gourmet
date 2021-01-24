import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderNavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RecipesContainer from "./components/RecipesContainer";
import ShoppingList from "./components/ShoppingList";
import FromRest from "./components/FromRest";
import Menu from "./components/Menu";
import AboutMe from "./components/AboutMe";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <HeaderNavBar />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/recipesContainer">
              <RecipesContainer />
            </Route>
            <Route exact path="/shoppingList">
              <ShoppingList />
            </Route>
            <Route exact path="/fromRest">
              <FromRest />
            </Route>
            <Route exact path="/menu">
              <Menu />
            </Route>
            <Route exact path="/aboutMe">
              <AboutMe />
            </Route>
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
