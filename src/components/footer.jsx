import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer
        className="footer bg-light text-center"
        style={{ position: "fixed", left: "0", bottom: "0", width: "100%" }}
      >
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
