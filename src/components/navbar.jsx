import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar
        bg="navbar navbar-light bg-light justify-content-between"
        expand="lg"
      >
        <Navbar.Brand href="#home">Gourmet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="pl-2">
            <Nav.Link href="#home">Főoldal</Nav.Link>
            <NavDropdown title="Receptek" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Előételek</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Levesek</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Főételek</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Desszertek</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Összes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Bevásárlólista</Nav.Link>
            <Nav.Link href="#link">Mi van a hűtőben?</Nav.Link>
            <Nav.Link href="#link">Heti menü</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Mit főznél?"
              className="mr-sm-2 bg-white text-dark"
            />
          </Form>
          <Form inline>
            <Button variant="outline-white">
              <i className="bi bi-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
