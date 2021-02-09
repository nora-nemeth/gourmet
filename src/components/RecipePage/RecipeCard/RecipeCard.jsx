import React, { Component } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import ClockIcon from "./ClockIcon";
import PriceIcon from "./PriceIcon";
import PortionIcon from "./PortionIcon";
import LevelIcon from "./LevelIcon";
import AddToCart from "./AddToCart";
import RecipeCardData from "../../../JSON/RecipeCardData.json";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";

function RecipeCard() {

  const term = 'l';

  return RecipeCardData.filter(recipe => recipe.name.includes(term)).map((recipe) => (
    <Col className="mt-4">
      <Card
        className="mb-2 Recipe_Card"
      >
        <Link to="/recipeDisplay" style={{ textDecoration: 'none' }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/originals/02/8d/3f/028d3fda7e70ce183dec9d6ac957f210.jpg"
        />
        </Link>
        <Card.Body>
          <Link to="/recipeDisplay">
          <Card.Title className="Recipe_Display_Link">{recipe.name}</Card.Title>
          </Link>
          <ListGroup variant="light">
            <Row>
              <Col className="col-1 m-1">
                <ClockIcon />
              </Col>
              <Col className="col-3 p-1">{recipe.time}</Col>
              <Col className="col-1 m-1">
                <PriceIcon />
              </Col>
              <Col className="col-5 p-1">{recipe.price}</Col>
            </Row>

            <Row>
              <Col className="col-1 m-1">
                <PortionIcon />
              </Col>
              <Col className="col-3 p-1">{`${recipe.portion} adag`}</Col>
              <Col className="col-1 m-1">
                <LevelIcon />
              </Col>
              <Col className="col-4  p-1">{recipe.level}</Col>
            </Row>
          </ListGroup>
          <Row>
            <Col className="pt-2" style={{ textAlign: "center" }}>
              <AddToCart />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  ));
}

export default RecipeCard;



/*
PocParent {
  [term, updateTerm] = React.useState('');

  render() {
    return (
      <SearchComp termProp = term updateTermProp = updateTerm/>
      <ResultsComp termProp = term/>
    )
  }
}

SearchComp (termProp, updateTermProp) => {
  render () {
    ...
    onModify= updateTermProp(value)
  }
}

ResultsComp (termProp) {

  blabla.filter(termProp).map( ... );

}
*/