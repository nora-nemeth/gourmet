import React, { Component } from 'react';
import {
    Card,
  } from "react-bootstrap";
import RecipeDescription from "../../../JSON/RecipeDescription.json"
  

class RecipeDisplayDescription extends Component {
    render() { 
        return ( RecipeDescription.map((recipeDescription) => (
            <Card>
              <Card.Header>Elkészítés</Card.Header>
              <Card.Body>
                {recipeDescription.description}
              </Card.Body>
            </Card>
        )));
    }
}
 
export default RecipeDisplayDescription;