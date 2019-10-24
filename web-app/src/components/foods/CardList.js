import React, { Component } from "react";
import FoodCard from "./FoodCard";
import { DEFAULT_FILTER_NONE } from "../ui/Lists";
import { Row, Col } from "antd";
import { ViewCardBtn, PayNowBtn } from "../ui/Buttons";
import { FoodCategoryFilters } from "../ui/Lists";

export class CardList extends Component {
  state = {
    listFood: [],
    tagFilters: []
  };
  constructor() {
    super();
    this.onSelectFilter = this.onSelectFilter.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.foods !== this.props.foods) {
      this.setState({
        listFood: nextProps.foods,
        tagFilters: getFilterList(nextProps.foods)
      });
    }
  }
  onSelectFilter = filterName => {
    {
      console.log("This is onSelectFilter: ", filterName);
      if (DEFAULT_FILTER_NONE === filterName) {
        this.setState({ listFood: this.props.foods });
      } else {
        const fiteredFoods = this.props.foods.filter(food => {
          return food.tags.some(tag => {
            if (tag.name === filterName) return true;
          });
        });
        this.setState({ listFood: fiteredFoods });
      }
    }
  };

  render() {
    
    return (
      <div>
        <div className="header">
          <Row type="flex" align="stretch">
            <Col span={16}>
              <FoodCategoryFilters
                foodFilterList={this.state.tagFilters}
                onSelect={this.onSelectFilter}
              />
            </Col>
            <Col span={8}>
              <ViewCardBtn />
            </Col>
          </Row>
        </div>
        <div className="content">
          <h1 className="category">{this.props.catName}</h1>
          <Row className="card-container">
            {this.state.listFood.map(food => (
              <FoodCard key={food._id} food={food} />
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

const getFilterList = foods => {
  const tagFilters = [];
  console.log("Food in getFilterList", foods);
  foods.map(food => {
    food.tags.map(tag => {
      // find dupplicate one
      const isDupplicated = tagFilters.some(filter => {
        if (tag.name === filter.name) {
          return true;
        }
      });
      if (!isDupplicated) {
        tagFilters.push({ id: tag._id, name: tag.name });
      }
    });
  });
  return tagFilters;
};

export default CardList;
