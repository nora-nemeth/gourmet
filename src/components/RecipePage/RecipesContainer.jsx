import React, { Component } from "react";
import { Container, Row, Col, CardDeck } from "react-bootstrap";
import RecipeCard from "./RecipeCard/RecipeCard";
import SearchBox from "./SearchBox";
import MainAccordion from "./MainAccordion";
import CategoryButtons from "./CategoryButtons";

class RecipesContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col className="col-9">
              <Row className="m-2" style={{justifyContent: "space-between"}}>
                <RecipeCard />
              </Row>  
            </Col>
            <Col className="col-3 pt-2">
              <Row className="bg-light align-items-center">
                <Col className="d-flex justify-content-center">
                  <SearchBox />
                </Col>
              </Row>

              <Row>
                <Col className="bg-light pt-2">
                  <MainAccordion />
                </Col>
              </Row>

              <Row className="bg-light">
                <Col className="pt-5">
                  <CategoryButtons />
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
