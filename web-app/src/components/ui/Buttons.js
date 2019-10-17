import React, { useState } from "react";
import { Icon, Button } from "antd";
import PropsTypes from "prop-types";
import OrderCart from "../carts/OrderCart";
import "./button.scss";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const ViewCardBtn = props => {
  const [visible, setVisible] = useState(false);
  const openCart = e => {
    console.log("calll this function");
    setVisible(true);
  };
  const closeCart = event => {
    setVisible(false);
  };
  return (
    <div>
      <Button className="btn-view-card" onClick={openCart}>
        <Icon type="gift" />
        Order Status
        <span className="count">50</span>
      </Button>
      <OrderCart visible={visible} onClose={closeCart} />
    </div>
  );
};

export const OrderBtn = ({ props }) => {
  return <button className="btn btn-order">Place Order</button>;
};
export const CloseTableBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-order">
      Start to place order
    </button>
  );
};
export const PayNowBtn = ({ props }) => {
  return <button className="btn btn-order">Pay Now</button>;
};
export const SpinBox = props => {
  const handleClick = e => {
    const operator = e.target.dataset.name;
    let value;
    operator === INCREASE
      ? (value = props.value + 1)
      : (value = props.value - 1);
    if (value > 0) props.onChange(value);
  };

  return (
    <div className="spinbox">
      <span className="operator" data-name={DECREASE} onClick={handleClick}>
        -
      </span>
      <span>{props.value}</span>
      <span className="operator" data-name={INCREASE} onClick={handleClick}>
        +
      </span>
    </div>
  );
};
SpinBox.PropsTypes = {
  value: PropsTypes.number,
  onChange: PropsTypes.func
};
