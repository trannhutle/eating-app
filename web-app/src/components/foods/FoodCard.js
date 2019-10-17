import React, { Component } from "react";
import { Card, Button } from "antd";
import { withRouter } from "react-router";

const CardImage = ({ food, history }) => {
  return (
    <div>
      <img alt={food.name} src={food.imgUrl} />
      <Button
        type="primary"
        shape="circle"
        icon="plus"
        size="small"
        onClick={() => {
          history.push(`product/${food._id}`);
        }}
      ></Button>
    </div>
  );
};

export class FoodCard extends Component {
  render() {
    const { food, history } = this.props;
    console.log(this.props);
    return (
      <div className={`card card-col`}>
        <Card
          style={{ background: "none" }}
          cover={<CardImage food={food} history={history} />}
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
export default withRouter(FoodCard);
