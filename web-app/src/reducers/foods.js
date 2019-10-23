import { FETCH_DATA } from "../actions/shared";
import { FETCH_FOOD } from "../actions/foods";
export default function foods(state = null, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return Object.assign({}, state, {
        list: action.foods.foodList,
        catId: action.foods.catId
      });
    }
    case FETCH_FOOD: {
      return Object.assign({}, state, {
        list: action.data.foodList,
        catId: action.data.catId
      });
    }
    default:
      return state;
  }
}
