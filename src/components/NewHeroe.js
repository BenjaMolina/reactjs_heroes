import React, { Component } from "react";


export default class NewHeroe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroe: {
        id:0,
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

  newHeroe = ev => {
    ev.preventDefault();
    const { heroe } = this.state;
    const { addNewHeroe, history, lastID} = this.props;
    
    heroe.id = lastID;

    addNewHeroe(heroe);
    history.goBack();
  };

  render() {
    const { nombre, bio, img, aparicion, casa } = this.state.heroe;
    const { errors } = this.state;

    const { history } = this.props;
    return (
      <div className="container">
        <h3>Nuevo Heroe</h3>
        <hr />
        <form onSubmit={this.newHeroe}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              aria-describedby="emailHelp"
              placeholder="Nombre"
              value={nombre}
              onChange={this.onChangeInput}
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group">
            <label>Biografia</label>
            <input
              type="text"
              className="form-control"
              name="bio"
              aria-describedby="emailHelp"
              placeholder="Biografia"
              value={bio}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group">
            <label>Imagen</label>
            <input
              type="text"
              className="form-control"
              name="img"
              aria-describedby="emailHelp"
              placeholder="URL"
              value={img}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group">
            <label>Aparicion</label>
            <input
              type="text"
              className="form-control"
              name="aparicion"
              aria-describedby="emailHelp"
              placeholder="Aparicion"
              value={aparicion}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group">
            <label>Casa</label>
            <select
              value={casa}
              name="casa"
              className="form-control"
              onChange={this.onChangeInput}
            >
              <option value="DC">DC</option>
              <option value="Marvel">Marvel</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
          <button
            className="btn btn-secondary ml-2"
            onClick={(ev) => {ev.preventDefault(); history.goBack()}}
          >
            Regresar
          </button>
        </form>
      </div>
    );
  }
}
