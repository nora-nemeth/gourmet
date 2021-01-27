import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends Component {
  people = [
    {
      name: "Mate",
      age: 23,
    },
    {
      name: "Nori",
      age: 24,
    },
    {
      name: "Tuba",
      age: 1,
    },
  ];

  renderNameList() {
    return this.people.map((person) => (
      <div>
        <p>{`Name: ${person.name}`}</p>
        <p>{`Age: ${person.age}`}</p>
      </div>
    ));
  }

  render() {
    return (
      <footer
        className="footer bg-light text-center"
        style={{
          left: "0",
          bottom: "0",
          width: "100%",
        }}
      >
        <Container className="text-muted">
          <Row>
            <Col>Németh Nóra</Col>
          </Row>
          <Row>
            <Col>nemethnora1996@gmail.com</Col>
          </Row>
          <Row>
            <Col>+36708841413</Col>
          </Row>
          <Row>
            <Col>
              <Link className="text-muted">Rólam</Link>
            </Col>
          </Row>
          <Row>
            <p>{"Remove"}</p>
            {this.renderNameList()}
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
