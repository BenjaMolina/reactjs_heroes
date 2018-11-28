import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import HeroeList from "./HeroeList";
import HeroesDetail from "./HeroesDetail";


class Heroes extends Component {
  render() {
    const { match, heroes } = this.props;
    console.log(heroes.length)
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
        </Switch>
      </div>
    );
  }
}

export default Heroes;
