import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
class FloatBtn extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <div className="fixed-action-btn">
          <a
            className={`btn-floating btn-large waves-effect ${
              this.props.color
            } ${this.props.classAux} ${
              this.props.toolTip.trim() === "" ? "" : "tooltipped"
            }`}
            href="#!"
            data-position="top"
            data-tooltip={this.props.toolTip}
            onClick={() => this.props.accionClick()}
          >
            <i className="large material-icons">{this.props.icono}</i>
          </a>
        </div>
      </Fragment>
    );
  }
}
FloatBtn.protoTypes = {
  color: PropTypes.string.isRequired,
  icono: PropTypes.string.isRequired,
  accionClick: PropTypes.func.isRequired,
  classAux: PropTypes.string.isRequired,
  toolTip: PropTypes.string.isRequired
};
export default FloatBtn;
