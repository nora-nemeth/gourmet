import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderNavBar from "./components/HeaderNavbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RecipesContainer from "./components/RecipePage/RecipesContainer";
import ShoppingList from "./components/ShoppingList";
import FromRest from "./components/FromRest";
import Menu from "./components/Menu";
import AboutMe from "./components/AboutMe";
import "./index.css";
import RecipeDisplay from "./components/RecipePage/RecipeDisplay/RecipeDisplay";

class App extends React.Component {
  render() {
    return (
      <Router>
        <HeaderNavBar />
        <Switch>
          <Route exact path="/">
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
          <Route exact path="/recipeDisplay">
            <RecipeDisplay />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
