import React, { useState } from "react";
import "./input.scss";

export const SizeSelections = ({ options, handleUpdate }) => {
  const [optionList, setOptionList] = useState(options);
  const handleSelectOption = e => {
    const id = e.currentTarget.dataset.key;
    const updatedList = optionList.map(option => {
      return option._id === id
        ? Object.assign({}, option, { selected: true })
        : Object.assign({}, option, { selected: false });
    });
    setOptionList(updatedList);
    handleUpdate(updatedList);
  };
  return (
    <div className="size-list">
      {optionList.map(option => (
        <div
          key={option._id}
          className={`size ${option.selected ? "active" : ""}`}
          data-key={option._id}
          onClick={handleSelectOption}
        >
          <span className="text">{option.name}</span>
          <span className="amount">
            {option.qty}
            {option.unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export const ToppingSelections = ({ options, handleUpdate }) => {
  const [optionList, setOptionList] = useState(options);
  const handleSelectOption = e => {
    const id = e.currentTarget.dataset.key;
    const updatedList = optionList.map(option =>
      option._id === id
        ? Object.assign({}, option, { selected: !option.selected })
        : option
    );
    setOptionList(updatedList);
    handleUpdate(updatedList);
  };
  return (
    <div className="topping-list">
      {optionList.map(option => (
        <div
          key={option._id}
          data-key={option._id}
          className="topping"
          onClick={handleSelectOption}
        >
          <input type="checkbox" id={option._id} checked={option.selected} />
          <label htmlFor={option.id}>
            <span className="custom-checkbox">{option.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
