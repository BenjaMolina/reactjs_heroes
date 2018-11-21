import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeroeCard extends Component {
  render() {
    const { heroe } = this.props;
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img className="card-img-top" src={heroe.img} alt="Card image cap" />
          <div className="card-body">
            <h3>{heroe.nombre}</h3>
            <p className="card-text">{heroe.bio}</p>

            <small className="text-muted">{heroe.aparicion}</small>
            <Link
              to={`/heroes/${heroe.id}`}
              className="btn btn-outline-primary btn-sm btn-block"
            >
              View
            </Link>

            {/* <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default HeroeCard;
