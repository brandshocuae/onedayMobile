import {ADD_ITEM, REMOVE_ITEM} from '../actionType';

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
