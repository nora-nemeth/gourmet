import React, { Component } from 'react';
import {
    ListGroup,
    Card,
    Badge,
  } from "react-bootstrap";
import RecipeDisplayListGroupItem from "./RecipeDisplayListGroupItem"  
  
class RecipeDisplayIngredients extends Component {
    render() { 
        return ( 
            <Card>
              <Card.Header>Hozzávalók</Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <RecipeDisplayListGroupItem />
                  <RecipeDisplayListGroupItem />
                  <RecipeDisplayListGroupItem />
                  <RecipeDisplayListGroupItem />
                  <RecipeDisplayListGroupItem />
                  <RecipeDisplayListGroupItem />
                </ListGroup>
              </Card.Body>
            </Card>
         );
    }
}
 
export default RecipeDisplayIngredients;