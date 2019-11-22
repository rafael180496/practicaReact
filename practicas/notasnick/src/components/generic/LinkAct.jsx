import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class LinkAct extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <li className={this.props.ruta.activate ? "active" : ""}>
          <Link
            to={this.props.ruta.path}
            onClick={()=>this.props.isActivate(this.props.ruta.key)}
            className={`waves-effect ${
              this.props.indMovil ? "waves-purple" : "waves-light"
            }`}
          >
            {this.props.ruta.descrip}
          </Link>
        </li>
      </Fragment>
    );
  }
}

LinkAct.protoTypes = {
  ruta: PropTypes.object.isRequired,
  key: PropTypes.string.isRequired,
  indMovil: PropTypes.bool.isRequired,
  isActivate: PropTypes.func.isRequired
};
export default LinkAct;
