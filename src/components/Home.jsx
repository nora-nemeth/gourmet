import React, { Component } from "react";
import { Carousel, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import pretzel from '../media/pretzel.jpg';
import cherry from '../media/cherry.jpg';
import fruits from '../media/fruits.jpg';



class Home extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={4000} style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={pretzel}
              alt="Salted pretzel"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000} style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={cherry}
              alt="Cherries"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000} style={{ height: "400px" }}>
            <img
              className="d-block w-100"
              src={fruits}
              alt="Breakfast with fruits"
            />
          </Carousel.Item>
        </Carousel>

        <Container
          className="shadow-lg p-3 bg-white rounded Home_SearchBox"
        >
          <Form>
            <input
              className="search-form border-0 Home_Form"
              type="text"
              placeholder="Mit főznél ma?"
              name="search"
            ></input>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Home;
