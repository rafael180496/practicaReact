import React, { Component, Fragment } from "react";
import { PALETCOLOR } from "../../service/constantes";
import FloatBtn from "../../components/generic/btns";
import ListaNot from "./listanotas";
import { CargaElementoMateria } from "../../service/materialelem";

class MaNotas extends Component {
  state = {
    indAgregar: false
  };
  AgregarNota = () => {
    this.setState({
      indAgregar: true
    });
  };
  componentDidMount(){
    CargaElementoMateria()
  }
  render() {
    return (
      <Fragment>
        <blockquote className={PALETCOLOR.TEXTSEC}>
          <h5>Lista de notas:</h5>
        </blockquote>
        <ListaNot></ListaNot>
        <FloatBtn
          color={PALETCOLOR.ACCENTCOL}
          icono="add"
          accionClick={this.AgregarNota}
          classAux={
            this.state.indAgregar
              ? "scale-transition scale-out"
              : "scale-transition "
          }
          toolTip="Agregar"
        />
      </Fragment>
    );
  }
}
export default MaNotas;
