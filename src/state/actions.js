import * as ActionTypes from './action-types';
import axios from 'axios';
import * as utils from '../utilities/api';
import config from '../configs/config';

export const getProducts = (products) => ({
    type: ActionTypes.PRODUCTS,
    payload: { products }
})

export const getCategories = (categories) => ({
    type: ActionTypes.CATEGORIES,
    payload: { categories }
})


export const login = (user) => ({
    type: ActionTypes.LOGIN,
    payload: { user }
})

export const logout = () => ({
    type: ActionTypes.LOGOUT
})

export const validateToken = () =>({
    type: ActionTypes.VALIDATE_TOKEN
})

export const autheticateUser = (username, password, callback) => (dispatch, getState) => {
    const api = `${config.baseApiUrl}${config.apiRoutes.usersRoute}?username=${username}&password=${password}`
    fetch(api)
        .then(response => response.json())
        .then(users => {
            if (users && users.length > 0) {
                dispatch(login(users[0]));
                callback(true);
            }
            else {
                callback(false);
            }
        });
}


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

export const fetchCategories = (type, filterParams) => (dispatch, getState) => {
    var apiUrl = `${config.baseApiUrl}${config.apiRoutes.categoryRoute}`;
    axios.get(apiUrl)
        .then(response => {
            console.log(response.data);
            dispatch(getCategories(response.data));
        })
        .catch(function (error) {
            console.log("Error in fetchProducts action: " + error);
        });
}
