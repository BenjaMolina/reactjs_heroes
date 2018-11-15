import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const styles = {
      mgBottom: {
        marginBottom: 20
      }
    };

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={styles.mgBottom}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="./img/logo.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Heroes
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
