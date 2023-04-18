import {ADD_ITEM, EMPTY_CART, REMOVE_ITEM} from '../actionType';

export const handleAddItemToCart = item => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const handleRemoveItem = item => {
  return {
    type: REMOVE_ITEM,
    item,
  };
};

export const handleEmptyCart = item => {
  return {
    type: EMPTY_CART,
    item,
  };
};
