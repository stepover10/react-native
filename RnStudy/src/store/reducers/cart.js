import { ADD_TO_CART } from '../actions/cart'
import CartItem from '../../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0
}

const _insertCartItem = [];

export default (state=initialState, action) => {
  console.log("CART_STORE", action);
  switch (action.type){
    case ADD_TO_CART: 
      console.log('장바구니에 상품을 담았습니다!');
      // 전달받은 파라미터 값으로 상품을 담은
      // 웹에서는 주로 로컬스토리지를 이용하여 사용함


      break;
  }

  return state;
}




