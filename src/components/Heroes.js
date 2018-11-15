import React, { Component } from "react";
import HeroeList from "./HeroeList";

import heroes from '../api';

export class Heroes extends Component {
  render() {
    return (
      <div className="container">
        <HeroeList heroes={heroes} />
      </div>
    );
  }
}

export default Heroes;
