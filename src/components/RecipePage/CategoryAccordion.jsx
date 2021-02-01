import React, { Component } from "react";
import {
  Row,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  NavLink,
  Accordion,
} from "react-bootstrap";

class CategoryAccordion extends Component {
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
              Kategóriák
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ListGroup>
                <ListGroupItem>
                  <NavLink>Előétel</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                  <NavLink>Leves</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                  <NavLink>Főétel</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                  <NavLink>Saláta</NavLink>
                </ListGroupItem>

                <ListGroupItem>
                  <NavLink>Desszert</NavLink>
                </ListGroupItem>
              </ListGroup>
              <Row className="justify-content-end m-3">
                <Button
                  className="btn-sm"
                  variant="secondary"
                  style={{ width: "30%" }}
                >
                  Keress
                </Button>
              </Row>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default CategoryAccordion;
