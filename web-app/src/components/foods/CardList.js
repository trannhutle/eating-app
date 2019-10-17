import React from "react";
import FoodCard from "./FoodCard";
import { Row } from "antd";
import { connect } from "react-redux";

export const CardList = props => {
  console.log(this);
  const foodList = props.foods;
  return (
    <Row className="card-container">
      {foodList.map(food => (
        <FoodCard key={food._id} food={food} />
      ))}
    </Row>
  );
};
function mapStateToProps({ foods }) {
  return {
    foods
  };
}
export default connect(mapStateToProps)(CardList);
