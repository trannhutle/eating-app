import { FETCH_DATA } from "../actions/shared";

export default function categories(state = [], action) {
  switch (action.type) {
    case FETCH_DATA: {
      return action.cats;
    }
    default:
      return state;
  }
}
