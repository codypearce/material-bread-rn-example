import React, { Component } from "react";
import Root from "./Root";
import { YellowBox } from "react-native";
import { BreadProvider } from "material-bread";

export default class App extends Component {
  render() {
    YellowBox.ignoreWarnings(["Require cycle:"]);
    return (
      <BreadProvider>
        <Root />
      </BreadProvider>
    );
  }
}
