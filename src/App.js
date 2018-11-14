import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Body from "./components/Body";

class App extends Component {
  render() {
    return (
      <Content>
        <Navbar />
        <Body />
      </Content>
    );
  }
}

export default App;
