import React, { Component } from "react";
import { ListGroup, Badge } from "react-bootstrap";

class RecipeDisplayListGroupItem extends Component {
  render() {
    return (
      <ListGroup.Item
        variant="light"
        className="d-flex justify-content-between"
      >
        Ingredient from JSON
        <Badge variant="secondary">1 kg</Badge>
      </ListGroup.Item>
    );
  }
}

export default RecipeDisplayListGroupItem;
