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

export const login = (username, password) =>{
    console.log("username", username);
    console.log("password", password);
    
    if(username === "admin" & password === "b")
    {
        return (dispatch) =>{
            const action = {
                type: ActionTypes.LOGIN,
                payload: {username}
            } 
            dispatch(action);
        }
    }
}
export const logout = () => {
    return (dispatch) => {
        const action = {
            type: ActionTypes.LOGOUT
        } 
        dispatch(action);
    }
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
