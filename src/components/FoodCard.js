import React, { Component } from "react";
import { Card, Button } from "antd";
const SMALL_DEVICE = 500;
const MEDIUM_DEVICE = 992;
const LARGE_DEVICE = 1200;

const layoutCollumn = () => {
  const width = window.innerWidth;
  if (width <= SMALL_DEVICE) {
    return "ant-col-24";
  } else if (SMALL_DEVICE < width && width < MEDIUM_DEVICE) {
    return "ant-col-12";
  } else if (MEDIUM_DEVICE <= width && width < LARGE_DEVICE) {
    return "ant-col-8";
  } else {
    return "ant-col-6";
  }
};
const CardImage = ({ food }) => {
  return (
    <div>
      <img alt={food.name} src={food.imgUrl} />
      <Button type="primary" shape="circle" icon="plus" size="small" />
    </div>
  );
};

export class FoodCard extends Component {
  state = { colNum: layoutCollumn() };

  setLayout = () => {
    this.setState({ colNum: layoutCollumn() });
  };
  componentDidMount() {
    window.addEventListener("resize", this.setLayout);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.setLayout);
  }
  render() {
    const { food } = this.props;
    console.log(this.props);
    return (
      <div className={`card ${this.state.colNum}`}>
        <Card
          style={{ background: "none" }}
          cover={<CardImage food={food} />}
          size="small"
          bordered={false}
        >
          <h2 className="price"> ${food.price}</h2>
          <h1 className="name"> {food.name}</h1>
          <p className="desc">{food.desc}</p>
        </Card>
      </div>
    );
  }
}
export default FoodCard;
