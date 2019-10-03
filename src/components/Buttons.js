import React from "react";
import { Icon, Button } from "antd";

export const ViewCardBtn = ({ props }) => {
  return (
    <Button className="btn-view-card">
      <Icon type="gift" />
      Order Status
      <span className="count">50</span>
    </Button>
  );
};

// export function Button({ props }) {
//   return <Button {...props}>{props.children}</Button>;
// }

// export default Button;
