import React, { useState, useEffect } from "react";
import { Icon, Button } from "antd";
import PropsTypes from "prop-types";
import OrderCart from "../carts/OrderCart";
import "./button.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

export const ViewCardBtn = ({ totalItems }) => {
  const [visible, setVisible] = useState(false);
  const [hasChanged, setHasChanged] = useState(null);
  const openCart = e => {
    console.log("calll this function");
    setVisible(true);
  };
  const closeCart = e => {
    setVisible(false);
  };
  // use effect to listen to the change of totalItems. to render the animation
  useEffect(() => {
    console.log("There is a change of button value");
    // not change animation when init the header
    if (hasChanged === null) setHasChanged(false);
    else {
      setHasChanged(true);
      setTimeout(() => {
        setHasChanged(false);
      }, 1000);
    }
  }, [totalItems]);
  return (
    <div>
      <Button
        className={`btn-view-card ${hasChanged ? "hover" : ""}`}
        onClick={openCart}
      >
        <Icon type="gift" />
        Order Status
        <CSSTransition in={hasChanged} timeout={1000} classNames="btn-onchange">
          <span className="count">{totalItems}</span>
        </CSSTransition>
      </Button>
      <OrderCart visible={visible} onClose={closeCart} />
    </div>
  );
};
ViewCardBtn.propsTypes = {
  totalItems: PropsTypes.number
};
ViewCardBtn.defaultProps = {
  totalItems: 0
};

export const OrderBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-order">
      Place Order
    </button>
  );
};
OrderBtn.propsTypes = {
  onClick: PropsTypes.func
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
