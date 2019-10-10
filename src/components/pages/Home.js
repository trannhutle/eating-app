import React from "react";
import { Menu, Icon, Row, Col } from "antd";
import { ViewCardBtn } from "../ui/Buttons";
import CardList from "../foods/CardList";
import Layout from "../Layout";
function Home(props) {
  return (
    <Layout >
      <div className="wrapper">
        <div className="sider">
          <div className="logo">VITTORIO</div>
          <Menu>
            <Menu.Item key="1">
              <span className="nav-text title">Category</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="swap-right" />
              <span className="nav-text">Pasta</span>
            </Menu.Item>
            <Menu.Item key="3">
              <span className="nav-text">Sandwishes</span>
            </Menu.Item>
          </Menu>
        </div>
        <div className="header">
          <Row type="flex" align="bottom">
            <Col span={18}>
              <Row>
                <span className="nav-text title">filter</span>
              </Row>
              <Row>
                <span className="filter active"># Vegetarian</span>
                <span className="filter"># Vegan</span>
                <span className="filter"># ALL FILTERS</span>
              </Row>
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
