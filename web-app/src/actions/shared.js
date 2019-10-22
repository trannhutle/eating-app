import axios from "axios";
import { showLoading, hideLoading } from "react-redux-loading";
import { handleLoadData } from "../actions/loadings";
import { HOST } from "../appConfig";

const DEFAULT_CAT = "default";
const LOAD_FOODS_BY_CAT_API = `${HOST}/foods/cat`;
const LOAD_FOOD_CAT_API = `${HOST}/cats`;
export const FETCH_DATA = "FETCH_DATA";

function fetchData(cats, foods) {
  return {
    type: FETCH_DATA,
    cats,
    foods
  };
}

export function handleInitFetchData(cat = DEFAULT_CAT, page = 0) {
  console.log("Start handleInitFetchData");
  return dispatch => {
    dispatch(showLoading());
    dispatch(handleLoadData(true));
    return axios
      .all([
        axios.get(LOAD_FOOD_CAT_API),
        axios.get(`${LOAD_FOODS_BY_CAT_API}?cat=${cat}&page=${page}`)
      ])
      .then(
        axios.spread((cats, foods) => {
          console.log("Finishing loading food data from backend", cats, foods);

          console.log(foods.data);
          console.log(cats.data);

          dispatch(fetchData(cats.data, foods.data));

          dispatch(handleLoadData(false));
          dispatch(hideLoading());
        })
      );
  };
}
