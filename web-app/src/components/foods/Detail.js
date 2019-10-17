import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { OrderBtn } from "../ui/Buttons";
import { SpinBox } from "../ui/Buttons";
import { SizeSelections, ToppingSelections } from "../ui/Input";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { handleFetchFoodDetail } from "../../actions/foodDetails";
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
    qty: 1,
    details: null
  };

  handleChangeQuanity = value => {
    this.setState({ qty: value });
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.props.dispatch(handleFetchFoodDetail(params.productId)).then(() => {
      console.log("After dispatch", this.props.foodDetails);

      this.setState({ details: this.props.foodDetails });
    });
  }
  render() {
    const details = this.state.details;
    console.log("render is called", this.state);
    if (details === null) {
      return <h1> loading</h1>;
    }
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
          <h1 className="name">{details.name}</h1>
          <p className="desc">{details.desc}</p>
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
            options={details.toppings.map(topping => {
              return {
                id: topping._id,
                name: topping.name,
                selected: topping.selected
              };
            })}
          />
          <h3 className="title mt-2">Extra</h3>
          <ToppingSelections
            options={details.extras.map(extra => {
              return {
                id: extra._id,
                name: extra.name,
                selected: extra.selected
              };
            })}
          />
          <Row type="flex" align="middle" className="mt-2">
            <span style={{ fontSize: "2.5rem", marginRight: "1em" }}>
              ${details.price}
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

function mapStateToProps({ foodDetails }) {
  console.log("mapStateToProps", this);
  return {
    foodDetails
  };
}
export default connect(mapStateToProps)(withRouter(Detail));
