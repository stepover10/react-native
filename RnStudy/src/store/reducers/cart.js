import { ADD_TO_CART } from '../actions/cart'
import CartItem from '../../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0
}

export default (state=initialState, action) => {

  switch (action.type){
    case ADD_TO_CART: 
      alert('ADD_TO_CART!!')
      break;
  }

  return state;

}



