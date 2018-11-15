import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Heroes from "./components/Heroes";
import Home from "./components/Home";
import About from "./components/About";

// import heroes from './api';


class App extends Component {
  render() {
    return (
      <Content>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/heroes" component={Heroes}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Content>
    );
  }
}

export default App;
