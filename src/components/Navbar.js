import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    const styles = {
      mgBottom: {
        marginBottom: 20
      }
    };

    return (
      <nav
        className="navbar navbar-expand-lg  navbar-dark bg-dark"
        style={styles.mgBottom}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img
              src="./img/logo.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Heroes"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/heroes" className="nav-link">
                  Heroes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar heroe"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                type="button"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
