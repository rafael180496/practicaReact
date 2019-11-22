import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotMatch from "../generic/nomatch";
import Navbar from "../generic/header";
import { APPNAME, ROUTERS_APP } from "../../service/constantes";

class RouterNot extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Navbar titulo={APPNAME} routers={ROUTERS_APP} />
        <div className="container ContenedorMargin">
          <div className="row">
            <Switch>
              {ROUTERS_APP.map(rut => {
                return (
                  <Route
                    key={"rut" + rut.pos}
                    exact
                    path={rut.path}
                    component={rut.component}
                  />
                );
              })}
              <Route component={NotMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default RouterNot;
