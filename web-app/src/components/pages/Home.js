import React, { useState, Component } from "react";
import { Menu, Icon, Row, Col } from "antd";
import { ViewCardBtn, PayNowBtn } from "../ui/Buttons";
import { connect } from "react-redux";
import CardList from "../foods/CardList";
import Layout from "../layouts/Layout";
import { FoodCatMenu, FoodCategoryFilters } from "../ui/Lists";
import { handleFetchFood } from "../../actions/foods";
const foodCatListServ = [
  {
    id: "cat-01",
    name: "Pasta",
    isActive: true
  },
  {
    id: "cat-02",
    name: "Sandwishes",
    isActive: false
  }
];

class Home extends Component {
  state = {
    listFood: []
  };
  componentDidMount() {
    console.log("call the component did mount of Home");
    this.props.handleFetchFood();
  }
  // useEffect(() => {
  //   setState({listFood: this.props.foods})
  //   // return () => {
  //   //   cleanup
  //   // };
  // }, [this.props.foods])
  componentWillReceiveProps(nextProps) {
    if (nextProps.foods !== this.props.foods) {
      this.setState({ listFood: nextProps.foods });
    }
  }
  render() {
    const onSelectCat = catId => {
      {
        console.log("This is onSelectCat: ", catId);
      }
    };
    const onSelectFilter = filterName => {
      {
        console.log("This is onSelectFilter: ", filterName);
        const fiteredFoods = this.props.foods.filter(food => {
          return food.tags.some(tag => {
            if (tag.name === filterName) return true;
          });
        });
        this.setState({ listFood: fiteredFoods });
      }
    };

    return (
      <Layout>
        <div className="wrapper">
          <div className="sider">
            <div className="logo">VITTORIO</div>
            <FoodCatMenu foodCatList={foodCatListServ} onSelect={onSelectCat} />
          </div>
          <div className="header">
            <Row type="flex" align="middle">
              <Col span={18}>
                <FoodCategoryFilters
                  foodFilterList={this.props.tagFilters}
                  onSelect={onSelectFilter}
                />
              </Col>
              <Col span={6}>
                <ViewCardBtn />
              </Col>
            </Row>
          </div>
          <div className="content">
            <h1 className="category">Pizza</h1>
            <CardList foods={this.state.listFood} />
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = ({ foods }) => {
  const tagFilters = [];
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
  console.log("this is the tag from Home: ", [...tagFilters]);
  return { foods, tagFilters };
};
const mapDispatchToProps = {
  handleFetchFood
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
