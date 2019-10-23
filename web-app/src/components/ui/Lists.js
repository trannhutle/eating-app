import React, { useState, useEffect } from "react";
import { Menu, Icon, Row } from "antd";
import "./lists.scss";
export const DEFAULT_FILTER_NONE = "-1";

export const FoodCatMenu = ({ foodCatList, onSelect, onSelected }) => {
  const [catList, setCatList] = useState(foodCatList);
  useEffect(() => {
    // Set new category
    if (catList.length === 0 && foodCatList.length > 0) {
      setCatList(foodCatList);
    }
    // Listen on changes to return the current selected category
    if (catList.length > 0) {
      const secCat = catList.reduce((reCat, curCat) => {
        const active = curCat.isActive ? curCat : reCat;
        return active;
      }, null);
      onSelected(secCat);
    }
  }, [foodCatList, catList]);
  return (
    <Menu
      onSelect={({ key }) => {
        const updatedList = catList.map(cat =>
          cat.id !== key
            ? Object.assign({}, cat, { isActive: false })
            : Object.assign({}, cat, { isActive: !cat.isActive })
        );
        setCatList(updatedList);
        const secCat = updatedList.reduce((reCat, curCat) => {
          const active = curCat.isActive ? curCat : reCat;
          return active;
        }, null);
        onSelect(secCat);
      }}
    >
      <Menu.Item key="1">
        <span className="nav-text title">Category</span>
      </Menu.Item>
      {catList.map(item => (
        <Menu.Item key={item.id}>
          {item.isActive ? <Icon type="swap-right" /> : null}
          <span className="nav-text">{item.name}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export const FoodCategoryFilters = ({ foodFilterList = [], onSelect }) => {
  console.log("this is the result", foodFilterList);
  const [filterList, setCatList] = useState([]);
  const [curItem, setCurItem] = useState("-1");

  useEffect(() => {
    if (filterList !== foodFilterList) {
      setCatList(foodFilterList);
    }
  }, [foodFilterList]);
  return (
    <div>
      <Row>
        <span className="nav-text title">filter</span>
      </Row>
      <Row>
        <ul
          className="filter"
          onClick={e => {
            if (e.target.tagName.toUpperCase() === "LI") {
              const name = e.target.dataset.keyName;
              const updateList = filterList.map(i =>
                i.name !== name
                  ? Object.assign({}, i, { isActive: false })
                  : Object.assign({}, i, { isActive: !i.isActive })
              );
              setCatList(updateList);
              onSelect(name);
            }
          }}
        >
          {filterList.map(item => (
            <li
              key={item.id}
              data-key-name={item.name}
              className={item.isActive ? "active" : ""}
            >
              #{item.name}
            </li>
          ))}
          <li
            key={DEFAULT_FILTER_NONE}
            data-key-name={DEFAULT_FILTER_NONE}
            className={
              filterList.filter(item => item.isActive).length === 0
                ? "active"
                : ""
            }
          >
            # ALL
          </li>
        </ul>
      </Row>
    </div>
  );
};

export const SelectedTableList = ({ data }) => {
  return (
    <ul className="filter">
      {data.map(item => {
        return <li className="active">{item.name}</li>;
      })}
    </ul>
  );
};
