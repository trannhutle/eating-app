import React, { useState } from "react";
import { Menu, Icon, Row } from "antd";
import "./lists.scss";
export const FoodCatMenu = ({ foodCatList, onSelect }) => {
  const [catList, setCatList] = useState(foodCatList);

  return (
    <Menu
      onSelect={({ key }) => {
        const updatedList = catList.map(cat =>
          cat.id !== key
            ? Object.assign({}, cat, { isActive: false })
            : Object.assign({}, cat, { isActive: !cat.isActive })
        );
        setCatList(updatedList);
        onSelect(key);
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

export const FoodCategoryFilters = ({ foodFilterList, onSelect }) => {
  const [filterList, setCatList] = useState(foodFilterList);
  const [curItem, setCurItem] = useState("-1");

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
              const id = e.target.dataset.key;
              const updateList = filterList.map(i =>
                i.id !== id
                  ? Object.assign({}, i, { isActive: false })
                  : Object.assign({}, i, { isActive: !i.isActive })
              );
              setCatList(updateList);
              onSelect(id);
            }
          }}
        >
          {filterList.map(item => (
            <li
              key={item.id}
              data-key={item.id}
              className={item.isActive ? "active" : ""}
            >
              #{item.name}
            </li>
          ))}
          <li
            key="-1"
            data-key="-1"
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
