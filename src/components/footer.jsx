import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3 bg-light text-center fixed-bottom">
        <Container>
          <p className="text-muted">
            Németh Nóra
            <br />
            nemethnora1996@gmail.com
            <br />
            +36708841413
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
