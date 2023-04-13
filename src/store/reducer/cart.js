import {ADD_ITEM, REMOVE_ITEM} from '../actionType';

// init state
const initState = {
  cart: [],
  total: 0,
};

export default reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      console.log('ACTION ==>', action);

      // make a copy
      const tempCart = [...state.cart];
      let tempPrice = state.total;
      console.log('WORKING 1 ==>');
      // find the current obj Ind
      let currentItemInd = tempCart.findIndex(i => i.id === action.item.id);
      console.log('WORKING 2 ==>');
      if (currentItemInd !== -1) {
        console.log('WORKING 3 ==>');
        // already exists
        let oldObj = {...tempCart[currentItemInd]};
        // update quantity
        oldObj.quantity += 1;

        // update price
        tempPrice += parseInt(action.item.attributes.price.value);
        // putting back into cart
        tempCart[currentItemInd] = oldObj;
      } else {
        console.log('WORKING 4 ==>');
        // add a quantity property
        let tempNewObj = {...action.item, quantity: 1};
        // this item is new one just push
        tempCart.push(tempNewObj);
        // update price

        tempPrice += parseInt(action.item.attributes.price.value);
      }
      console.log('WORKING 5 ==>');
      return {
        ...state,
        cart: tempCart,
        total: tempPrice,
      };

    case REMOVE_ITEM:
      console.log('ACTION ==>', action);

      // make a copy
      let tempCartR = [...state.cart];
      let tempPriceR = state.total;
      let currentItemIndR = tempCartR.findIndex(i => i.id === action.item.id);

      if (currentItemIndR !== -1) {
        // OBJ
        let tempItemObj = {...tempCartR[currentItemIndR]};

        tempItemObj.quantity -= 1;
        tempPriceR -= parseInt(action.item.attributes.price.value);

        // putting it back
        tempCartR[currentItemIndR] = tempItemObj;
        // if quantity is 0 then remove it from array
        if (tempItemObj.quantity === 0) {
          tempCartR.splice(currentItemIndR, 1);
        }
      }

      return {
        ...state,
        cart: tempCartR,
        total: tempPriceR,
      };
    default:
      return state;
  }
};
