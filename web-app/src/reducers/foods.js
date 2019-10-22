import { FETCH_DATA } from "../actions/shared";
import { FETCH_FOOD } from "../actions/foods";
export default function foods(state = [], action) {
  switch (action.type) {
    case FETCH_DATA: {
      return action.foods;
    }
    case FETCH_FOOD: {
      return action.data;
    }
    default:
      return state;
  }
}
