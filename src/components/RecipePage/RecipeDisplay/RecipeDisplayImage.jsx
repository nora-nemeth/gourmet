import React, { Component } from "react";
import { Row, Image } from "react-bootstrap";
import pancake from '../../../media/pancake.jpg';


class RecipeDisplayImage extends Component {
  render() {
    return (
      <Row
        className="justify-content-center"
        style={{ height: "300px", overflow: "hidden" }}
      >
        <Image
          src={pancake}
          className="recipe_img"
        ></Image>
      </Row>
    );
  }
}

export default RecipeDisplayImage;
