import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Heroes from "./components/Heroes";
import Home from "./components/Home";
import About from "./components/About";
import NotFound404 from "./components/NotFound404";
import Search from "./components/Search";
import NewHeroe from "./components/NewHeroe";

import apiHeroes from "./api";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      heroes: apiHeroes.heroes,
      lastID: 8,
    }

  }

  addNewHeroe = (newHeroe) => {
    const heroes = [...this.state.heroes,newHeroe];
    const lastID = this.state.lastID + 1;
    this.setState({
      heroes,
      lastID, 
    })
  }

  render() {
    const { heroes, lastID } = this.state;
    return (
      <Content>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route 
            path="/heroes" 
            render={(props) => <Heroes {...props} heroes={heroes}/>}/>
          <Route
            path="/heroe"
            render={(props) => <NewHeroe {...props} addNewHeroe={this.addNewHeroe} lastID={lastID}/>}
          />
          <Route path="/about" component={About}/>
          <Route path="/busqueda/:search?" component={Search}/>
          <Route  component={NotFound404}/>
        </Switch>
      </Content>
    );
  }
}

export default App;
