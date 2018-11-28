import React, { Component } from "react";
import validator from "validator";

export default class NewHeroe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroe: {
        id: 0,
        nombre: "",
        bio: "",
        img: "",
        aparicion: "",
        casa: "DC"
      },
      errors: []
    };
  }

  onChangeInput = ev => {
    const { value, name } = ev.target;

    this.setState({
      heroe: {
        ...this.state.heroe,
        [name]: value
      }
    });
  };

  validateValues(values) {
    const { nombre, bio, img, aparicion, casa } = values;
    const errors = {};
    if (validator.isEmpty(nombre)) {
      errors.nombre = "El campo nombre esta vacio";
    }
    if (validator.isEmpty(bio)) {
      errors.bio = "El campo biografia esta vacio";
    }
    if (validator.isEmpty(img)) {
      errors.img = "El campo imgagen esta vacio";
    }
    if (validator.isEmpty(aparicion)) {
      errors.aparicion = "El campo aparicion esta vacio";
    }
    if (validator.isEmpty(casa)) {
      errors.casa = "El campo casa esta vacio";
    }

    return errors;
  }

  newHeroe = ev => {
    ev.preventDefault();
    const { heroe } = this.state;
    const { addNewHeroe, history, lastID } = this.props;

    const errors = this.validateValues(heroe);
    
    if (errors.length <= 0) {
      heroe.id = lastID;
      addNewHeroe(heroe);
      history.goBack();
    } else {
      this.setState({
        errors
      });
    }
    // return;
  };

  render() {
    const { nombre, bio, img, aparicion, casa } = this.state.heroe;
    const { errors } = this.state;

    const { history } = this.props;
    return (
      <div className="container">
        <h3>Nuevo Heroe</h3>
        <hr />
        <form className="needs-validation" onSubmit={this.newHeroe}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.nombre ? 'is-invalid': ''}`}
              name="nombre"
              aria-describedby="emailHelp"
              placeholder="Nombre"
              value={nombre}
              onChange={this.onChangeInput}
            />
            {errors.nombre && (
              <div className="invalid-feedback">{errors.nombre}</div>
            )}
          </div>
          <div className="form-group">
            <label>Biografia</label>
            <input
              type="text"
              className={`form-control ${errors.bio ? 'is-invalid': ''}`}
              name="bio"
              aria-describedby="emailHelp"
              placeholder="Biografia"
              value={bio}
              onChange={this.onChangeInput}
            />
            {errors.bio && (
                <div className="invalid-feedback">{errors.bio}</div>
              )}
          </div>
          <div className="form-group">
            <label>Imagen</label>
            <input
              type="text"
              className={`form-control ${errors.img ? 'is-invalid': ''}`}
              name="img"
              aria-describedby="emailHelp"
              placeholder="URL"
              value={img}
              onChange={this.onChangeInput}
            />
            {errors.img && (
                <div className="invalid-feedback">{errors.img}</div>
              )}
          </div>
          <div className="form-group">
            <label>Aparicion</label>
            <input
              type="text"
              className={`form-control ${errors.aparicion ? 'is-invalid': ''}`}
              name="aparicion"
              aria-describedby="emailHelp"
              placeholder="Aparicion"
              value={aparicion}
              onChange={this.onChangeInput}
            />
            {errors.aparicion && (
                <div className="invalid-feedback">{errors.aparicion}</div>
              )}
          </div>
          <div className="form-group">
            <label>Casa</label>
            <select
              value={casa}
              name="casa"
              className={`form-control ${errors.casa ? 'is-invalid': ''}`}
              onChange={this.onChangeInput}
            >
              <option value="DC">DC</option>
              <option value="Marvel">Marvel</option>
            </select>
            {errors.casa && (
                <div className="invalid-feedback">{errors.casa}</div>
              )}
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
          <button
            className="btn btn-secondary ml-2"
            onClick={ev => {
              ev.preventDefault();
              history.goBack();
            }}
          >
            Regresar
          </button>
        </form>
      </div>
    );
  }
}
