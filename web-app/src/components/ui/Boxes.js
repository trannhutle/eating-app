import React from "react";
import Draggable from "react-draggable";
import { ResizableBox } from "react-resizable";

import "./Boxes.scss";

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

export const ResisableBox = ({
  children,
  minConstraints,
  maxConstraints,
  width,
  height,
  onStop,
  isResisable
}) => {
  return (
    <div>
      <ResizableBox
        className="resize-box"
        minConstraints={minConstraints}
        maxConstraints={maxConstraints}
        width={width}
        height={height}
        onResizeStop={onStop}
        axis={isResisable ? "both" : "none"}
      >
        {children}
      </ResizableBox>
    </div>
  );
};
