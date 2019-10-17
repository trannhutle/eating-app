import { LOAD_DATA } from "../actions/loadings";
export default function loadings(state = null, action) {
  switch (action.type) {
    case LOAD_DATA: {
      return action.isFinished;
    }
    default:
      return state;
  }
}
