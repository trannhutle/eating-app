import foods from "./foods";
import foodDetails from "./foodDetails";
import loadings from "./loadings";
import orders from "./orders";
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
export default combineReducers({
  foods,
  foodDetails,
  loadings,
  orders,
  loadingBar: loadingBarReducer
});
