import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  NavLink,
  Accordion,
} from "react-bootstrap";

class RecipePageMainAccordion extends Component {
  state = {};
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
                      Kritériumok
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Card>
                        <Row>
                          <Col>
                            <label className="form-label" for="customRange1">
                              Idő
                            </label>
                            <div className="range">
                              <input
                                type="range"
                                className="form-range"
                                id="customRange1"
                                style={{ width: "100%" }}
                                min="0"
                                max="5"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <label className="form-label" for="customRange1">
                              Ár
                            </label>
                            <div className="range">
                              <input
                                type="range"
                                className="form-range "
                                id="customRange1"
                                style={{
                                  width: "100%",
                                  background: "red",
                                }}
                                min="0"
                                max="5"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <label className="form-label" for="customRange1">
                              Adag
                            </label>
                            <div className="range">
                              <input
                                type="range"
                                className="form-range"
                                id="customRange1"
                                style={{ width: "100%" }}
                                min="0"
                                max="5"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <label className="form-label" for="customRange1">
                              Összetettség
                            </label>
                            <div className="range">
                              <input
                                type="range"
                                className="form-range"
                                id="customRange1"
                                style={{ width: "100%" }}
                                min="0"
                                max="5"
                              />
                            </div>
                          </Col>
                        </Row>
                      </Card>
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
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default RecipePageMainAccordion;
