import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { NotaInit } from "../../service/constantes";
class ModelNot extends Component {
  state = {
    nota: NotaInit,
    editmode: false
  };

  componentDidMount() {
    this.setState({
      nota: this.props.nota
    });
  }
  handleChange = e => {
    this.setState({
      nota: {
        ...this.state.nota,
        [e.target.name]: e.target.value
      }
    });
  };
  Editar = () => {
    this.setState({
      editmode: true
    });
  };

  Guardar = () => {
    this.setState({
      editmode: false
    });
  };

  render() {
    return (
      <Fragment>
        <div id={this.state.nota.key} className="modal modal-fixed-footer">
          <div className="modal-content">
            {!this.state.editmode ? (
              <Fragment>
                <h4>{this.state.nota.titulo}</h4>
                <p>{this.state.nota.contenido}</p>
              </Fragment>
            ) : (
              <Fragment>
                <div className="input-field ">
                  <input
                    value={this.state.nota.titulo}
                    id="titulo"
                    type="text"
                    className="validate"
                    name="titulo"
                    onChange={this.handleChange}
                  />
                  <label className="active" htmlFor="titulo">
                    Titulo
                  </label>
                </div>
                <div className="input-field">
                  <textarea
                    id="contenido"
                    className="materialize-textarea"
                    value={this.state.nota.contenido}
                    onChange={this.handleChange}
                    name="contenido"
                  />
                  <label htmlFor="contenido" className="active">
                    Contenido
                  </label>
                </div>
              </Fragment>
            )}
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className=" waves-effect waves-light btn-flat"
              onClick={!this.state.editmode ? this.Editar :this.Guardar}
            >
              {!this.state.editmode ? "Editar" : "Guardar"}
            </a>
            <a
              href="#!"
              className="modal-close waves-effect waves-purple btn-flat"
            >
              Regresar
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
ModelNot.propTypes = {
  nota: PropTypes.object.isRequired
};
export default ModelNot;
