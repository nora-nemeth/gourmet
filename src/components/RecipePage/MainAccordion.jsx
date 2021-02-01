import React, { Component } from "react";
import {
  Card,
  Button,
  Accordion,
} from "react-bootstrap";
import CriteriaAccordion from "./CriteriaAccordion";
import CategoryAccordion from "./CategoryAccordion";


class RecipePageMainAccordion extends Component {
  render() {
    return (
      <Accordion className="flex-grow-1">
        <Card>
          <Card.Header
            className="bg-white d-flex align-items-center"
            style={{ height: "40px" }}
          >
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey="0"
              className="text-muted pl-1 shadow-none"
              style={{ textDecoration: "none" }}
            >
              Részletes kereső
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <CriteriaAccordion />
              <CategoryAccordion />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default RecipePageMainAccordion;
