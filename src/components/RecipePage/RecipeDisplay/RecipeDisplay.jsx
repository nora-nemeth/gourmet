import React, { Component } from "react";
import {
  Col,
  Row,
  Container,
} from "react-bootstrap";
import RecipeDisplayImage from "./RecipeDisplayImage"
import RecipeDisplayIngredients from "./RecipeDisplayIngredients"
import RecipeDisplayDescription from "./RecipeDisplayDescription"

class RecipeDisplay extends Component {
  render() {
    return (
      <Container fluid>
        <RecipeDisplayImage />
        <Row className="m-4">
          <Col lg={4}>
            <RecipeDisplayIngredients />
          </Col>
          <Col lg={8}>
            <RecipeDisplayDescription />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecipeDisplay;
