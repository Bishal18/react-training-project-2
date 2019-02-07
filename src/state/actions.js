import * as ActionTypes from './action-types';
import axios from 'axios';
import * as utils from '../utilities/api';
import config from '../configs/config';

export const getProducts = (products) => ({
    type: ActionTypes.PRODUCTS,
    payload: { products }
})

export const updateCart = (type, product) => ({
    type: ActionTypes.UPDATE_ITEMS,
    payload: { type, product }
})

export const removeFromCart = (productId) => ({
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { productId }
})

export const login = (authenticated, username) => ({
    type: ActionTypes.LOGIN,
    payload: { authenticated, username }
})

export const logout = () => ({
    type: ActionTypes.LOGOUT
})

export const fetchProducts = (type, filterParams) => (dispatch, getState) => {
    var apiUrl = utils.getProductApiUrl(type, filterParams);
    axios.get(apiUrl)
        .then(response => {
            console.log(response.data);
            dispatch(getProducts(response.data));
        })
        .catch(function (error) {
            console.log("Error in fetchProducts action: " + error);
        });
}

// export const login = (username, password) =>{
//     console.log("username", username);
//     console.log("password", password);

//     if(username === "admin" & password === "b")
//     {
//         return (dispatch) =>{
//             const action = {
//                 type: ActionTypes.LOGIN,
//                 payload: {username}
//             } 
//             dispatch(action);
//         }
//     }
// }


// export const logout = () => {
//     return (dispatch) => {
//         const action = {
//             type: ActionTypes.LOGOUT
//         } 
//         dispatch(action);
//     }
// }