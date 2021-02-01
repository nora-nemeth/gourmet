import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer
        className="footer bg-light text-center"
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
        </Container>
      </footer>
    );
  }
}

export default Footer;
