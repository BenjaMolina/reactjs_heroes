import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import HeroeList from "./HeroeList";
import HeroesDetail from "./HeroesDetail";

import heroesAPI from "../api";

class Heroes extends Component {
  render() {
    const { match } = this.props;
    const {heroes } = heroesAPI;
    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path={`${match.path}`}
            render={props => <HeroeList {...props} heroes={heroes} />}
          />
          <Route
            path={`${match.path}/:id`}
            component={HeroesDetail}
          />
          <Route
            path={`${match.path}/heroe`}
            render={(props) => <div>Nuevo Heroe</div>}
          />
        </Switch>
      </div>
    );
  }
}

export default Heroes;
