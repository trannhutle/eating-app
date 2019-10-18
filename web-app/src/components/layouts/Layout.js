import React, { Component } from "react";
import { Header } from "./Header";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
export class Layout extends Component {
  render() {
    console.log("this is log from layout: ", this);
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <div className="container">
            <Header {...this.props} />
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}
function mapPropToState({ loadings, orders }) {
  console.log("loadings", loadings);
  const totalItems = orders.reduce((total, currentValue) => {
    return total + currentValue.qty;
  }, 0);
  return {
    loadings,
    totalItems
  };
}

export default connect(mapPropToState)(withRouter(Layout));
