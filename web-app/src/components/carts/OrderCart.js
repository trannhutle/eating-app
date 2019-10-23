import React, { Component, useState } from "react";
import { Icon, Row, Col, Timeline, Badge, Drawer } from "antd";
import { CloseTableBtn, ConfirmedOrder } from "../ui/Buttons";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import "./orderCart.scss";
const Topping = ({ items }) => {
  return (
    <Row type="flex">
      {items
        .filter(item => item.selected)
        .map(item => (
          <div className="border-card topping">
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
          </div>
        ))}
    </Row>
  );
};
const Extra = ({ items }) => {
  return (
    <Row type="flex">
      {items
        .filter(item => item.selected)
        .map(item => (
          <div className="border-card extra">
            <div className="name">{item.name}</div>
            <div className="price">{item.price}</div>
          </div>
        ))}
    </Row>
  );
};

const ItemDetail = ({ sizes, toppings, extras }) => {
  const seletedSize = sizes.filter(size => size.selected)[0];
  return (
    <Row className="item-detail">
      <Row type="flex">
        <Col span={6}>
          <h3 className="cart-title">Size</h3>
        </Col>
        <Col span={18}>
          <h4 className="cart-title-size">{`${seletedSize.name}`}</h4>
        </Col>
      </Row>
      <Row type="flex">
        <Col span={6}>
          <h3 className="cart-title">Toppings</h3>
        </Col>
        <Col span={18} className="name-qty-grp">
          {toppings &&
          toppings.filter(topping => topping.selected).length > 0 ? (
            <Topping items={toppings} />
          ) : (
            <h3>There is no topping</h3>
          )}
        </Col>
      </Row>

      <Row type="flex">
        <Col span={6}>
          <h3 className="cart-title">Extra</h3>
        </Col>
        <Col span={18} className="name-qty-grp">
          {extras && extras.filter(extra => extra.selected).length > 0 ? (
            <Extra items={extras} />
          ) : (
            <h3>There is no extra</h3>
          )}
        </Col>
      </Row>
    </Row>
  );
};

const Item = ({ qty, total, details }) => {
  const [openItem, setOpenItem] = useState(false);
  const handleOpenItemDetail = event => {
    setOpenItem(!openItem);
  };
  return (
    <Row>
      <Row className="item" type="flex">
        <Col span={4}>
          <img src={details.imgUrl} />
        </Col>
        <Col span={4} className="txt-center">
          <div>
            <span className="qty">{qty}x</span>
          </div>
          <div onClick={handleOpenItemDetail}>
            {openItem ? (
              <Icon
                className="expand-icon"
                type="down-circle"
                theme="outlined"
              />
            ) : (
              <Icon className="expand-icon" type="up-circle" theme="filled" />
            )}
          </div>
        </Col>
        <Col span={16} className="name-qty-grp">
          <Row type="flex" justify="space-between">
            <Col span={22}>
              <span className="name">{details.name}</span>
            </Col>
            <Col span={2} className="content-right">
              <Badge count={<Icon type="minus-circle" />}></Badge>
            </Col>
          </Row>
          <Row>
            <Col className="txt-center">
              <div className="btn-total-item">{total}</div>
            </Col>
          </Row>
        </Col>
      </Row>
      {openItem ? <ItemDetail {...details} /> : null}
    </Row>
  );
};
const GroupedItems = ({ name, items }) => {
  return (
    <Row>
      <Row className="title-row" type="flex" justify="space-between">
        <Col className={`category ${items.length === 0 ? "disable" : ""}`}>
          {name}
        </Col>
        <Col className="total">
          {`${items.reduce((total, curValue) => {
            return total + curValue.qty;
          }, 0)} items`}
        </Col>
      </Row>
      {items.map(item => (
        <Item {...item} />
      ))}
    </Row>
  );
};

const CartBottom = withRouter(props => (
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
    <Row type="flex" align="middle" justify="center">
      <ConfirmedOrder />
      <CloseTableBtn
        onClick={() => {
          props.history.push("/checkout");
        }}
      />
    </Row>
  </Row>
));
export class OrderCart extends Component {
  // closeCart = event => {};

  render() {
    return (
      <Drawer width={"25em"} closable={false} visible={this.props.visible}>
        <div className="order-cart">
          <Row className="cart-header" type="flex" align="middle">
            <Col className="title" span={12}>
              Order Status
            </Col>
            <Col className="nav-back" span={12} onClick={this.props.onClose}>
              Hide <Icon type="arrow-right" />
            </Col>
          </Row>
          <Row className="cart-content">
            <Timeline>
              <Timeline.Item>
                <GroupedItems name="New orders" items={this.props.orders} />
              </Timeline.Item>
              <Timeline.Item>
                <GroupedItems name="Confirmed" total="15 items" items={[]} />
              </Timeline.Item>
              <Timeline.Item>
                <GroupedItems name="Finishing" total="" items={[]} />
              </Timeline.Item>
              <Timeline.Item>
                <GroupedItems name="Served" total="" items={[]} />
              </Timeline.Item>
            </Timeline>
          </Row>
          <div className="bottom">
            <CartBottom />
          </div>
        </div>
      </Drawer>
    );
  }
}
function mapStateToProps({ orders }) {
  console.log(orders);
  const results = orders.reduce((total, currentValue) => {
    total[currentValue.details._id] = total[currentValue.details._id] || [];
    total[currentValue.details._id].push(currentValue);
    return total;
  }, Object.create(null));
  console.log("this is a result from group items", results);
  return {
    orders
  };
}
export default connect(mapStateToProps)(withRouter(OrderCart));
