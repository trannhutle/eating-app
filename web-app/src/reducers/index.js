import foods from "./foods";
import foodDetails from "./foodDetails";
import loadings from "./loadings";
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
export default combineReducers({
  foods,
  foodDetails,
  loadings,
  loadingBar: loadingBarReducer
});
