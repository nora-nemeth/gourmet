import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../index.css";

class HeaderNavBar extends Component {
  render() {
    return (
      <Navbar
        className="navbar navbar-light bg-light sticky-top"
        variant="light"
        expand="md"
      >
        <Navbar.Brand href="/" className="mr-5 ml-3">
          Gourmet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              className="mr-4"
              to="/recipesContainer"
              className="mr-4 text-muted pt-2 HeaderNavbar_NavLink"
            >
              Receptek
            </NavLink>
            <NavLink
              to="/shoppingList"
              className="mr-4 text-muted pt-2 HeaderNavbar_NavLink"
            >
              Bevásárlólista
            </NavLink>

            <NavLink
              to="/fromRest"
              className="mr-4 text-muted pt-2 HeaderNavbar_NavLink"
            >
              Maradékból finomat
            </NavLink>
            <NavLink
              to="/menu"
              className="mr-4"
              className="mr-4 text-muted pt-2 HeaderNavbar_NavLink"
            >
              Heti menü
            </NavLink>
          </Nav>

          <Nav className="justify-content-end p-2">
            <NavLink className="pr-4" to="/">
              <i className="bi bi-cart4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="gray"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </i>
            </NavLink>
            <NavLink to="/">
              <i className="bi bi-person-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="gray"
                  className="bi bi-person-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                </svg>
              </i>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default HeaderNavBar;
