import React, { Component } from "react";
import Detail from "./Detail";
import { Icon, Row, Col } from "antd";
import { ViewCardBtn } from "./ui/Buttons";

class FoodDetailPage extends Component {
  render() {
    return (
      <div className="header">
        <Row>
          <Col span={6} className="pl-2">
            <Icon type="arrow-left" />
            <span className="nav-back pl-1"> Back to menu</span>
          </Col>
          <Col span={6} offset={12}>
            <ViewCardBtn />
          </Col>
        </Row>
        <Detail />
      </div>
    );
  }
}
export default FoodDetailPage;
