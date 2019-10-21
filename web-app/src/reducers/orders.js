import { ADD_ORDER, UPDATE_ORDER } from "../actions/orders";

export default function orders(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case ADD_ORDER:
      return state.concat([action.food]);
    case UPDATE_ORDER:
      return state.map(order => {
        if (order.id === action.id) {
          return Object.assign({}, order, {
            qty: order.qty + action.food.qty,
            total: order.total + action.food.total
          });
        } else {
          return order;
        }
      });
    default:
      return state;
  }
}
