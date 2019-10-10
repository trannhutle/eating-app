import React, { useEffect, Component } from "react";
import { Row, Col, Icon } from "antd";
import { ViewCardBtn } from "../ui/Buttons";

export class Header extends Component {
  render() {
    const { match, history } = this.props;
    return match.url === "/" ? (
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
          <Col span={6} offset={12}>
            <ViewCardBtn />
          </Col>
        ) : null}
      </Row>
    );
  }
}

export default Header;
