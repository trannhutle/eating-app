import React from "react";
import FoodCard from "./FoodCard";
import { Row } from "antd";
import { connect } from "react-redux";

export const CardList = ({ foods }) => {
  console.log(this);
  return (
    <Row className="card-container">
      {foods.map(food => (
        <FoodCard key={food._id} food={food} />
      ))}
    </Row>
  );
};
export default CardList;
