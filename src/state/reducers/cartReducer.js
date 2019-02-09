import * as ActionTypes from '../action-types';
import * as cartUtil from '../../utilities/cartUtil';
const INITIAL_STATE = {
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_ITEMS:
            var updatedCartItems = cartUtil.updateCartItems(state.cartItems, action.payload.product);
            return { ...state, cartItems: [...updatedCartItems] };
        case ActionTypes.REMOVE_FROM_CART:
            var updatedCartItems = cartUtil.removeItemFromCart(state.cartItems, action.payload.productId);
            return { ...state, cartItems: [...updatedCartItems] };
        default:
            return state;
    }
}
