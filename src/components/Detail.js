import React, { Component } from "react";
import { Row, Col } from "antd";
import { black } from "ansi-colors";

export class Detail extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span={8}>
          <img
            className="detail-img"
            src="https://www.lastingredient.com/wp-content/uploads/2013/05/grilled-pizza.jpg"
          />
        </Col>
        <Col span={16}>
          <h1>Roberto</h1>
          <p className="desc">
            Layers of pasta with Bolognese sauce and cream sauce, baked crispy
            in our wood fired oven with mozzarella
          </p>
          <h3>Size</h3>
          <Row style={{ display: "flex" }} className="size-list">
            <div className="size">
              <span className="text">SMALL</span>
              <span className="amount">320g</span>
            </div>
            <div className="size active">
              <span className="text">Medium</span>
              <span className="amount">320g</span>
            </div>
            <div className="size">
              <span className="text">Large</span>
              <span className="amount">320g</span>
            </div>
          </Row>
          <h3>Topping</h3>
          <Row style={{ display: "flex" }} className="topping-list">
            <div className="topping">
              <input type="checkbox" id="id-test" />
              <label htmlFor="id-test">
                <span className="custom-checkbox">this is topping</span>
              </label>
            </div>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Detail;
