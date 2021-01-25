import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

class HeaderNavBar extends Component {
  render() {
    return (
      <Navbar
        className="navbar navbar-light bg-light sticky-top"
        variant="light"
        expand="md"
      >
        <Navbar.Brand href="/home" className="mr-5 ml-3">
          Gourmet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="Receptek"
              id="basic-nav-dropdown"
              className="mr-4"
            >
              <NavDropdown.Item href="#action/3.1">Előételek</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Levesek</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Főételek</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Desszertek</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink
                  to="/recipesContainer"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  className="mr-4 text-muted pt-2"
                >
                  Összes
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to="/shoppingList"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              className="mr-4 text-muted pt-2"
            >
              Bevásárlólista
            </NavLink>

            <NavLink
              to="/fromRest"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              className="mr-4 text-muted pt-2"
            >
              Maradékból finomat
            </NavLink>
            <NavLink
              to="/menu"
              className="mr-4"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              className="mr-4 text-muted pt-2"
            >
              Heti menü
            </NavLink>
            <NavLink
              to="/aboutMe"
              className="mr-4"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              className="mr-4 text-muted pt-2"
            >
              Rólam
            </NavLink>
          </Nav>
          <Nav className="justify-content-end">
            <Form>
              <FormControl
                type="text"
                placeholder="Mit főznél ma?"
                className="mr-sm-2 bg-white text-dark"
              />
            </Form>
            <Form>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNavBar;
