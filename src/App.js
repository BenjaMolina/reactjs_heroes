import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import HeroeList from "./components/HeroeList";

import heroes from './api';


class App extends Component {
  render() {
    return (
      <Content>
        <Navbar />
        <HeroeList heroes={heroes}/>
      </Content>
    );
  }
}

export default App;
