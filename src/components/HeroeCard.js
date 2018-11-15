import React, { Component } from "react";

class HeroeCard extends Component {
  render() {
    const {heroe} = this.props
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img
            className="card-img-top"
            src={heroe.img}
            alt="Card image cap"
          />
          <div className="card-body">
            <h3>{heroe.nombre}</h3>
            <p className="card-text">
              {heroe.bio}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted">{heroe.aparicion }</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroeCard;
