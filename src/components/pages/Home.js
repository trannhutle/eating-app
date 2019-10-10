import React, { useState } from "react";
import { Menu, Icon, Row, Col } from "antd";
import { ViewCardBtn, PayNowBtn } from "../ui/Buttons";
import CardList from "../foods/CardList";
import Layout from "../Layout";
import { FoodCatMenu, FoodCategoryFilters } from "../ui/Lists";
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
const foodCaFilterListServ = [
  {
    id: "cat-filt-01",
    name: "Vegitarian",
    isActive: false
  },
  {
    id: "cat-filt-02",
    name: "Vegan",
    isActive: false
  },
  {
    id: "cat-filt-03",
    name: "Spicy",
    isActive: false
  }
];

function Home(props) {
  const onSelectCat = catId => {
    {
      console.log("This is onSelectCat: ", catId);
    }
  };
  const onSelectFilter = filterId => {
    {
      console.log("This is onSelectFilter: ", filterId);
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
          <Row type="flex" align="bottom">
            <Col span={18}>
              <FoodCategoryFilters
                foodFilterList={foodCaFilterListServ}
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
          <CardList />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
