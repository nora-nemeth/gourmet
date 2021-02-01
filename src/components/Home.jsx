import React, { Component } from "react";
import { Carousel, Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={4000} style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              src="https://www.lovefoodhatewaste.nsw.gov.au/sites/default/files/styles/carousel_banner/public/2018-06/PT20180613_LFHW_025.jpg?h=c793bf8d&itok=B_brBZBr"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000} style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              src="https://i.ytimg.com/vi/Z4Sss9ZAoLk/maxresdefault.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={4000} style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              src="https://post.healthline.com/wp-content/uploads/2020/07/pizza-beer-1200x628-facebook-1200x628.jpg"
              alt="Third slide"
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
