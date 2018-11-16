import React, { Component } from "react";

export class Search extends Component {
  render() {
    const {search} = this.props.match.params;
    return (
      <div className="container">
        <h1>
          Buscando: <small>{ search }</small>
        </h1>
        <br />
        <div class="row">
          <div class="col-md-12">
            <div class="alert alert-info">
              No existen resultados con el termino: { search }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
