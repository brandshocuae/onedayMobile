import {
  ADD_CART,
  ADD_QUANTITY,
  ADD_SIZE,
  REMOVE_CART,
  REMOVE_QUANTITY,
  REMOVE_SIZE,
} from '../actionType';

// init state
const initState = {
  addCart: [],
  removeCart: null,
};

export default reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        addCart: action.addCart,
        quantity: action.quantity,
      };
    default:
      return state;
  }
};
