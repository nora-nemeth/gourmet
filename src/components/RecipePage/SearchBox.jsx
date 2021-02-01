import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";

class RecipePageSearchBox extends Component {
  render() {
    return (
      <Form className="flex-grow-1 pt-3">
        <FormControl
          type="text"
          placeholder="Mit főznél ma?"
          className="bg-white text-dark pl-4 shadow-none"
        />
      </Form>
    );
  }
}

export default RecipePageSearchBox;
