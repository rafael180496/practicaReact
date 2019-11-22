import React, { Component, Fragment } from "react";
import RouterNot from "./routernot/routernot";
import Footer from "./generic/footer";

class Main extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <RouterNot />
        <Footer></Footer>
      </Fragment>
    );
  }
}
export default Main;
