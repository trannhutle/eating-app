import { FETCH_FOOD_DETAIL } from "../actions/foodDetails";

export default function foodDetails(state = null, action) {
  switch (action.type) {
    case FETCH_FOOD_DETAIL:
      return action.data;
    default:
      return state;
  }
}
