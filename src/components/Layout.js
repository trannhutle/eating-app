import React, { Component } from "react";
import { Header } from "./layouts/Header";
import { withRouter } from "react-router";

export class Layout extends Component {
  render() {
    console.log(this);
    return (
      <div className="container">
        <Header {...this.props} />
        {this.props.children}
      </div>
    );
  }
}
export default withRouter(Layout);
