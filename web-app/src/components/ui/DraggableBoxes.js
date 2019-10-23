import React from "react";
import Draggable from "react-draggable";

import "./DraggableBoxes.scss";

export const DragBox = ({
  onDrag,
  defaultPosition,
  name,
  size,
  id,
  onClick,
  selected,
  color
}) => {
  return (
    <Draggable
      grid={[50, 50]}
      onStop={onDrag}
      defaultPosition={defaultPosition}
      bounds="parent"
    >
      <div
        className="box"
        style={{ width: size.width, height: size.height }}
        onClick={onClick}
        key={id}
        data-key={id}
      >
        <input type="checkbox" checked={selected} id={id} />
        <label htmlFor={id}>
          <span
            className="custom-checkbox"
            style={{ backgroundColor: color.bg, color: color.txt }}
          >
            {name}
          </span>
        </label>
      </div>
    </Draggable>
  );
};
