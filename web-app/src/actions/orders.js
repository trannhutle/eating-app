import { create } from "domain";
import uuid from "react-uuid";
export const ADD_ORDER = "ADD_ORDER";
export const UPDATE_ORDER = "UPDATE_ORDER";

function addNewOrder(food) {
  return {
    type: ADD_ORDER,
    food
  };
}
function updateOrder(id, food) {
  return {
    type: UPDATE_ORDER,
    id,
    food
  };
}

export function handleAddNewOrder(food) {
  console.log(food);
  return (dispatch, getState) => {
    const { orders } = getState();
    const props = ["sizes", "toppings", "extras"];
    const dupplicatedOrder = orders
      .filter(order => order.details._id === food.details._id)
      .filter(currOrder => {
        if (!isNewFoodDistinct(props, currOrder, food)) {
          console.log("we found dupplicated", currOrder);
          return true;
        } else {
          console.log("GO to else on reduce", currOrder);
        }
      });
    console.log("this is the information from aaaa", dupplicatedOrder);
    if (dupplicatedOrder.length > 0) {
      dispatch(updateOrder(dupplicatedOrder[0].id, food));
    } else {
      dispatch(addNewOrder(Object.assign({}, food, { id: uuid() })));
    }
  };
}

const isNewFoodDistinct = (props, oldFood, newFood) => {
  const isOrderedFoodDistinct = props.some(attribute => {
    const oldSelectedItems = oldFood.details[attribute]
      .filter(item => item.selected)
      .map(item => {
        return item._id;
      });
    const newSelectedItems = newFood.details[attribute]
      .filter(item => item.selected)
      .map(item => {
        return item._id;
      });

    console.log("Get the attribute: ", attribute);
    // check is dupplicate
    if (
      oldSelectedItems.length !== newSelectedItems.length ||
      (oldSelectedItems.length > 0 &&
        oldSelectedItems.sort().every((value, index) => {
          return value !== newSelectedItems.sort()[index];
        }))
    ) {
      return true;
    }
  });
  return isOrderedFoodDistinct;
};
