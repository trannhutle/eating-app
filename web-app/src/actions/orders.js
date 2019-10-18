export const ADD_ORDER = "ADD_ORDER";

function addNewOrder(food) {
  return {
    type: ADD_ORDER,
    food
  };
}

export function handleAddNewOrder(food) {
  console.log(food);
  return dispatch => {
    dispatch(addNewOrder(food));
  };
}
