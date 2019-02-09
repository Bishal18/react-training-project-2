import * as ActionTypes from './action-types';
import axios from 'axios';
import * as utils from '../utilities/api';
import config from '../configs/config';

export const getProducts = (products) => ({
    type: ActionTypes.PRODUCTS,
    payload: { products }
})

export const updateCart = (product) => ({
    type: ActionTypes.UPDATE_ITEMS,
    payload: { product }
})

export const removeFromCart = (productId) => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { productId }
})

export const buyNow = (product) => ({
    type: ActionTypes.BUY_NOW,
    payload: { product }
})

export const login = (user) => ({
    type: ActionTypes.LOGIN,
    payload: { user }
})

export const logout = () => ({
    type: ActionTypes.LOGOUT
})

export const validateToken = () => ({
    type: ActionTypes.VALIDATE_TOKEN
})

export const fetchProducts = (type, filterParams) => (dispatch, getState) => {
    utils.fetchProducts(type, filterParams)
        .then(response => {
            dispatch(getProducts(response));
        })
}

export const autheticateUser = (username, password, callback) => (dispatch, getState) => {
    utils.authenticateUser(username, password)
        .then(users => {
            if (users && users.length > 0) {
                dispatch(login(users[0]));
                callback(true);
            }
            else {
                callback(false);
            }
        })
}

export const placeOrder = (data, history) => (dispatch, getState) => {
    utils.placeOrder(data)
        .then(response => {
            if (response.status === 201) {
                history.push(`/orders/${response.data.id}/confirmation`);
            }
        })
}
