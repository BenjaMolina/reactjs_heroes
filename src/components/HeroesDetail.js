import React, { Component } from "react";
import { Link } from "react-router-dom";

import heroesAPI from "../api";
import "../app.css";

class HeroesDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    const { history, heroes } = this.props;
    // const heroe = heroesAPI.getOne(Number(id));
    
    const heroe = heroes.find(heroe => {
      return heroe.id == id;
    });

    if (heroe) {
      return (
        <div className="container">
          <h1 className="animated fadeIn">
            {heroe.nombre}{" "}
            <small>({new Date(heroe.aparicion).getFullYear()})</small>
          </h1>
          <hr />

          <div className="row animated fadeIn fast">
            <div className="col-md-4">
              <img src={heroe.img} className="img-fluid" alt="" />

              <br />
              <br />

              {/* <Link to="/heroes" className="btn btn-outline-danger btn-block">
                Regresar
              </Link> */}
              <button
                type="button"
                className="btn btn-outline-danger btn-block"
                onClick={() => history.goBack()}
              >
                Regresar
              </button>
            </div>
            <div className="col-md-8">
              <h3>{heroe.nombre}</h3>
              <hr />
              <p>{heroe.bio}</p>

              <hr />
              <div>
                {heroe.casa == "Marvel" ? (
                  <img
                    className="img-logo"
                    src={require("../img/marvel.png")}
                    alt=""
                  />
                ) : (
                  <img
                    className="img-logo"
                    src={require("../img/DC.png")}
                    alt=""
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <h3 className="animated fadeIn">Heroe no encontrado</h3>
        <hr/>
        <div className="row animated fadeIn fast">
          <div className="col-md-4">
            <button
              type="button"
              className="btn btn-outline-danger btn-block"
              onClick={() => history.goBack()}
            >
              Regresar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroesDetail;
