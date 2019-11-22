import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { OrdenarPosicion, AgregarActivate } from "../../service/pipes";
import LinkAct from "./LinkAct";
import { CambiarActivate } from "../../service/pipes";
import {  PALETCOLOR } from "../../service/constantes";

class Navbar extends Component {
  state = {
    routers: []
  };
  componentDidMount() {
    let routeraux = AgregarActivate(this.props.routers);
    routeraux = OrdenarPosicion(routeraux);
    this.setState({
      routers: routeraux
    });
  }
  isActivate = key => {
    let routersaux = CambiarActivate(this.state.routers, key);
    this.setState({
      routers: routersaux
    });
  };
  render() {
    return (
      <Fragment>
        <div className="navbar-fixed">
        <nav>
          <div className={`nav-wrapper ${PALETCOLOR.PRICOL }`}>
            <a href="#!" className="brand-logo ">
              {this.props.titulo}
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {this.state.routers.map(rut => {
                return (
                  <LinkAct
                    key={rut.key}
                    ruta={rut}
                    isActivate={this.isActivate}
                    indMovil={false}
                  />
                );
              })}
            </ul>
          </div>
        </nav>
        </div>

        <ul className="sidenav" id="mobile-demo">
          {this.state.routers.map(rut => {
            return (
              <LinkAct
                key={rut.key}
                ruta={rut}
                isActivate={this.isActivate}
                indMovil={true}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
}
Navbar.protoTypes = {
  titulo: PropTypes.string.isRequired,
  routers: PropTypes.array.isRequired
};
export default Navbar;
