import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from '../img/logo.ico';

class Navbar extends Component {

  constructor(props){
    super(props);

    this.state = {
      search: '',
    };

  }

  setSearch = (e) => {
    console.log(e.target.value);
    this.setState({
      search: e.target.value,
    })
  };

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
          <NavLink to="/" className="navbar-brand">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              
            />
          </NavLink>
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
              <li className="nav-item">
                <NavLink to="/" activeClassName="active" exact={true} className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/heroes" activeClassName="active" className="nav-link">
                  Heroes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" activeClassName="active" className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Buscar heroe"
                aria-label="Search"
                onChange={this.setSearch}
              />
              <NavLink to={`/busqueda/${this.state.search}`} activeClassName="active" className="btn btn-outline-primary my-2 my-sm-0">
                Buscar
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
