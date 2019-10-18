import React, { Component, useState } from "react";
import { Icon, Row, Col, Timeline, Badge, Drawer } from "antd";
import { CloseTableBtn } from "../ui/Buttons";
import { withRouter } from "react-router";
import "./orderCart.scss";

const Topping = () => {
  return (
    <Row type="flex">
      <div className="border-card topping">
        <div className="name">Seafood</div>
        <div className="price">15.5$</div>
      </div>
      <div className="border-card topping">
        <div className="name">Chicken</div>
        <div className="price">15.5$</div>
      </div>
      <div className="border-card topping">
        <div className="name">Prawn</div>
        <div className="price">15.5$</div>
      </div>
    </Row>
  );
};
const Extra = () => {
  return (
    <Row type="flex">
      <div className="border-card extra">
        <div className="name">Seafood</div>
        <div className="price">15.5$</div>
      </div>
      <div className="border-card extra">
        <div className="name">Spaghetti</div>
        <div className="price">15.5$</div>
      </div>
      <div className="border-card extra">
        <div className="name">Prawn</div>
        <div className="price">15.5$</div>
      </div>
    </Row>
  );
};

const ItemDetail = () => {
  return (
    <Row className="item-detail">
      <Row type="flex">
        <Col span={6}>
          <h3 className="cart-title">Size</h3>
        </Col>
        <Col span={18}>
          <h2 className="cart-title-size">Medium</h2>
        </Col>
      </Row>
      <Row type="flex">
        <Col span={6}>
          <h3 className="cart-title">Toppings</h3>
        </Col>
        <Col span={18} className="name-qty-grp">
          <Topping />
        </Col>
      </Row>
      <Row type="flex">
        <Col span={6}>
          <h3 className="cart-title">Extra</h3>
        </Col>
        <Col span={18} className="name-qty-grp">
          <Extra />
        </Col>
      </Row>
    </Row>
  );
};

const Item = ({ item }) => {
  const [openItem, setOpenItem] = useState(false);
  const handleOpenItemDetail = event => {
    setOpenItem(!openItem);
  };
  return (
    <Row>
      <Row className="item" type="flex">
        <Col span={4}>
          <img src="//static.vietnammm.com/images/restaurants/vn/5QPOR5N/products/lasagna-alla-bolognese.png" />
        </Col>
        <Col span={4} className="txt-center">
          <div>
            <span className="qty">{item.qty}x</span>
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
              <span className="name">{item.name}</span>
            </Col>
            <Col span={2} className="content-right">
              <Badge count={<Icon type="minus-circle" />}></Badge>
            </Col>
          </Row>
          <Row>
            <Col className="txt-center">
              <div className="btn-total-item">$15.55</div>
            </Col>
          </Row>
        </Col>
      </Row>
      {openItem ? <ItemDetail /> : null}
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
      {items.map(item => (
        <Item item={item} />
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
    <Row type="flex" justify="center">
      <CloseTableBtn
        onClick={() => {
          props.history.push("/checkout");
        }}
      />
    </Row>
  </Row>
));
export class OrderCart extends Component {
  closeCart = event => {};

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
      <Drawer width={"25em"} closable={false} visible={this.props.visible}>
        <div className="order-cart">
          <Row className="cart-header" type="flex" align="middle">
            <Col className="title" span={12}>
              Oder Status
            </Col>
            <Col className="nav-back" span={12} onClick={this.props.onClose}>
              Hide <Icon type="arrow-right" />
            </Col>
          </Row>
          <Row className="cart-content">
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
          </Row>
          <div className="bottom">
            <CartBottom />
          </div>
        </div>
      </Drawer>
    );
  }
}
export default withRouter(OrderCart);
