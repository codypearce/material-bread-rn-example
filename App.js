import React, { Component } from "react";
import Root from "./Root";
import { BreadProvider } from "material-bread";

export default class App extends Component {
  render() {
    return (
      <BreadProvider>
        <Root />
      </BreadProvider>
    );
  }
}
