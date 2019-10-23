import React, { useState, Component } from "react";
import { Menu, Icon, Row, Col } from "antd";
import { ViewCardBtn, PayNowBtn } from "../ui/Buttons";
import { connect } from "react-redux";
import CardList from "../foods/CardList";
import Layout from "../layouts/Layout";
import { FoodCatMenu } from "../ui/Lists";
import { handleFetchFood } from "../../actions/foods";
import { handleInitFetchData } from "../../actions/shared";
import { DEFAULT_FILTER_NONE } from "../ui/Lists";
import { withRouter } from "react-router";

class Home extends Component {
  state = {
    category: {}
  };
  constructor() {
    super();
    this.onSelectCat = this.onSelectCat.bind(this);
  }
  componentDidMount() {
    console.log("call the component did mount of Home");
    this.props.handleInitFetchData();
    const { match } = this.props;
    if (match.params.catId) {
      console.log("Load the category information");
    }
  }
  onSelectCat = cat => {
    {
      console.log("handleFetchFood", cat);
      this.props.handleFetchFood(cat.id, 0);
    }
  };
  onSelectedCat = cat => {
    this.setState({ category: cat });
  };
  render() {
    return (
      <Layout>
        <div className="wrapper">
          <div className="sider">
            <div className="logo">VITTORIO</div>
            <FoodCatMenu
              foodCatList={this.props.cats}
              onSelect={this.onSelectCat}
              onSelected={this.onSelectedCat}
            />
          </div>
          <CardList
            foods={this.props.foods}
            catName={this.state.category.name}
          />
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ foods, categories }) => {
  const cats = categories.map(cat => {
    return Object.assign({}, cat, {
      id: cat._id,
      isActive: categories.filter(cat => cat.isPinned)[0]._id === cat._id
    });
  });
  const foodList = foods ? foods.list : [];
  const curCatId = foods ? foods.catId : "";
  return { foods: foodList, curCatId: curCatId, cats };
};
const mapDispatchToProps = {
  handleFetchFood,
  handleInitFetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
