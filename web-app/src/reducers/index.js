import foods from "./foods";
import categories from "./categories";
import foodDetails from "./foodDetails";
import loadings from "./loadings";
import orders from "./orders";
import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
export default combineReducers({
  foods,
  categories,
  foodDetails,
  loadings,
  orders,
  loadingBar: loadingBarReducer
});
