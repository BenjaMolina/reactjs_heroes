import React, { Component } from "react";
import heroesAPI from "../api";
import HeroeList from "./HeroeList";

export class Search extends Component {
  render() {
    const { search } = this.props.match.params;
    const heroes = heroesAPI.search(search);

    return (
      <div className="container">
        <h1>
          Buscando: <small>{search}</small>
        </h1>
        <br />
        {heroes.length > 0 ? (
          <HeroeList heroes={heroes}/>
        ) : (
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-info">
                No existen resultados con el termino: {search}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
