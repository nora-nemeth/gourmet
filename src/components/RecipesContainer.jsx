import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import RecipeCard from "./RecipeCard";
import RecipePageSearchBox from "./RecipePageSearchBox";
import RecipePageMainAccordion from "./RecipePageMainAccordion";

class RecipesContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col className="col-9">
              <Row>
                <Col className="m-2">
                  <RecipeCard />
                </Col>
                <Col className="m-2">
                  <RecipeCard />
                </Col>
                <Col className="m-2">
                  <RecipeCard />
                </Col>
                <Col className="m-2">
                  <RecipeCard />
                </Col>
                <Col className="m-2">
                  <RecipeCard />
                </Col>
                <Col className="m-2">
                  <RecipeCard />
                </Col>
                <Col className="m-2">
                  <RecipeCard />
                </Col>
                <Col className="m-2">
                  <RecipeCard />
                </Col>
                <Col className="m-2">
                  <RecipeCard />
                </Col>
              </Row>
            </Col>
            <Col className="col-3 pt-2">
              <Row className="bg-light align-items-center">
                <Col className="d-flex justify-content-center">
                  <RecipePageSearchBox />
                </Col>
              </Row>

              <Row>
                <Col className="bg-light pt-2">
                  <RecipePageMainAccordion />
                </Col>
              </Row>

              <Row className="bg-light">
                <Col className="pt-5">
                  <Button variant="primary" className="m-3">
                    grill
                  </Button>
                  <Button variant="secondary" className="m-3">
                    szárnyas
                  </Button>
                  <Button variant="success" className="m-3">
                    vegán
                  </Button>
                  <Button variant="danger" className="m-3">
                    olcsó
                  </Button>
                  <Button variant="warning" className="m-3">
                    süti
                  </Button>
                  <Button variant="info text-dark" className="m-3">
                    rántott
                  </Button>
                  <Button variant="light text-dark" className="m-3">
                    tejmentes
                  </Button>
                  <Button variant="success" className="m-3">
                    sertés
                  </Button>
                  <Button variant="primary" className="m-3">
                    marha
                  </Button>
                  <Button variant="secondary" className="m-3">
                    magyaros
                  </Button>
                  <Button variant="dark" className="m-3">
                    zöldséges
                  </Button>
                  <Button variant="warning" className="m-3">
                    gyors
                  </Button>
                  <Button variant="danger" className="m-3">
                    saláta
                  </Button>
                  <Button variant="info text-dark" className="m-3">
                    rakott
                  </Button>
                  <Button variant="light text-dark" className="m-3">
                    torta
                  </Button>
                  <Button variant="success" className="m-3">
                    gyümölcsös
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default RecipesContainer;
