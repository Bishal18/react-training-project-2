//Shubham

import * as ActionTypes from '../state/action-types';
import * as cartUtil from '../utilities/cartUtil';
import config from '../configs/config'

const cartSessionMiddleware = ({ getState }) => (nextFunc) => (action) => {
    var cartItems = getState().cart.cartItems;
    const result = nextFunc(action);
    var updatedCartItems = null;
    if (action.type && action.type === ActionTypes.UPDATE_ITEMS) {
        updatedCartItems = cartUtil.updateCartItems(cartItems, action.payload.product);
        window.sessionStorage.setItem(config.localStorageKeys.cartItems, JSON.stringify(updatedCartItems));
    }

    if (action.type && action.type === ActionTypes.REMOVE_FROM_CART) {
        updatedCartItems = cartUtil.removeItemFromCart(cartItems, action.payload.productId);
        window.sessionStorage.setItem(config.localStorageKeys.cartItems, JSON.stringify(updatedCartItems));
    }
    return result;
}

export default cartSessionMiddleware;