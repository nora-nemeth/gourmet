import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";
import jsonData from "./RecipeCard/jsonData.json";
import {useState} from 'react';

function RecipePageSearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  const onSubmit = e => {
    e.preventDefault();
  }

  const onChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <Form className="flex-grow-1 pt-3" onSubmit={onSubmit}>
      <FormControl
        type="text"
        placeholder="Mit főznél ma?"
        className="bg-white text-dark pl-4 shadow-none"
        autoComplete="off"
        onChange={onChange}
      />
      {jsonData
        .filter((value) => {
          if (searchTerm == "") {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .map((value, key) => {
          return <div key={key}>{value.name}</div>;
        })}
    </Form>
  );
}

export default RecipePageSearchBox;
