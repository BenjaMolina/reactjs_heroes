import React, { Component } from 'react'

export class NotFound404 extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Error 404</h1>
            <p className="lead">Recurso no encontrado</p>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound404
