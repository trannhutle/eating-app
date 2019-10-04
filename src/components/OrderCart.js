import React, { Component } from "react";
import { Icon, Row, Col, Timeline, Badge } from "antd";
import { CloseTableBtn } from "./ui/Buttons";
const Item = ({ item }) => {
  return (
    <Row className="item" type="flex">
      <Col span={6}>
        <img src="//static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/lasagna-alla-bolognese.png" />
      </Col>
      <Col span={18} className="name-qty-grp">
        <Row type="flex" justify="space-between">
          <Col span={22}>
            <span className="name">{item.name}</span>
          </Col>
          <Col span={2} className="content-right">
            <Badge count={item.qty}></Badge>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
const GroupedItems = ({ name, total, items }) => {
  return (
    <Row>
      <Row className="title-row" type="flex" justify="space-between">
        <Col className={`category ${items.length === 0 ? "disable" : ""}`}>
          {name}
        </Col>
        <Col className="total">{total}</Col>
      </Row>
      <Row type="flex">
        {items.map(item => (
          <Item item={item} />
        ))}
      </Row>
    </Row>
  );
};
const CartBottom = () => {
  return (
    <Row className="cart-bottom">
      <Row
        className="sub-price"
        type="flex"
        align="middle"
        justify="space-between"
      >
        <span className="title">Subtotal</span>
        <span className="price">$15.6</span>
      </Row>
      <Row
        className="sub-price"
        type="flex"
        align="middle"
        justify="space-between"
      >
        <span className="title">Discount -10%</span>
        <span className="price">$15.6</span>
      </Row>
      <Row
        className="total-price"
        type="flex"
        align="middle"
        justify="space-between"
      >
        <span className="title">Total</span>
        <span className="price">$15.6</span>
      </Row>
      <Row type="flex" justify="center">
        <CloseTableBtn cl />
      </Row>
    </Row>
  );
};
export class OrderCart extends Component {
  render() {
    let items = [
      {
        name: "Penne alla Arrabiata",
        qty: 1,
        img: ""
      },
      {
        name: "Spaghetti alla Puttanesca",
        qty: 5,
        img: ""
      },
      {
        name: "Spaghetti Vittorio",
        qty: 5,
        img: ""
      }
    ];

    return (
      <div className="order-cart">
        <div className="top">
          <Row className="cart-header" type="flex" align="middle">
            <Col className="title" span={12}>
              Oder Status
            </Col>
            <Col className="nav-back" span={12} onClick={this.props.onClick}>
              Hide <Icon type="arrow-right" />
            </Col>
          </Row>
          <Timeline>
            <Timeline.Item>
              <GroupedItems name="Ordered" total="15 items" items={items} />
            </Timeline.Item>
            <Timeline.Item>
              <GroupedItems name="Baking" total="15 items" items={items} />
            </Timeline.Item>
            <Timeline.Item>
              <GroupedItems name="Finishing" total="" items={[]} />
            </Timeline.Item>
            <Timeline.Item>
              <GroupedItems name="Serve" total="" items={[]} />
            </Timeline.Item>
          </Timeline>
        </div>
        <div className="bottom">
          <CartBottom />
        </div>
      </div>
    );
  }
}
export default OrderCart;