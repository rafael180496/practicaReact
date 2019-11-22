import React, { Component } from "react";
import Main from "./components/main";

import "materialize-css/dist/css/materialize.min.css";
import "material-icons/iconfont/material-icons.css"
import { CargaElementoMateria } from "./service/materialelem";

class App extends Component {
  state = {};
  componentDidMount() {
    CargaElementoMateria()
  }
  render() {
    return <Main />;
  }
}
export default App;
