import React from "react";
import "./input.scss";

export const SizeSelections = props => {
  const { options } = props;
  return (
    <div className="size-list">
      {options.map(option => (
        <div
          key={option.id}
          className={`size ${option.isActive ? "active" : ""}`}
        >
          <span className="text">{option.name}</span>
          <span className="amount">{option.size}</span>
        </div>
      ))}
    </div>
  );
};

export const ToppingSelections = props => {
  const { options } = props;
  return (
    <div className="topping-list">
      {options.map(option => (
        <div key={option.id} className="topping">
          <input type="checkbox" id={option.id} checked={option.selected} />
          <label htmlFor={option.id}>
            <span className="custom-checkbox">{option.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
