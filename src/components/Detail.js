import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { OrderBtn } from "./ui/Buttons";
import { SpinBox } from "./ui/Buttons";
import { SizeSelections, ToppingSelections } from "./ui/Input";

const Size = props => {
  return (
    <div className="size active">
      <span className="text">{props.size}</span>
      <span className="amount">{props.quantity}</span>
    </div>
  );
};

export class Detail extends Component {
  state = {
    qty: 1
  };

  handleChangeQuanity = value => {
    this.setState({ qty: value });
  };

  render() {
    return (
      <Row gutter={48} className="food-detail" type="flex">
        <Col span={10} style={{ position: "relative" }}>
          <div style={{ height: "100%", display: "flex" }}>
            <img
              className="detail-img"
              src="https://www.lastingredient.com/wp-content/uploads/2013/05/grilled-pizza.jpg"
            />
          </div>
        </Col>
        <Col span={12}>
          <h1 className="name">Roberto</h1>
          <p className="desc">
            Layers of pasta with Bolognese sauce and cream sauce, baked crispy
            in our wood fired oven with mozzarella
          </p>
          <h3 className="title mt-2">Size</h3>

          <SizeSelections
            options={[
              {
                name: "Small",
                size: "320g",
                isActive: false
              },
              {
                name: "Medium",
                size: "320g",
                isActive: true
              },
              {
                name: "Large",
                size: "320g",
                isActive: false
              }
            ]}
          />
          <h3 className="title mt-2">Topping</h3>
          <ToppingSelections
            options={[
              {
                id: "test-01",
                name: "Roast beff",
                selected: true
              },
              {
                id: "test-02",
                name: "Bell peppers",
                selected: true
              },
              {
                id: "test-03",
                name: "Mushrooms",
                selected: false
              }
            ]}
          />
          <Row type="flex" align="middle" className="mt-2">
            <span style={{ fontSize: "2.5rem", marginRight: "1em" }}>
              $13.59
            </span>
            <SpinBox
              value={this.state.qty}
              onChange={this.handleChangeQuanity}
            />
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <OrderBtn />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Detail;
