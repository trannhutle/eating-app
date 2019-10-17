import axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading";
import { handleLoadData } from "../actions/loadings";
import { HOST } from "../appConfig";
export const FETCH_FOOD = "FETCH_FOOD";

const LOAD_FOOD_API = `${HOST}/foods`;
function fetchFood(data) {
  return {
    type: FETCH_FOOD,
    data
  };
}
export function handleFetchFood(page = 0) {
  console.log("Request loading data from backend");
  return dispatch => {
    const url = `${LOAD_FOOD_API}?page=${page}`;
    dispatch(showLoading());
    dispatch(handleLoadData(true));
    return axios.get(url).then(response => {
      const data = response.data;
      console.log("Finishing loading data from backend", data);
      dispatch(fetchFood(data));
      dispatch(handleLoadData(false));
      dispatch(hideLoading());
    });
  };
}
