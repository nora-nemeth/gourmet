import React, { Component } from "react";
import { Row, Image } from "react-bootstrap";

class RecipeDisplayImage extends Component {
  render() {
    return (
      <Row
        className="justify-content-center"
        style={{ height: "300px", overflow: "hidden" }}
      >
        <Image
          src="https://i.pinimg.com/originals/02/8d/3f/028d3fda7e70ce183dec9d6ac957f210.jpg"
          className="recipe_img"
        ></Image>
      </Row>
    );
  }
}

export default RecipeDisplayImage;
