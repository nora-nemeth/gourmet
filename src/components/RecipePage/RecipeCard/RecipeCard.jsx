import React, { Component } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import ClockIcon from "./ClockIcon";
import PriceIcon from "./PriceIcon";
import PortionIcon from "./PortionIcon";
import LevelIcon from "./LevelIcon";
import AddToCart from "./AddToCart";
import jsonData from "./jsonData.json";

class RecipeCard extends Component {

  render() {
    return jsonData.map((recipe) => (
      <Col>
        <Card
          className="mb-2"
          style={{
            display: "flex",
            width: "18rem",
          }}
        >
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/02/8d/3f/028d3fda7e70ce183dec9d6ac957f210.jpg"
          />
          <Card.Body>
            <Card.Title>{recipe.name}</Card.Title>
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
}

export default RecipeCard;
