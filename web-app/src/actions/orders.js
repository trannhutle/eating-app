import { create } from "domain";

export const ADD_ORDER = "ADD_ORDER";

function addNewOrder(food) {
  return {
    type: ADD_ORDER,
    food
  };
}

export function handleAddNewOrder(food) {
  console.log(food);
  return (dispatch, getState) => {
    const { orders } = getState();
    const props = ["toppings", "extras"];
    const groups = orders
      .filter(order => order.details._id === food.details._id)
      .reduce((dupplicateOrder, currentOrder) => {
        // check if new order has same size
        const selectedSize = food.details.sizes.filter(
          size => size.selected
        )[0];
        if (
          currentOrder.details.sizes.filter(size => size.selected)[0]._id !==
          selectedSize._id
        ) {
          return null;
        }
        const oldSelectedItems = currentOrder.details.toppings
          .filter(item => item.selected)
          .map(item => {
            return item._id;
          });
        const newSelectedItems = food.details.toppings
          .filter(item => item.selected)
          .map(item => {
            return item._id;
          });
        // check is dupplicate
        if (
          oldSelectedItems.length !== newSelectedItems.length ||
          oldSelectedItems.sort().every((value, index) => {
            return value !== newSelectedItems.sort()[index];
          })
        )
          return null;
        return currentOrder;
        // Get selected [toppings and extra in detail] -> compare
      }, Object.create(null));
    console.log("this is the information from aaaa", groups);
    dispatch(addNewOrder(food));
  };
}
