import * as ActionTypes from './action-types';
import * as utils from '../utilities/api';

//---------------------------------------------------------------------------------------
//Shubham - Start
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
//Shubham - End

//---------------------------------------------------------------------------------------
//Ankit - Start
export const fetchProducts = (type, filterParams) => (dispatch, getState) => {
    return utils.fetchProducts(type, filterParams)
        .then(response => {
            dispatch(getProducts(response));
            return response;
        })
}
//Ankit - End
//---------------------------------------------------------------------------------------

//Manoj - Start
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

export const register = (user, history) => (dispatch, getState) => {
    utils.register(user)
    .then(response => {
        dispatch(login(response));
        history.push('/')
    });
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
//Manoj - End

//---------------------------------------------------------------------------------------
//Rathan - Start
export const checkout = () => ({
    type: ActionTypes.CHECKOUT
})

export const placeOrder = (data, history) => (dispatch, getState) => {
    utils.placeOrder(data)
        .then(response => {
            if (response.status === 201) {
                dispatch(checkout());
                history.push(`/orders/${response.data.id}/confirmation`);
            }
        })
}
//Rathan - End






