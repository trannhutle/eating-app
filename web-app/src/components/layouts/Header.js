import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Icon } from "antd";
import { ViewCardBtn } from "../ui/Buttons";
import { withRouter } from "react-router";
const catParamRegex = /^\/cat\//;

export class Header extends Component {
  render() {
    console.log("Header is rendered", this);
    const { match, history } = this.props;
    return match.url === "/" || catParamRegex.test(match.url) ? (
      ""
    ) : (
      <Row className="header">
        <Col
          span={6}
          className="pl-2"
          onClick={() => {
            history.goBack();
          }}
        >
          <Icon type="arrow-left" />
          <span className="nav-back pl-1"> Back to menu</span>
        </Col>
        {match.url !== "/checkout" ? (
          <Col span={8} offset={10}>
            <ViewCardBtn totalItems={this.props.totalItems} />
          </Col>
        ) : null}
      </Row>
    );
  }
}
export default Header;
