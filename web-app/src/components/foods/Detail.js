import React, { Component } from "react";
import { Row, Col, Button } from "antd";
import { OrderBtn } from "../ui/Buttons";
import { SpinBox } from "../ui/Buttons";
import { SizeSelections, ToppingSelections } from "../ui/Input";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { handleFetchFoodDetail } from "../../actions/foodDetails";
import { relativeTimeRounding } from "moment";
import { round } from "../../utils/appUtils";
export class Detail extends Component {
  state = {
    qty: 1,
    total: 0,
    details: null
  };

  handleChangeQuanity = value => {
    const total = (this.state.total / (this.state.qty * 1.0)) * value;
    this.setState({
      qty: value,
      total: total
    });
  };
  handleUpdatedSizes = values => {
    // const { sizes } = ;

    const totalNotIncludeSize = this.state.details.sizes
      .filter(size => size.selected)
      .reduce((prev, currentValue) => {
        return prev - currentValue.price * this.state.qty;
      }, this.state.total);
    const total = values
      .filter(size => size.selected)
      .reduce((prev, currentValue) => {
        return prev + currentValue.price * this.state.qty;
      }, totalNotIncludeSize);

    this.setState({
      details: Object.assign({}, this.state.details, { sizes: values }),
      total: total
    });
  };
  handleUpdatedToppings = values => {
    this.setState({
      details: Object.assign({}, this.state.details, { toppings: values })
    });
  };
  handleUpdatedExtras = updatedValues => {
    console.log("updatedValues", updatedValues);
    console.log("beforeUpdateValue", this.state.details.extras);

    // Remove all the selected extras from previous state
    const totalNotIncludeExtra = this.state.details.extras
      .filter(extra => extra.selected)
      .reduce((prevTotal, curValue) => {
        return prevTotal - curValue.price * this.state.qty;
      }, this.state.total);
    // Add selected extra to total
    const total = updatedValues
      .filter(extra => extra.selected)
      .reduce((prevTotal, curValue) => {
        return prevTotal + curValue.price * this.state.qty;
      }, totalNotIncludeExtra);

    this.setState({
      details: Object.assign({}, this.state.details, {
        extras: updatedValues
      }),
      total: total
    });
  };
  componentDidMount() {
    const { params } = this.props.match;
    this.props.dispatch(handleFetchFoodDetail(params.productId)).then(() => {
      console.log("After dispatch", this.props.foodDetails);

      this.setState({
        details: this.props.foodDetails,
        total: this.props.foodDetails.price
      });
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
            options={details.sizes}
            handleUpdate={this.handleUpdatedSizes}
          />
          <h3 className="title mt-2">Topping</h3>
          <ToppingSelections
            options={details.toppings}
            handleUpdate={this.handleUpdatedToppings}
          />
          <h3 className="title mt-2">Extra</h3>
          <ToppingSelections
            options={details.extras}
            handleUpdate={this.handleUpdatedExtras}
          />
          <Row type="flex" align="middle" className="mt-2">
            <span className="total-price">${this.state.total.toFixed(2)}</span>
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
