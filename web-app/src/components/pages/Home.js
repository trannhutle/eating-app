import React, { useState, Component } from "react";
import { Menu, Icon, Row, Col } from "antd";
import { ViewCardBtn, PayNowBtn } from "../ui/Buttons";
import { connect } from "react-redux";
import CardList from "../foods/CardList";
import Layout from "../layouts/Layout";
import { FoodCatMenu, FoodCategoryFilters } from "../ui/Lists";
import { handleFetchFood } from "../../actions/foods";
import { handleInitFetchData } from "../../actions/shared";
import { DEFAULT_FILTER_NONE } from "../ui/Lists";
import { withRouter } from "react-router";

class Home extends Component {
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
  onSelectCat = catId => {
    {
      console.log("handleFetchFood", catId);
      this.props.handleFetchFood(catId, 0);
    }
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
            />
          </div>
          <CardList foods={this.props.foods} />
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
  return { foods, cats };
};
const mapDispatchToProps = {
  handleFetchFood,
  handleInitFetchData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
