import React, { Component } from "react";
import { APPNAMEFOOTER,  PALETCOLOR } from "../../service/constantes";
import { GetYear } from "../../service/utl";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className= {`page-footer footerTop ${PALETCOLOR.DARKPRICOL}`}>
        <div className="footer-copyright">
          <div className="container center">
            ©{GetYear()} Copyright {APPNAMEFOOTER}
            <a className="grey-text text-lighten-4 right" href="#!">

            </a>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
