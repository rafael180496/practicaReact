import React, { Component, Fragment } from "react";
import img404 from "../../img/error404.png";
import { PALETCOLOR } from "../../service/constantes";
class NotMatch extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="col s12 m4 l12">
          <h2 className={`header center ${PALETCOLOR.TEXTPRI}`}>
            Horizontal Card
          </h2>
          <div className="card horizontal hoverable BorderNot z-depth-2">
            <div className="card-image ">
              <img src={img404} alt="error404" className="imgCard" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5>
                  Lo sentimos la pagina no esta displonible o esta en
                  reparacion.
                </h5>
              </div>
              <div className="card-action ">
                <a href="/" className={`${PALETCOLOR.TEXTSEC}`}>
                  Por favor regrese al HOME.
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default NotMatch;
