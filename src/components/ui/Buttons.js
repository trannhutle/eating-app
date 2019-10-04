import React from "react";
import { Icon, Button } from "antd";
import PropsTypes from "prop-types";

import "./button.scss";

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const ViewCardBtn = ({ props }) => {
  return (
    <Button className="btn-view-card">
      <Icon type="gift" />
      Order Status
      <span className="count">50</span>
    </Button>
  );
};

export const OrderBtn = ({ props }) => {
  return <button className="btn btn-order">Place Order</button>;
};

export const SpinBox = props => {
  const handleClick = e => {
    const operator = e.target.dataset.name;
    let value;
    operator === INCREASE
      ? (value = props.value + 1)
      : (value = props.value - 1);
    props.onChange(value);
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
