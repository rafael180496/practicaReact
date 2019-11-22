import React, { Component, Fragment } from "react";
import { PALETCOLOR, NotaInit } from "../../service/constantes";
import PropTypes from "prop-types";
import {
  ValidarNotas,
  TransformarTitulo,
  TransformarContenido
} from "../../service/pipes";
import ModelNot from "./modalnota";


class Nota extends Component {
  state = {
    nota: NotaInit,
    editar: false
  };
  componentDidMount() {
    let notaaux = ValidarNotas(this.props.nota);
    this.setState({
      nota: notaaux
    });
  }
  render() {
    return (
      <Fragment>
        <div className="col s12 m6 l6 xl4">
          <div className="card darken-3  BorderCard">
            <div className="card-content">
              <span className={`card-title ${PALETCOLOR.TEXTPRI}`}>
                {TransformarTitulo(this.state.nota.titulo)}{" "}
                <a
                  className={`waves-effect right tooltipped ${
                    PALETCOLOR.TEXTSEC
                  } dropdown-trigger`}
                  href="#!"
                  data-position="top"
                  data-tooltip="Opciones"
                  data-target="op1"
                >
                  <i className="material-icons">more_vert</i>
                </a>
                <ul id="op1" className="dropdown-content DrowCard darken-3">
                  <li className="DrowCardContent">
                    <a href="#!" className="AccionCard  center black-text">
                      Editar
                    </a>
                  </li>
                  <li className="DrowCardContent">
                    <a href="#!" className="AccionCard center  black-text">
                      Eliminar
                    </a>
                  </li>
                </ul>
                <a
                  className={`waves-effect right tooltipped ${
                    this.state.nota.indFavorite
                      ? PALETCOLOR.TEXTACC
                      : PALETCOLOR.TEXTSEC
                  }`}
                  data-position="bottom"
                  data-tooltip="Favorito"
                  href="#!"
                >
                  <i className="material-icons">favorite</i>
                </a>
                <a
                  className={`waves-effect right tooltipped ${
                    PALETCOLOR.TEXTSEC
                  } modal-trigger`}
                  data-position="top"
                  data-tooltip="Ver"
                  href={`#${this.state.nota.key}`}
                >
                  <i className="material-icons">zoom_in</i>
                </a>
              </span>

              <p>{TransformarContenido(this.state.nota.contenido)}</p>
            </div>
          </div>
        </div>
        <ModelNot nota={this.props.nota}/>
      </Fragment>
    );
  }
}
Nota.propTypes = {
  nota: PropTypes.object.isRequired
};
export default Nota;
