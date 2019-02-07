import * as ActionTypes from '../action-types';
import config from '../../configs/config';

const INITIAL_STATE = {
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_ITEMS:
            var index = state.cartItems.findIndex(item => item.id === action.payload.product.id);
            if (index !== -1) {
                var updatedProduct = {
                    ...state.cartItems[index],
                    qty: action.payload.type === "add" ? state.cartItems[index].qty + 1 : state.cartItems[index].qty - 1
                };
                return {
                    ...state, cartItems: [
                        ...state.cartItems.slice(0, index),
                        updatedProduct,
                        ...state.cartItems.slice(index + 1)
                    ]
                }
            }
            return { ...state, cartItems: [...state.cartItems, action.payload.product] };
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.productId
                )
            };
        default:
            return state;
    }
}
