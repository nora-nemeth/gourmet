import React, { Component } from "react";
import { Button } from "react-bootstrap";

class CategoryButtons extends Component {
  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export default CategoryButtons;
