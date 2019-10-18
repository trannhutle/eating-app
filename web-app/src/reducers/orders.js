import { ADD_ORDER } from "../actions/orders";

export default function orders(state = [], action) {
  console.log(state, action);
  switch (action.type) {
    case ADD_ORDER:
      return state.concat([action.food]);
    default:
      return state;
  }
}
