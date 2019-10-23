import { HOST } from "../appConfig";
import axios from "axios";
export const FETCH_FOOD_DETAIL = "FETCH_FOOD_DETAIL";
const LOAD_FOOD_DETAIL_API = `${HOST}/foods/detail`;

function fetchFoodDetail(data) {
  return {
    type: FETCH_FOOD_DETAIL,
    data
  };
}
export function handleFetchFoodDetail(foodDetailId) {
  console.log("handleFetchFoodDetail", foodDetailId);
  return (dispatch, getState) => {
    return new Promise((res, rej) => {
      const { foods } = getState();
      if (foods === null) {
        let queryParams = new URLSearchParams({ id: foodDetailId }).toString();
        axios
          .get(`${LOAD_FOOD_DETAIL_API}?${queryParams}`)
          .then(response => {
            const food = response.data;
            dispatch(fetchFoodDetail(food));
            res();
          })
          .catch(err => {
            console.error("There is an error is occured", err);
            rej();
          });
        // load food detail from back-end
      } else {
        const foodDetail = foods.list.filter(
          item => item._id === foodDetailId
        )[0];
        dispatch(fetchFoodDetail(foodDetail));
        res();
      }
    });
    // const temp = dispatch(fetchFoodDetail());
    // console.log("fetchFoodDetail", temp);
    // console.log("fetchFoodDetail", foods);
  };
}
