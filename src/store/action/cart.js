import {
  ADD_CART,
  ADD_QUANTITY,
  ADD_SIZE,
  REMOVE_CART,
  REMOVE_QUANTITY,
  REMOVE_SIZE,
} from '../actionType';

export const addCart = (addCart, quantity) => {
  return {
    type: ADD_CART,
    addCart,
    quantity,
  };
};

export const removeCart = removeCart => {
  return {
    type: REMOVE_CART,
    removeCart,
  };
};

export const addQuantity = addQuantity => {
  return {
    type: ADD_QUANTITY,
    addQuantity,
  };
};

export const removeQuantity = removeQuantity => {
  return {
    type: REMOVE_QUANTITY,
    removeQuantity,
  };
};
export const addSize = addSize => {
  return {
    type: ADD_SIZE,
    addSize,
  };
};
export const removeSize = removeSize => {
  return {
    type: REMOVE_SIZE,
    removeSize,
  };
};
