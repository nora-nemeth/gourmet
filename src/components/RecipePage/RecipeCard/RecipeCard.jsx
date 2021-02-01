import React, { Component } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import ClockIcon from "./ClockIcon";
import PriceIcon from "./PriceIcon";
import PortionIcon from "./PortionIcon";
import LevelIcon from "./LevelIcon";
import AddToCart from "./AddToCart";

class RecipeCard extends Component {
  render() {
    return (
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
          <Card.Title>Palacsinta</Card.Title>
          <ListGroup variant="light">
            <Row>
              <Col className="col-1 m-2">
                <ClockIcon />
              </Col>
              <Col className="col-4 p-2">30 perc</Col>
              <Col className="col-1 m-2">
                <PriceIcon />
              </Col>
              <Col className="col-4 p-2">olcsó</Col>
            </Row>

            <Row>
              <Col className="col-1 m-2">
                <PortionIcon />
              </Col>
              <Col className="col-4 p-2">2 adag</Col>
              <Col className="col-1 m-2">
                <LevelIcon />
              </Col>
              <Col className="col-4  p-2	">könnyű</Col>
            </Row>
          </ListGroup>
          <Row>
            <Col className="pt-2" style={{ textAlign: "center" }}>
              <AddToCart />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default RecipeCard;
