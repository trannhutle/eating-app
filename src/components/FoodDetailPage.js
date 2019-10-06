import React, { Component } from "react";
import Detail from "./Detail";
import { Icon, Row, Col, Drawer } from "antd";
import { ViewCardBtn } from "./ui/Buttons";
import OrderCart from "./OrderCart";

class FoodDetailPage extends Component {
  state = {
    visible: false
  };
  openCart = event => {
    console.log("Onclick event is triggered");
    event.preventDefault();
    this.setState({
      visible: true
    });
  };
  closeCart = event => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div className="header">
        <Row>
          <Col span={6} className="pl-2">
            <Icon type="arrow-left" />
            <span className="nav-back pl-1"> Back to menu</span>
          </Col>
          <Col span={6} offset={12}>
            <ViewCardBtn onClick={this.openCart} />
          </Col>
        </Row>
        <Detail />
        <Drawer
          width={"20em"}
          closable={false}
          visible={this.state.visible}
        >
          <OrderCart onClick={this.closeCart} />
        </Drawer>
      </div>
    );
  }
}
export default FoodDetailPage;
